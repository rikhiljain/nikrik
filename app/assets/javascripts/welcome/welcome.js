(function($){
	$(document).ready(function(){
		cacheAllJquerySelectore();
		bindAllEventHandlers();
		populateStaticData();
		populateDynamicData();
		bindCityAutoComplete();
		bindDatePickers();
		showOrHideElements();
		fireEventsManually();
		bindToolTips();
	});
})(jQuery);	

function cacheAllJquerySelectore(){
	//fill this
}

function bindAllEventHandlers(){
	//this will hide/unhide the previous policy details div
	$("[id=basicDetails] > [id=currentInsuranceDetails] [id=policyType]").bind("change",function(){
		if($(this).val() == "true"){
			$("[id=previousPolicyDetails]").hide();
		}else{
			$("[id=previousPolicyDetails]").show();
		}
	});
	
	//this will change the model drop down when we change the make
	$("[id=basicDetails] > [id=vehicleDetails] [id=make]").bind("change",function(){
		populateModel($("[id=basicDetails] > [id=vehicleDetails] [id=make]").val());
	});

	//this will update the price when we change the model
	$("[id=basicDetails] > [id=vehicleDetails] [id=model]").bind("change",function(){
		populatePrice($(this).val(),registrationDate());
	});

	//this will update the price when we change day, month or year of purchase date
	$("[id=basicDetails] > [id=registrationDetails] [id=day]").bind("change",function(){
		populatePrice();
	});
	$("[id=basicDetails] > [id=registrationDetails] [id=month]").bind("change",function(){
		populatePrice();
	});
	$("[id=basicDetails] > [id=registrationDetails] [id=year]").bind("change",function(){
		populatePrice();
	});

	//If a claim has been made in previous policy year we will not show the ncb drop down and checkbox
	//But if a claim has not been made in previous policy year then we want to show these options
	$("[id=previousPolicyDetails] [id=claimsMade]").bind("change",function(){
		if($(this).val() == "true"){
			$("[id=previousPolicyDetails] [id=ncbDiv]").hide();
			$("[id=previousPolicyDetails] [id=noCliamBounsVerified]").hide();
		}else{
			$("[id=previousPolicyDetails] [id=ncbDiv]").show();
			$("[id=previousPolicyDetails] [id=noCliamBounsVerified]").show();
		}
	});	

	//If the kit is not factory fitted, we must show the kit value drop down
	$("[id=protectionForAccessories] [id=kit]").bind("change",function(){
		if($(this).val() == "CNG" || $(this).val() == "LPG" ){
			$("[id=protectionForAccessories] [id=kitPriceControlGroup]").show();
		}
		else{
			$("[id=protectionForAccessories] [id=kitPriceControlGroup]").hide();
		}
	});

	// //Compute new policy start date
	// $("[id=previousPolicyDetails] [id=day]").bind("change",function(){
	// 	populateNewPolicyStartDate();
	// });
	// $("[id=previousPolicyDetails] [id=month]").bind("change",function(){
	// 	populateNewPolicyStartDate();
	// });
	// $("[id=previousPolicyDetails] [id=year]").bind("change",function(){
	// 	populateNewPolicyStartDate();
	// });

	$("[id=previousPolicyDetails] [id=date]").bind("change",function(){
	 	populateNewPolicyStartDate();
	 });

	//Binding form submit event
	$("[id=motorQuoteForm]").submit(function() {
		var isvalidate=$("[id=motorQuoteForm]").valid();
		if(isvalidate){
			var serializedJSON = createMotorQuoteRequest();
			console.log(serializedJSON);
			submitMotorQuoteRequest(serializedJSON);
			//fillResultTable(serializedJSON);
 			return false;
		}
	});
	//Binding the form validation
	validateForm();
	//Binding the accordion
	$(".accordion").on('shown hidden', function(e){
    $(e.target).siblings('.accordion-heading').find('.accordion-toggle i').toggleClass('icon-arrow-down icon-arrow-up');
});
}



function  bindCityAutoComplete(){
	$( "#city" ).autocomplete({
		source: "/rtos.json",
		minLength: 2
	});
}

function bindDatePickers(){
	$("[id=previousPolicyDetails] [id=date]").datepicker({ appendText: "(dd-mm-yyyy)", dateFormat: "dd-mm-yy", constrainInput: "true" });
}

function showOrHideElements(){
	$("[id=protectionForAccessories] [id=kitPriceControlGroup]").hide();
	$("[id=previousPolicyDetails] [id=previousPolicyDetailsDiv1]").hide();
	$("[id=previousPolicyDetails] [id=previousPolicyDetailsDiv2]").hide();
	$("[id=basicDetails] > [id=registrationDetails] [id=day]").hide();
	$("[id=previousPolicyDetails] [id=day]").hide();
	$("[id=previousPolicyDetails] [id=month]").hide();
	$("[id=previousPolicyDetails] [id=year]").hide();
}

function fireEventsManually(){
}


function createMotorQuoteRequest(){
  	populatePolicyExpDate();
  	populateRegistrationDate();
  	var ignoreFormFields = new Array();
  	if($("[id=basicDetails] > [id=currentInsuranceDetails] [id=policyType]:checked").val() == "true"){
  		ignoreFormFields["policy_exp_date"] = "dummy";
  		ignoreFormFields["has_claim"] = "dummy";
  		ignoreFormFields["ncb"] = "dummy";
  	}
  	if($("[id=previousPolicyDetails] [id=claimsMade]:checked").val() == "true"){
  		ignoreFormFields["ncb"] = "dummy";
  	}
  	if($("[id=protectionForAccessories] [id=kit]").val() == "FactoryFittedLPG" || $("[id=protectionForAccessories] [id=kit]").val() == "FactoryFittedCNG"){
  		ignoreFormFields["cng_value"] = "dummy";
  	}
  	var json = {};
  	console.log($('form').serializeArray());
  	$.map($("form").serializeArray(), function(el, i){
  		if(el.value == "" || ignoreFormFields[el.name] == "dummy"){
  			//ignore
  		}
  		else{
  			json[el.name] = el.value;
  		}

  	});
  	return JSON.stringify(json);
}

