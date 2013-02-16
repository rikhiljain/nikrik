function initialize(){
	
	if(selection == "Motor"){
		__motor__initialize();
	}else if(selection == "Health"){
		__health__initialize();
	}else if(selection == "Travel"){
		__travel__initialize();
	}

	__common__initialize();

}

function __common__initialize(){

	quotes = null;
	selectedQuote = null;

	window.$quoteResultsAccordionTable[0].innerHTML = "Looks like you did not fill in the form...";

	window.$quoteBuyForm.each (function(){
  			this.reset();
	});

	$("[id=quoteFormAccordion] .collapse").collapse("show");
}