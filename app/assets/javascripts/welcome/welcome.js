(function($){
	$(document).ready(function(){
		var user;
		var motorquotes;
		var selectedMotorQuote;

		$quoteFormAccordionLink = $("[id=quoteFormAccordion] [id=link]");
		$quoteResultsAccordionLink = $("[id=quoteResultsAccordion] [id=link]");
		$quoteResultsBuyAccordionLink = $("[id=quoteResultsBuyAccordion] [id=link]");

		$motorQuoteForm = $("[id=motorQuoteForm]");
		$motorQuoteFormNotificationDiv = $("[id=motorQuoteFormNotificationDiv]");
		$motorQuoteFormNotificationDivCloseLink = $("[id=motorQuoteFormNotificationDiv] a");

		$policyType = $("[id=basicDetails] > [id=currentInsuranceDetails] [id=policyType]");
		$previousPolicyDetails = $("[id=previousPolicyDetails]");
		$make = $("[id=basicDetails] > [id=vehicleDetails] [id=make]");
		$model = $("[id=basicDetails] > [id=vehicleDetails] [id=model]");
		$registerDate = $("[id=basicDetails] > [id=registrationDetails] [id=registerDate]");
		$price = $("[id=basicDetails] > [id=vehicleDetails] [id=price]");

		$policyExpDate = $("[id=previousPolicyDetails] [id=date]");
		$newPolicyStartDate = $("[id=previousPolicyDetails] [id=newPolicyStartDate]");

		$legendProtectionForAccessories = $("[id=protectionForAccessories] > fieldset > legend > input");
		$legendAdditionalDiscount = $("[id=additionalDiscount] > fieldset > legend > input");
		$legendAdditionalCovers = $("[id=additionalCovers] > fieldset > legend > input");

		$rtoId = $("[id=basicDetails] > [id=registrationDetails] [id=rtoId]");

		$claimsMade = $("[id=previousPolicyDetails] [id=claimsMade]");
		$ncbDiv = $("[id=previousPolicyDetails] [id=ncbDiv]");
		$ncb = $("[id=previousPolicyDetails] [id=ncb]");
		$noCliamBounsVerified = $("[id=previousPolicyDetails] [id=noCliamBounsVerified]");

		$kit = $("[id=protectionForAccessories] [id=kit]");
		$kitPrice = $("[id=protectionForAccessories] [id=kitPrice]");
		$kitPriceControlGroup = $("[id=protectionForAccessories] [id=kitPriceControlGroup]");

		$coverageAmt = $("[id=additionalCovers] [id=coverage_amt]");


		$motorQuoteBuyForm = $("[id=motorQuoteBuyForm]");
		$motorQuoteBuyFormNotificationDiv = $("[id=motorQuoteBuyFormNotificationDiv]");
		$motorQuoteBuyFormNotificationDivCloseLink = $("[id=motorQuoteBuyFormNotificationDiv] a");

		$mobileNumber = $("[id=motorQuoteBuyForm] [id=mobileNumber]");
		$emailAddress = $("[id=motorQuoteBuyForm] [id=emailAddress]");
		$address = $("[id=motorQuoteBuyForm] [id=address]");

		cacheAllJquerySelectore(); //jquery-selector.js
		jqueryFormValidations(); //jquery-form-validations.js
		populateStaticData(); //static-data.js
		bindToolTips(); //tooltips.js
		bindDatePickers(); //this file [the main file will have all the binding code]
		bindCityAutoComplete(); //this file
		bindAllEventHandlers(); //this file
		populateDynamicData(); //dynamic-data.js
		postInitialization(); //post-initialization.js
	});
})(jQuery);	

function bindAllEventHandlers(){

	bindMotorQuoteFormEvents();
	bindMotorQuoteBuyFormEvents();
	bindAccordionEvents();
	bindBreadcrumbEvents();

	$legendProtectionForAccessories.bind("click", function(){
		$("[id=protectionForAccessories1]").toggle();
	});

	$legendAdditionalDiscount.bind("click", function(){
		$("[id=additionalDiscount1]").toggle();
	});

	$legendAdditionalCovers.bind("click", function(){
		$("[id=additionalCovers1]").toggle();
	});

}



