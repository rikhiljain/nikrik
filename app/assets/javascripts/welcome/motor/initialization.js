function __motor__initialize(){

	__motor__enableForm();

	$("[id=accordion1Motor]").show();
	$("[id=accordion1Health]").hide();
	$("[id=accordion1Travel]").hide();

	window.$motorQuoteForm.each (function(){
  			this.reset();
  			window.$newPolicyStartDate.html("");
  			window.$price.html("");
	});

	$("[id=protectionForAccessories] [id=kitPriceControlGroup]").hide();
	$("[id=previousPolicyDetails] [id=previousPolicyDetailsDiv1]").hide();
	$("[id=previousPolicyDetails] [id=previousPolicyDetailsDiv2]").hide();
	$("[id=protectionForAccessories1]").hide();
	$("[id=additionalDiscount1]").hide();
	$("[id=additionalCovers1]").hide();

}