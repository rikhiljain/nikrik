function __health__initialize(reason){

	__health__enableForm();

	$("[id=accordion1Motor]").hide();
	$("[id=accordion1Health]").show();
	$("[id=accordion1Travel]").hide();

	if(reason == "initialize"){
		window.$healthQuoteForm.each (function(){
	  			this.reset();
		});
	}

	window.$motherAgeGrp.hide();
	window.$fatherAgeGrp.hide();
	window.$adultAgeGrp.show();
}