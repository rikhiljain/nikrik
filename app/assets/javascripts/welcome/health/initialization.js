function __health__initialize(){

	$("[id=accordion1Motor]").hide();
	$("[id=accordion1Health]").show();
	$("[id=accordion1Travel]").hide();

	window.$healthQuoteForm.each (function(){
  			this.reset();
	});
	
}