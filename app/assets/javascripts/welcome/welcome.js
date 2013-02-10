(function($){
	$(document).ready(function(){
		var user;
		var quotes;
		var selectedQuote;

		$quoteFormAccordionLink = $("[id=quoteFormAccordion] [id=link]");
		$quoteResultsAccordionLink = $("[id=quoteResultsAccordion] [id=link]");
		$quoteResultsBuyAccordionLink = $("[id=quoteResultsBuyAccordion] [id=link]");

		//***********************Motor*******************************************

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


		//***********************Health*******************************************

		$noOfChilds = $("[id=healthQuoteForm] [id=no_of_childs]");
		$healthCover = $("[id=healthQuoteForm] [id=heath_cover]");
		$healthAge = $("[id=healthQuoteForm] [id=adult_age]");
		$healthPolicyFor = $("[id=healthQuoteForm] [id=policyFor]");
		$noOfChildsGrp = $("[id=healthQuoteForm] [id=no_of_childs_grp]");
		$healthQuoteForm = $("[id=healthQuoteForm]");

		$healthFormAccordionLink = $("[id=healthFormAccordion] [id=link]");
		$healthResultsAccordionLink = $("[id=healthResultsAccordion] [id=link]");
		//$healthResultsBuyAccordionLink = $("[id=quoteResultsBuyAccordion] [id=link]");

		$mobileNumber = $("[id=motorQuoteBuyForm] [id=mobileNumber]");
		$emailAddress = $("[id=motorQuoteBuyForm] [id=emailAddress]");
		$address = $("[id=motorQuoteBuyForm] [id=address]");

		cacheAllJquerySelector(); //jquery-selector.js
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