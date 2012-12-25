function populateStaticData(){
	pouplateDay($("[id=basicDetails] > [id=registrationDetails] [id=day]"));
	pouplateMonth($("[id=basicDetails] > [id=registrationDetails] [id=month]"));
	pouplateYear($("[id=basicDetails] > [id=registrationDetails] [id=year]"));
	
	//pouplateDay($("[id=previousPolicyDetails] [id=day]"));
	//pouplateMonth($("[id=previousPolicyDetails] [id=month]"));
	//pouplateYear($("[id=previousPolicyDetails] [id=year]"));	
	
	populateNCB($("[id=previousPolicyDetails] [id=ncb]"));
	populateKit($("[id=protectionForAccessories] [id=kit]"));
	populateKitPrice($("[id=protectionForAccessories] [id=kitPrice]"));

}

function pouplateDay(selectElement){
	var options; 
	for (var i=1; i <= 31;++i) { 
		options += '<option value="' + i + '">' + i + '</option>';
	 }
	selectElement.html(options);
}

function pouplateMonth(selectElement){
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

	selectElement.html(options);
	
}

function pouplateYear(selectElement){
	var options; 
	for (var i=1999; i <= 2020;++i) { 
		options += '<option value="' + i + '">' + i + '</option>';
	 }
	selectElement.html(options);	
}

function populateNCB(selectElement){
	var options; 
	for (var i=20; i <= 100;i+=20) { 
		options += '<option value="' + i + '">' + i + '%</option>';
	 }
	selectElement.html(options);	
}

function populateKit(selectElement){
var options = [
	               	{"optionValue":"FactoryFittedCNG", "optionDisplay": "Factory Fitted CNG"},
	               	{"optionValue":"CNG", "optionDisplay": "CNG"},
	               	{"optionValue":"FactoryFittedLPG", "optionDisplay": "Factory Fitted LPG"},
	               	{"optionValue":"LPG", "optionDisplay": "LPG"}
	              ];
	$.each(options, function(){
		options += '<option value="' + this['optionValue'] + '">' + this['optionDisplay'] + '</option>';
	});

	selectElement.html(options);	
}

function populateKitPrice(selectElement){
	var options;
	for (var i=10000; i <= 100000;i+=10000) { 
		options += '<option value="' + i + '">' + i + '</option>';
	 }

	 selectElement.html(options);	
}