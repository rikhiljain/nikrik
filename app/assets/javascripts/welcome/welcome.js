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

function bindAllEventHandlers(){

	bindMotorQuoteFormEvents();
	bindMotorQuoteBuyFormEvents();
	bindAccordionEvents();
	bindBreadcrumbEvents();

	$("[id=protectionForAccessories] > fieldset > legend > input").bind("click", function(){
		$("[id=protectionForAccessories1]").toggle();
	});

	$("[id=additionalDiscount] > fieldset > legend > input").bind("click", function(){
		$("[id=additionalDiscount1]").toggle();
	});

}



function  bindCityAutoComplete(){
	$( "#city" ).autocomplete({
		source: "/rtos.json",
		minLength: 2
	});
}

function bindDatePickers(){
	//$("[id=previousPolicyDetails] [id=date]").datepicker({ appendText: "(dd-mm-yyyy)", dateFormat: "dd-mm-yy", constrainInput: "true" });
	$("[id=previousPolicyDetails] [id=date]").datepicker({ dateFormat: "dd-mm-yy", constrainInput: "true" });
}

function showOrHideElements(){
	$("[id=protectionForAccessories] [id=kitPriceControlGroup]").hide();
	$("[id=previousPolicyDetails] [id=previousPolicyDetailsDiv1]").hide();
	$("[id=previousPolicyDetails] [id=previousPolicyDetailsDiv2]").hide();
	$("[id=basicDetails] > [id=registrationDetails] [id=day]").hide();
	$("[id=previousPolicyDetails] [id=day]").hide();
	$("[id=previousPolicyDetails] [id=month]").hide();
	$("[id=previousPolicyDetails] [id=year]").hide();
	$("[id=protectionForAccessories1]").hide();
	$("[id=additionalDiscount1]").hide();
}

function fireEventsManually(){
}


function esc(text){
	var a =  text
			.replace("&","&amp;")
			.replace("<", "&lt;")
			.replace(">", "&gt;");
	return a;
}

function bindMotorQuoteFormEvents(){
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

	//Binding the form validation
	validateMotorQuoteForm();

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

	$("[id=motorQuoteFormResetLink]").bind("click",function(e){
		$("[id=motorQuoteForm]").each (function(){
  			this.reset();
		});
	});
}

function bindMotorQuoteBuyFormEvents(){
	//Binding the form validation
	validateMotorQuoteBuyForm();

	//Binding form submit event
	$("[id=motorQuoteBuyForm]").submit(function() {
		var isvalidate=$("[id=motorQuoteBuyForm]").valid();
		if(isvalidate){
			var serializedJSON = createMotorQuoteBuyRequest();
			console.log(serializedJSON);
			submitMotorQuoteBuyRequest(serializedJSON);
			//fillResultTable(serializedJSON);
 			return false;
		}
	});
}

function bindAccordionEvents(){
	//Binding the accordion
	$(".accordion").on('shown hidden', function(e){
		if(e.type == "shown"){
			var text = $(e.target).siblings(".accordion-heading").find("a").text();
			if(text == "Motor Quote Form"){
				$(".breadcrumb > li:nth-child(1)").addClass("active");
				$(".breadcrumb > li:nth-child(2)").removeClass("active");
				$(".breadcrumb > li:nth-child(3)").removeClass("active");
			}
			else if(text == "Results"){
				$(".breadcrumb > li:nth-child(1)").removeClass("active");
				$(".breadcrumb > li:nth-child(2)").addClass("active");
				$(".breadcrumb > li:nth-child(3)").removeClass("active");
			}
			else if(text == "Insured Contact Details"){
				$(".breadcrumb > li:nth-child(1)").removeClass("active");
				$(".breadcrumb > li:nth-child(2)").removeClass("active");
				$(".breadcrumb > li:nth-child(3)").addClass("active");
			}
		}
    	$(e.target).siblings('.accordion-heading').find('.accordion-toggle i').toggleClass('icon-arrow-down icon-arrow-up');
	});
}

function bindBreadcrumbEvents(){
	$(".breadcrumb > li").bind("click", function(e){
		if($(e.target).hasClass("active")){
			return;
		}
		var text = $(e.target).text();
		if(text == "Enter details and Review"){
			$("[id=quoteResultsBuyAccordion] [id=link]").click();
		}
		else if(text == "Results/"){
			$("[id=quoteResultsAccordion] [id=link]").click();
		}
		else if(text == "Calculate Premium/"){
			$("[id=quoteFormAccordion] [id=link]").click();
		}
	});
}