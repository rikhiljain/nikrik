function  __motor__bindAllEventHandlers(){

	__motor__bindQuoteFormEvents();

	window.$legendProtectionForAccessories.bind("click", function(){
		$("[id=protectionForAccessories1]").toggle();
	});

	window.$legendAdditionalDiscount.bind("click", function(){
		$("[id=additionalDiscount1]").toggle();
	});

	window.$legendAdditionalCovers.bind("click", function(){
		$("[id=additionalCovers1]").toggle();
	});

}

function __motor__bindQuoteFormEvents(){
	//this will hide/unhide the previous policy details div
	window.$policyType.bind("change",function(){
		if($(this).val() == "true"){
			window.$previousPolicyDetails.hide();
		}else{
			window.$previousPolicyDetails.show();
		}
	});
	
	//this will change the model drop down when we change the make
	window.$make.bind("change",function(){
		__motor__populateModel($make.val());
	});

	//this will update the price when we change the model
	window.$model.bind("change",function(){
		__motor__populatePrice($(this).val());
	});

	//this will update the price when we change day, month or year of purchase date
	window.$registerDate.bind("change",function(){
		__motor__populatePrice();
	});

	//If a claim has been made in previous policy year we will not show the ncb drop down and checkbox
	//But if a claim has not been made in previous policy year then we want to show these options
	window.$claimsMade.bind("change",function(){
		if($(this).val() == "true"){
			window.$ncbDiv.hide();
			window.$noCliamBounsVerified.hide();
		}else{
			window.$ncbDiv.show();
			window.$noCliamBounsVerified.show();
		}
	});	

	//If the kit is not factory fitted, we must show the kit value drop down
	window.$kit.bind("change",function(){
		if($(this).val() == "CNG" || $(this).val() == "LPG" ){
			window.$kitPriceControlGroup.show();
		}
		else{
			window.$kitPriceControlGroup.hide();
		}
	});


	window.$policyExpDate.bind("change",function(){
	 	__motor__populateNewPolicyStartDate();
	 });

	$("[id=motorQuoteFormResetLink]").bind("click",function(e){
		initialize();
	});
}