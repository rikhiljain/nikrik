function cacheAllJquerySelector(){

	__common__cacheAllJquerySelector();
	__motor__cacheAllJquerySelector();
	__health__cacheAllJquerySelector();
	__travel__cacheAllJquerySelector();

}

function __common__cacheAllJquerySelector(){

	window.$mainMessagesDiv =  $("[id=mainMessagesDiv]");

	window.$mainContentDiv =  $("[id=mainContentDiv]");

	window.$quoteFormAccordionLink = $("[id=quoteFormAccordion] [id=link]");
	window.$quoteResultsAccordionLink = $("[id=quoteResultsAccordion] [id=link]");
	window.$quoteResultsBuyAccordionLink = $("[id=quoteResultsBuyAccordion] [id=link]");

	window.$quoteResultsAccordionTable = $("[id=quoteResultsAccordion] [id=table]");

	window.$quoteBuyForm = $("[id=quoteBuyForm]");
	window.$quoteBuyFormNotificationDiv = $("[id=quoteBuyFormNotificationDiv]");
	window.$quoteBuyFormNotificationDivCloseLink = $("[id=quoteBuyFormNotificationDiv] a");


	window.$mobileNumber = $("[id=quoteBuyForm] [id=mobileNumber]");
	window.$emailAddress = $("[id=quoteBuyForm] [id=emailAddress]");
	window.$address = $("[id=quoteBuyForm] [id=address]");

}
