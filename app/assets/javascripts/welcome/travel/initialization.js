function __travel__initialize(reason){

	window.$travelQuoteForm.unblock(); 

	$("[id=accordion1Motor]").hide();
	$("[id=accordion1Health]").hide();
	$("[id=accordion1Travel]").show();

	if(reason == "initialize"){
		window.$travelQuoteForm.each (function(){
	  			this.reset();
	 	});
	 }

	window.$maxTripDurationCG.hide(); 	
	window.$travelTotalDays.text('');
	window.$travelEndDate.removeAttr('disabled');			
}