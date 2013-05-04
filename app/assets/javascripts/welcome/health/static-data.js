function __health__populateStaticData(){
	__health__pouplatePACoverage($coverageAmt);
	__health__populateNoOfChild($noOfChilds);
	__health__populateHealthCover($healthCover);
	__health__pouplateAge($healthAge);
	__health__pouplateAge($motherAge);
	__health__pouplateAge($fatherAge);
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
	               	{"optionValue":"100000", "optionDisplay": "1 Lakh"},
	               	{"optionValue":"200000", "optionDisplay": "2 Lakh"},
    	          	{"optionValue":"300000", "optionDisplay": "3 Lakh"},
	               	{"optionValue":"400000", "optionDisplay": "4 Lakh"},
	               	{"optionValue":"500000", "optionDisplay": "5 Lakh"},
	               	{"optionValue":"700000", "optionDisplay": "7 Lakh"},
	               	{"optionValue":"750000", "optionDisplay": "7.5 Lakh"},
	               	{"optionValue":"1000000", "optionDisplay": "10 Lakh"},
	               	{"optionValue":"1500000", "optionDisplay": "15 Lakh"},
	               	{"optionValue":"2000000", "optionDisplay": "20 Lakh"},
	               	{"optionValue":"3000000", "optionDisplay": "30 Lakh"},
	               	{"optionValue":"5000000", "optionDisplay": "50 Lakh"}
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