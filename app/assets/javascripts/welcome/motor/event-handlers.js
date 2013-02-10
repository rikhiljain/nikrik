function  __motor__bindAllEventHandlers(){

	__motor__bindQuoteFormEvents();

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

function __motor__bindQuoteFormEvents(){
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
		__motor__populateModel($make.val());
	});

	//this will update the price when we change the model
	$model.bind("change",function(){
		__motor__populatePrice($(this).val());
	});

	//this will update the price when we change day, month or year of purchase date
	$registerDate.bind("change",function(){
		__motor__populatePrice();
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
	 	__motor__populateNewPolicyStartDate();
	 });

	//Binding the form validation
	__motor__validateQuoteForm();

	$("[id=motorQuoteFormResetLink]").bind("click",function(e){
		$("[id=motorQuoteForm]").each (function(){
  			this.reset();
		});
	});
}