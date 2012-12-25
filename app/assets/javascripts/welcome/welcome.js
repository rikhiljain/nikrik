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
		if(e.type == "shown"){
			console.log($(e.target).siblings(".accordion-heading").find("a").text());
		}
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


function esc(text){
	var a =  text
			.replace("&","&amp;")
			.replace("<", "&lt;")
			.replace(">", "&gt;");
	return a;
}