function submitMotorQuoteRequest(serializedJSON){
	$.ajax({
  				url: "/motor_searches/quote",
  				type: "POST",
				dataType: "json", // expected format for response
				contentType: "application/json", // send as JSON
				data: serializedJSON,

  				complete: function(data) {
    				//called when complete
  				},

  				success: function(data) {
    				//called when successful
    				fillResultTable(data);
    				$("[id=quoteFormAccordion] [id=link]").click();
					$("[id=quoteResultsAccordion] [id=link]").click();
 				},

  				error: function(data, textStatus, errorThrown) {
    				//called when there is an error
    				console.log("some error happened" + textStatus);
  				},
			})
}

function fillResultTable(data){
	//var a = '[{"company": 1,"total_premium": 110937.63745664,"discount": 0},{"company": 2,"total_premium": 110937.63745664,"discount": 0},{"company": 3,"total_premium": 10937.63745664,"discount": 0},{"company": 4,"total_premium": 110937.63745664,"discount": 0}]';
	//var a = '[{"company_id":1,"company_name":"ICICI","total_premium":"56,288","final_premium":"56,288","discount":"0"},{"company_id":2,"company_name":"BAJAJ","total_premium":"56,288","final_premium":"56,288","discount":"0"},{"company_id":3,"company_name":"TATA","total_premium":"56,288","final_premium":"56,288","discount":"0"},{"company_id":4,"company_name":"RELIANCE","total_premium":"56,288","final_premium":"56,288","discount":"0"}]';

//alert(data[0].company_name);
//var results = JSON.parse(a);
var results = data;

var e = esc;
var html = [], h = -1;
html[++h] = "<table id='quoteResultsTable' class='table table-bordered'>";
html[++h] = "<th>Company Name</th>";
html[++h] = "<th>Total Premium</th>";
html[++h] = "<th>Discount</th>";
html[++h] = "<th>Final Premium</th>";
html[++h] = "<tbody>";
for(var result, i = -1; result = results[++i];){
	html[++h] = "<tr><td>";
	html[++h] = result.company_name;
	html[++h] = "</td><td>";
	html[++h] = result.total_premium;
	html[++h] = "</td><td>";
	html[++h] = result.discount;	
	html[++h] = "</td><td>";	
	html[++h] = result.final_premium;	
	html[++h] = "</td></tr>";
}
html[++h] = "</tbody>";
html[++h] = "</table>";
$("[id=quoteResultsAccordion] [id=table]")[0].innerHTML = html.join('');
}

function esc(text){
	var a =  text
			.replace("&","&amp;")
			.replace("<", "&lt;")
			.replace(">", "&gt;");
	return a;
}
  
function validateForm(){

	// Validation
	$("[id=motorQuoteForm]").validate({
		rules:{
			register_city:"required"
		},

		messages:{
			register_city:"Enter your registration city"
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass)
		{
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass)
		{
			$(element).parents('.control-group').removeClass('error');
			//$(element).parents('.control-group').addClass('success');
		}
	});
}


function bindToolTips(){

	//$("[id=basicDetails] > [id=currentInsuranceDetails] [id=policyType_icon]").attr("title","???");
	$("[id=basicDetails] > [id=registrationDetails] [id=city_icon]").attr("title","Please eneter first 3 letters of the RTO city");
	$("[id=basicDetails] > [id=registrationDetails] [id=day_icon]").attr("title","Available in your vehicle's RC book");
	$("[id=basicDetails] > [id=registrationDetails] [id=registrationType_icon]").attr("title","Select 'Individual' in case vehicle is registered in the name of an Individual");
	$("[id=basicDetails] > [id=vehicleDetails] [id=make_icon]").attr("title","Please select the vehicle manufacturer and vehicle model");
	$("[id=basicDetails] > [id=vehicleDetails] [id=price_icon]").attr("title","???");

	$("[id=previousPolicyDetails] [id=prevPolicyType_icon]").attr("title","Available in your previous policy");
	//$("[id=previousPolicyDetails] [id=date_icon]").attr("title","");
	//$("[id=previousPolicyDetails] [id=newPolicyStartDate_icon]").attr("title","");
	//$("[id=previousPolicyDetails] [id=claimsMade_icon]").attr("title","");
	$("[id=previousPolicyDetails] [id=ncb_icon]").attr("title","Available in your previous policy");

	$("[id=protectionForAccessories] [id=elecAccessories_icon]").attr("title","Provides cover for electrical accessories that are not factory fitted with the vehicle");
	$("[id=protectionForAccessories] [id=nonElecAccessories_icon]").attr("title","Provides cover for Non-electrical/Non-electronic equipments that are not factory fitted with the vehicle");
	$("[id=protectionForAccessories] [id=kit_icon]").attr("title","Provides cover for CNG/LPG kit that is not factory fitted with the vehicle");
	$("[id=protectionForAccessories] [id=kitPrice_icon]").attr("title","???");

	$("[id=additionalDiscount] [id=antiTheft_icon]").attr("title","Get a discount if you have installed an ARAI approved anti-theft device in your vehicle");
	$("[id=additionalDiscount] [id=automobileAssoc_icon]").attr("title","Get a discount if you are a memeber of any automobile association e.g. Western India Automobile Association");

}