function __motor__initialize(reason){

	__motor__enableForm();

	$("[id=accordion1Motor]").show();
	$("[id=accordion1Health]").hide();
	$("[id=accordion1Travel]").hide();

	if(reason == "initialize"){
		window.$motorQuoteForm.each (function(){
	  			this.reset();
	  			window.$newPolicyStartDate.html("");
	  			window.$price.text("` ");
		});
	}

	$("[id=protectionForAccessories] [id=kitPriceControlGroup]").hide();
	$("[id=previousPolicyDetails] [id=previousPolicyDetailsDiv1]").hide();
	$("[id=previousPolicyDetails] [id=previousPolicyDetailsDiv2]").hide();
	$("[id=protectionForAccessories1]").hide();
	$("[id=additionalDiscount1]").hide();
	$("[id=additionalCovers1]").hide();

}