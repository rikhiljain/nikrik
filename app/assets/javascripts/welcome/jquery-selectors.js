function cacheAllJquerySelector(){

	__common__cacheAllJquerySelector();
	__motor__cacheAllJquerySelector();
	__health__cacheAllJquerySelector();
	__travel__cacheAllJquerySelector();
}

function __common__cacheAllJquerySelector(){

	window.$mainMessagesDiv =  $("[id=mainMessagesDiv]");

	window.$mainContentDiv =  $("[id=mainContentDiv]");
	window.$userMenuContentDiv =  $("[id=userMenuContentDiv]");

	window.$quoteFormAccordionLink = $("[id=quoteFormAccordion] a");
	window.$quoteResultsAccordionLink = $("[id=quoteResultsAccordion] a");
	window.$quoteResultsBuyAccordionLink = $("[id=quoteResultsBuyAccordion] a");

	window.$quoteResultsAccordionTable = $("[id=quoteResultsAccordion] [id=table]");

	window.$quoteBuyForm = $("[id=quoteBuyForm]");
	window.$quoteBuyFormNotificationDiv = $("[id=quoteBuyFormNotificationDiv]");
	window.$quoteBuyFormNotificationDivCloseLink = $("[id=quoteBuyFormNotificationDiv] a");


	window.$mobileNumber = $("[id=quoteBuyForm] [id=mobileNumber]");
	window.$emailAddress = $("[id=quoteBuyForm] [id=emailAddress]");
	window.$address = $("[id=quoteBuyForm] [id=address]");
	window.$name = $("[id=quoteBuyForm] [id=name]");
}
