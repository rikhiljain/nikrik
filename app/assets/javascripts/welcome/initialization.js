function __insurance__accordion__initialize(reason){

	reason = typeof reason !== 'undefined' ? reason : "initialize";
	
	if(window.currentSelection == "Motor"){
		__motor__initialize(reason);
	}else if(window.currentSelection == "Health"){
		__health__initialize(reason);
	}else if(window.currentSelection == "Travel"){
		__travel__initialize(reason);
	}

	__common__initialize();

}

function __common__initialize(){

	window.quotes = null;
	window.selectedQuote = null;

	//show main content
	window.$mainContentDiv.show();
	window.$userMenuContentDiv.hide();

	//res//et the results div
	window.$quoteResultsAccordionTable[0].innerHTML = "Looks like you did not fill in the form...";

	//reset the quote buy form
	window.$quoteBuyForm.each (function(){
  			this.reset();
	});

	//disable the result and buy form
	window.$quoteResultsAccordionLink.css('cursor','url(/assets/famfamfam/icons/delete.png),default');
	window.$quoteResultsBuyAccordionLink.css('cursor','url(/assets/famfamfam/icons/delete.png),default');

	//reinitialize the array
	window.allowedAccordionIndexes = new Array();
	//we will create three indexes for three accordion
	window.allowedAccordionIndexes[0] = 0; //This is the combined status
	window.allowedAccordionIndexes[1] = 1; //only first will be on
	window.allowedAccordionIndexes[2] = 0;
	window.allowedAccordionIndexes[3] = 0;

		//show the quote form
	if(window.currentAccordionIndex != 1){
		window.$quoteFormAccordionLink.click();
	}else{
		//we don't want to click the accordion, but still want to reset the bread crumb
		__common__updateBreadCrumbs();
	}

	//Show refer a friend image
	$("[id=referFriendFormDiv]").hide();
	$("[id=referFriendImageDiv]").show();

}