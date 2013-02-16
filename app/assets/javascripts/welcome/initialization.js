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

	//reset the results div
	window.$quoteResultsAccordionTable[0].innerHTML = "Looks like you did not fill in the form...";

	//reset the quote buy form
	window.$quoteBuyForm.each (function(){
  			this.reset();
	});

	//show the quote form
	if(accordionIndex != 1){
		window.$quoteFormAccordionLink.click();
	}

	//disable the result and buy form
	window.$quoteResultsAccordionLink.css('cursor','url(assets/famfamfam/icons/delete.png),default');
	window.$quoteResultsBuyAccordionLink.css('cursor','url(assets/famfamfam/icons/delete.png),default');
}