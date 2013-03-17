function __travel__populateDynamicData(){

	var startDate = new Date();	
	startDate.setDate(startDate.getDate()+ 1);
	window.$travelStartDate.datepicker({ dateFormat: "dd-mm-yy", constrainInput: "true", changeMonth: "true", changeYear: "true",defaultDate: startDate });
	
	var endDate = new Date();	
	endDate.setDate(endDate.getDate()+ 90);
	window.$travelEndDate.datepicker({ dateFormat: "dd-mm-yy", constrainInput: "true", changeMonth: "true", changeYear: "true",defaultDate: endDate });
	
}


function  __travel__populateDays(){
	window.$travelTotalDays.text( __travel__days() );
}