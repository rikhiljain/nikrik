(function($){
	$(document).ready(function(){
		cacheAllJquerySelectore();
		bindAllEventHandlers();
		populateStaticData();
		populateDynamicData();
		bindCityAutoComplete();
		showOrHideElements();
		fireEventsManually();
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

	//Compute new policy start date
	$("[id=previousPolicyDetails] [id=day]").bind("change",function(){
		populateNewPolicyStartDate();
	});
	$("[id=previousPolicyDetails] [id=month]").bind("change",function(){
		populateNewPolicyStartDate();
	});
	$("[id=previousPolicyDetails] [id=year]").bind("change",function(){
		populateNewPolicyStartDate();
	});

	//Binding form submit event
	$("[id=motorQuoteForm]").submit(function() {
		var serializedJSON = createMotorQuoteRequest();
		console.log(serializedJSON);
		submitMotorQuoteRequest(serializedJSON);

		//fillResultTable(serializedJSON);
 		return false;
	});
	
}

function populateStaticData(){
	pouplateDay($("[id=basicDetails] > [id=registrationDetails] [id=day]"));
	pouplateMonth($("[id=basicDetails] > [id=registrationDetails] [id=month]"));
	pouplateYear($("[id=basicDetails] > [id=registrationDetails] [id=year]"));
	
	pouplateDay($("[id=previousPolicyDetails] [id=day]"));
	pouplateMonth($("[id=previousPolicyDetails] [id=month]"));
	pouplateYear($("[id=previousPolicyDetails] [id=year]"));	
	
	populateNCB($("[id=previousPolicyDetails] [id=ncb]"));
	populateKit($("[id=protectionForAccessories] [id=kit]"));
	populateKitPrice($("[id=protectionForAccessories] [id=kitPrice]"));

}

function populateDynamicData(){
	populateManufacturers();
}

function  bindCityAutoComplete(){
	$( "#city" ).autocomplete({
		source: "/rtos.json",
		minLength: 2
	});
}

function showOrHideElements(){
	$("[id=protectionForAccessories] [id=kitPriceControlGroup]").hide();
}

function fireEventsManually(){
}

function populateManufacturers(){
	var options;
	var address = "/idv_charts/distinctMakers.json";
	//var address = "make.json";
	$.getJSON(address,function(options){
		$.each(options, function(){
			options += '<option value="' + this['optionValue'] + '">' + this['optionDisplay'] + '</option>';
		});
		$("[id=basicDetails] > [id=vehicleDetails] [id=make]").html(options);
		$("[id=basicDetails] > [id=vehicleDetails] [id=make]").change();
	});
}

function populateModel(manufacturer){
	var options;
	var address = "/idv_charts/models.json?manufacturer="+manufacturer;
	//var address = "model.json";
	$.getJSON(address,function(options){
		$.each(options, function(){
			options += '<option value="' + this['optionValue'] + '">' + this['optionDisplay'] + '</option>';
		});
		$("[id=basicDetails] > [id=vehicleDetails] [id=model]").html(options);
		$("[id=basicDetails] > [id=vehicleDetails] [id=model]").change();
	});	
}

function populatePrice(){
	var idvChartId = $("[id=basicDetails] > [id=vehicleDetails] [id=model]").val();
	var mdate = registrationDate();
	var options;
	var address = "/idv_charts/"+idvChartId+"/motorValue.json?mdate="+mdate;
	//var address = "model.json";
	$.getJSON(address,function(price){
		$("[id=basicDetails] > [id=vehicleDetails] [id=price]").text(price);
	});
}

function populateRegistrationDate(){
	var mdate = registrationDate();
	$("[id=basicDetails] > [id=registrationDetails] [id=registrationDate]").val(mdate);
}

function populateNewPolicyStartDate(){
	var year = $("[id=previousPolicyDetails] [id=year]").val();
	var month = $("[id=previousPolicyDetails] [id=month]").val();
	var day = $("[id=previousPolicyDetails] [id=day]").val();
	var d = new Date(year, month, day);
	d.setDate(d.getDate() + 1);
	$("[id=previousPolicyDetails] [id=newPolicyStartDate]").text(d.getDate()+"-"+ m_names[d.getMonth()]+"-"+d.getFullYear());
}

function populatePolicyExpDate(){
	var mdate = policyExpDate();
	$("[id=previousPolicyDetails] [id=policyExpDate]").val(mdate);
}

function pouplateDay(selectElement){
	var options; 
	for (var i=1; i <= 31;++i) { 
		options += '<option value="' + i + '">' + i + '</option>';
	 }
	selectElement.html(options);
}

function pouplateMonth(selectElement){
	var options = [
	               	{"optionValue":"01", "optionDisplay": "Jan"},
	               	{"optionValue":"02", "optionDisplay": "Feb"},
	               	{"optionValue":"03", "optionDisplay": "Mar"},
	               	{"optionValue":"04", "optionDisplay": "Apr"},
	               	{"optionValue":"05", "optionDisplay": "May"},
	               	{"optionValue":"06", "optionDisplay": "Jun"},
	               	{"optionValue":"07", "optionDisplay": "Jul"},
	               	{"optionValue":"08", "optionDisplay": "Aug"},
	               	{"optionValue":"09", "optionDisplay": "Sep"},
	               	{"optionValue":"10", "optionDisplay": "Oct"},
	               	{"optionValue":"11", "optionDisplay": "Nov"},
	               	{"optionValue":"12", "optionDisplay": "Dec"}
	              ];
	$.each(options, function(){
		options += '<option value="' + this['optionValue'] + '">' + this['optionDisplay'] + '</option>';
	});

	selectElement.html(options);
	
}

function pouplateYear(selectElement){
	var options; 
	for (var i=1999; i <= 2020;++i) { 
		options += '<option value="' + i + '">' + i + '</option>';
	 }
	selectElement.html(options);	
}

function populateNCB(selectElement){
	var options; 
	for (var i=20; i <= 100;i+=20) { 
		options += '<option value="' + i + '">' + i + '%</option>';
	 }
	selectElement.html(options);	
}

function populateKit(selectElement){
var options = [
	               	{"optionValue":"FactoryFittedCNG", "optionDisplay": "Factory Fitted CNG"},
	               	{"optionValue":"CNG", "optionDisplay": "CNG"},
	               	{"optionValue":"FactoryFittedLPG", "optionDisplay": "Factory Fitted LPG"},
	               	{"optionValue":"LPG", "optionDisplay": "LPG"}
	              ];
	$.each(options, function(){
		options += '<option value="' + this['optionValue'] + '">' + this['optionDisplay'] + '</option>';
	});

	selectElement.html(options);	
}

function populateKitPrice(selectElement){
	var options;
	for (var i=10000; i <= 100000;i+=10000) { 
		options += '<option value="' + i + '">' + i + '</option>';
	 }

	 selectElement.html(options);	
}

function registrationDate(){
	return $("[id=basicDetails] > [id=registrationDetails] [id=year]").val()+"-"+$("[id=basicDetails] > [id=registrationDetails] [id=month]").val()+"-"+$("[id=basicDetails] > [id=registrationDetails] [id=day]").val();
}

function policyExpDate(){
	return $("[id=previousPolicyDetails] [id=year]").val()+"-"+$("[id=previousPolicyDetails] [id=month]").val()+"-"+$("[id=previousPolicyDetails] [id=day]").val();
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
  
