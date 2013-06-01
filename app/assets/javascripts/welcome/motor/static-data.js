function __motor__populateStaticData(){
	__motor__pouplateManufactureYear($("[id=vehicleDetails] [id=year_of_manufacture]"));	
	__motor__populateNCB($ncb);
	__motor__populateKit($kit);
}


function __motor__pouplateManufactureYear(selectElement){
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

function __motor__populateNCB(selectElement){
	var options; 
	
	options += '<option value="0">0%</option>';
	options += '<option value="20">20%</option>';
	options += '<option value="25">25%</option>';
	options += '<option value="35">35%</option>';
	options += '<option value="45">45%</option>';
	options += '<option value="50">50%</option>';

	selectElement.html(options);	
}

function __motor__populateKit(selectElement){
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


