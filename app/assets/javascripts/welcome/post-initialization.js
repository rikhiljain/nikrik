function postInitialization(){
	showOrHideElements();
	fireEventsManually();
}

function showOrHideElements(){
	$("[id=protectionForAccessories] [id=kitPriceControlGroup]").hide();
	$("[id=previousPolicyDetails] [id=previousPolicyDetailsDiv1]").hide();
	$("[id=previousPolicyDetails] [id=previousPolicyDetailsDiv2]").hide();
	$("[id=protectionForAccessories1]").hide();
	$("[id=additionalDiscount1]").hide();
	$("[id=additionalCovers1]").hide();
	//$("[id=motorQuoteFormErrorDiv]").hide();
}

function fireEventsManually(){
}