function  bindCityAutoComplete(){
	$( "#registerCity" ).autocomplete({
		source: "/motor/rtos.json",
		minLength: 2,
		search: function(event, ui){
			$rtoId.val("");
		},
		select: function( event, ui ) {
				$rtoId.val(ui.item.id);
            }
	});
}

function bindDatePickers(){
	var policyEndDate = new Date();	
	policyEndDate.setDate(policyEndDate.getDate()+7);
	$policyExpDate.datepicker({ dateFormat: "dd-mm-yy", constrainInput: "true", changeMonth: "true", changeYear: "true", defaultDate: policyEndDate });
	//$("[id=previousPolicyDetails] [id=date]").val(policyEndDate.getDate()+"-"+policyEndDate.getMonth()+1+"-"+policyEndDate.getFullYear());

	var registrationDate = new Date();	
	registrationDate.setYear(registrationDate.getFullYear()-5);
	$registerDate.datepicker({ dateFormat: "dd-mm-yy", constrainInput: "true", changeMonth: "true", changeYear: "true",defaultDate: registrationDate });
	//$("[id=registrationDetails] [id=registerDate]").val(registrationDate.getDate()+"-"+registrationDate.getMonth()+1+"-"+registrationDate.getFullYear());
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
	$policyType.bind("change",function(){
		if($(this).val() == "true"){
			$previousPolicyDetails.hide();
		}else{
			$previousPolicyDetails.show();
		}
	});
	
	//this will change the model drop down when we change the make
	$make.bind("change",function(){
		populateModel($make.val());
	});

	//this will update the price when we change the model
	$model.bind("change",function(){
		populatePrice($(this).val());
	});

	//this will update the price when we change day, month or year of purchase date
	$registerDate.bind("change",function(){
		populatePrice();
	});

	//If a claim has been made in previous policy year we will not show the ncb drop down and checkbox
	//But if a claim has not been made in previous policy year then we want to show these options
	$claimsMade.bind("change",function(){
		if($(this).val() == "true"){
			$ncbDiv.hide();
			$noCliamBounsVerified.hide();
		}else{
			$ncbDiv.show();
			$noCliamBounsVerified.show();
		}
	});	

	//If the kit is not factory fitted, we must show the kit value drop down
	$kit.bind("change",function(){
		if($(this).val() == "CNG" || $(this).val() == "LPG" ){
			$kitPriceControlGroup.show();
		}
		else{
			$kitPriceControlGroup.hide();
		}
	});


	$policyExpDate.bind("change",function(){
	 	populateNewPolicyStartDate();
	 });

	//Binding the form validation
	validateMotorQuoteForm();

	$("[id=motorQuoteFormResetLink]").bind("click",function(e){
		$("[id=motorQuoteForm]").each (function(){
  			this.reset();
		});
	});
}

function bindMotorQuoteBuyFormEvents(){
	//Binding the form validation
	validateMotorQuoteBuyForm();
}

function bindAccordionEvents(){
	//Binding the accordion
	$(".accordion").on('shown hidden', function(e){
		if(e.type == "shown"){
			var index =  $(".accordion-group").index($(e.target).parents(".accordion-group")) + 1;
			if(index == 1){ //"Motor Quote Form"
				$(".breadcrumb > li:nth-child(1)").addClass("active");
				$(".breadcrumb > li:nth-child(2)").removeClass("active");
				$(".breadcrumb > li:nth-child(3)").removeClass("active");
			}
			else if(index == 2){ //"Results"
				$(".breadcrumb > li:nth-child(1)").removeClass("active");
				$(".breadcrumb > li:nth-child(2)").addClass("active");
				$(".breadcrumb > li:nth-child(3)").removeClass("active");
			}
			else if(index == 3){//"Insured Contact Details"
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
		var index = $(".breadcrumb li").index($(e.target)) + 1;
		if(index == 3){//"Enter details and Review"
			$(".accordion-group:nth-child(3) [id=link]").click();
		}
		else if(index == 2){//"Results/"
			$(".accordion-group:nth-child(2) [id=link]").click();
		}
		else if(index == 1){//"Calculate Premium/"
			$(".accordion-group:nth-child(1) [id=link]").click();
		}
	});
}