function populateStaticData(){
	pouplateManufactureYear($("[id=vehicleDetails] [id=year_of_manufacture]"));	
	populateNCB($ncb);
	populateKit($kit);
	populateKitPrice($kitPrice);
	pouplatePACoverage($coverageAmt);
	populateNoOfChild($noOfChilds);
	populateHealthCover($healthCover);
	pouplateAge($healthAge);

}

function populateNoOfChild( selectElement )
{
	var options = [
					{"optionValue":"", "optionDisplay": "Select No Of Child"},
	               	{"optionValue":"0", "optionDisplay": "No Child"},
	               	{"optionValue":"1", "optionDisplay": "One"},
    	          	{"optionValue":"2", "optionDisplay": "Two"},
	               	{"optionValue":"3", "optionDisplay": "Three"},
	               	{"optionValue":"4", "optionDisplay": "Four"}
	              ];
	$.each(options, function(){
		options += '<option value="' + this['optionValue'] + '">' + this['optionDisplay'] + '</option>';
	});

	selectElement.html(options);
}

function populateHealthCover( selectElement )
{
	var options = [
					{"optionValue":"0", "optionDisplay": "Select Amount"},
	               	{"optionValue":"100000", "optionDisplay": "100000"},
	               	{"optionValue":"200000", "optionDisplay": "200000"},
    	          	{"optionValue":"300000", "optionDisplay": "300000"},
	               	{"optionValue":"400000", "optionDisplay": "400000"},
	               	{"optionValue":"500000", "optionDisplay": "500000"}
	              ];
	$.each(options, function(){
		options += '<option value="' + this['optionValue'] + '">' + this['optionDisplay'] + '</option>';
	});

	selectElement.html(options);
}

function pouplateAge(selectElement){
	var options = '<option value="0">Select Age</option>';  
	for (var i=21; i <= 100;++i) { 
		options += '<option value="' + i + '">' + i + '</option>';
	 }
	selectElement.html(options);
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

function pouplateManufactureYear(selectElement){
	var options = '<option value="">Select Year</option>'; 
	var year = new Date().getFullYear();
	var index=0;

	while(index < 11){ 
		options += '<option value="' + year + '">' + year + '</option>';
		index++;
		year--;
	 }
	selectElement.html(options);	
}

function populateNCB(selectElement){
	var options; 
	
	options += '<option value="0">0%</option>';
	options += '<option value="20">20%</option>';
	options += '<option value="25">25%</option>';
	options += '<option value="35">35%</option>';
	options += '<option value="45">45%</option>';
	options += '<option value="50">50%</option>';

	selectElement.html(options);	
}

function pouplatePACoverage(selectElement){
	var options; 
	for (var i=0; i <= 200000; i=i + 10000) { 
		options += '<option value="' + i + '">' + i + '</option>';
	 }
	selectElement.html(options);	
}


function populateKit(selectElement){
var options = [
					{"optionValue":"", "optionDisplay": "Select"},
	               	{"optionValue":"FF_CNG", "optionDisplay": "Factory Fitted CNG"},
	               	{"optionValue":"CNG", "optionDisplay": "CNG"},
	               	{"optionValue":"FF_LPG", "optionDisplay": "Factory Fitted LPG"},
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