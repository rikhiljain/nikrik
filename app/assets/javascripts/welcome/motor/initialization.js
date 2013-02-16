function __motor__initialize(){

	window.$motorQuoteForm.each (function(){
  			this.reset();
	});

	$("[id=accordion1Motor]").show();
	$("[id=accordion1Health]").hide();
	$("[id=accordion1Travel]").hide();


}