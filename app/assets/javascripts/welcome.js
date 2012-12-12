(function($){
	$(document).ready(function(){
		$("#tabs").tabs();
		bindAllEventHandlers();
		populateStaticData();
		populateDynamicData();
	});
})(jQuery);	

function populateStaticData(){
	pouplateDayForRegistrationDetails();
	pouplateMonthForRegistrationDetails();
	pouplateYearForRegistrationDetails();	
}

function populateDynamicData(){
	populateManufacturers();
	populateModel($("#dynamic_make option:first").val());
}

function populateManufacturers(){
	var options;
	var address = "http://localhost:3000/idv_charts/distinctMakers.json";
	//var address = "make.json";
	$.getJSON(address,function(options){
		$.each(options, function(){
			options += '<option value="' + this['optionValue'] + '">' + this['optionDisplay'] + '</option>';
		});
		$("#dynamic_make").html(options);
	});
}

function populateModel(manufacturer){
	//alert(manufacturer);
	var options;
	var address = "http://localhost:3000/idv_charts/modelsForAManufacturer.json?manufacturer="+manufacturer;
	//var address = "make.json";
	$.getJSON(address,function(options){
		$.each(options, function(){
			options += '<option value="' + this['optionValue'] + '">' + this['optionDisplay'] + '</option>';
		});
		$("#dynamic_model").html(options);
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

function bindAllEventHandlers(){
	$("#dynamic_make").change(function(){
		populateModel($("#dynamic_make").val());
	})
}


  
