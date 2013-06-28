function __travel__populateStaticData(){
	__travel__pouplateAge($travelAge);
	__travel__pouplateAge($travellerAge);
}

function __travel__pouplateAge(selectElement){
	var options = '<option value="">Select Age</option>';  
	for (var i=1; i <= 100;++i) { 
		options += '<option value="' + i + '">' + i + '</option>';
	 }
	selectElement.html(options);
}