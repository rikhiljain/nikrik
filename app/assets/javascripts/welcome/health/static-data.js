function __health__populateStaticData(){
	__health__pouplatePACoverage($coverageAmt);
	__health__populateNoOfChild($noOfChilds);
	__health__populateHealthCover($healthCover);
	__health__pouplateAge($healthAge);
}

function __health__pouplatePACoverage(selectElement){
	var options; 
	for (var i=0; i <= 200000; i=i + 10000) { 
		options += '<option value="' + i + '">' + i + '</option>';
	 }
	selectElement.html(options);	
}

function __health__populateNoOfChild( selectElement )
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

function __health__populateHealthCover( selectElement )
{
	var options = [
					{"optionValue":"", "optionDisplay": "Select Amount"},
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

function __health__pouplateAge(selectElement){
	var options = '<option value="">Select Age</option>';  
	for (var i=21; i <= 100;++i) { 
		options += '<option value="' + i + '">' + i + '</option>';
	 }
	selectElement.html(options);
}