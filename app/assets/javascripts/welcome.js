(function($){
	$(document).ready(function(){
		$( "#tabs" ).tabs();
		populateManufacturers();
		pouplateDayForRegistrationDetails();
		pouplateMonthForRegistrationDetails();
		pouplateYearForRegistrationDetails();
	});
})(jQuery);	

function populateManufacturers(){
	var options;
	$.getJSON('http://localhost:3000/idv_charts/distinctMakers.json',function(options){
		$.each(options, function(){
			options += '<option value="' + this['optionValue'] + '">' + this['optionDisplay'] + '</option>';
		});
		$("#dynamic_slct").html(options);
	});
}

function pouplateDayForRegistrationDetails(){
	var options; 
	for (var i=1; i <= 31;++i) { 
		options += '<option value="' + i + '">' + i + '</option>';
	 }
	$("#day").html(options);
}

function pouplateMonthForRegistrationDetails(){
	var options = [
	               	{"optionValue":"01", "optionDisplay": "Jan"},
	               	{"optionValue":"02", "optionDisplay": "Feb"},
	               	{"optionValue":"03", "optionDisplay": "Mar"},
	               	{"optionValue":"04", "optionDisplay": "Apr"},
	               	{"optionValue":"05", "optionDisplay": "May"},
	               	{"optionValue":"06", "optionDisplay": "Jun"},
	               	{"optionValue":"07", "optionDisplay": "Jul"},
	               	{"optionValue":"08", "optionDisplay": "Aug"},
	               	{"optionValue":"09", "optionDisplay": "Sep"},
	               	{"optionValue":"10", "optionDisplay": "Oct"},
	               	{"optionValue":"11", "optionDisplay": "Nov"},
	               	{"optionValue":"12", "optionDisplay": "Dec"}
	              ];
	$.each(options, function(){
		options += '<option value="' + this['optionValue'] + '">' + this['optionDisplay'] + '</option>';
	});

	$("#month").html(options);
	
}

function pouplateYearForRegistrationDetails(){
	var options; 
	for (var i=1999; i <= 2020;++i) { 
		options += '<option value="' + i + '">' + i + '</option>';
	 }
	$("#year").html(options);
	
}
  
