function populateDynamicData(){
	populateManufacturers();
}

function populateManufacturers(){
	var options;
	var address = "/idv_charts/distinctMakers.json";
	//var address = "make.json";
	$.getJSON(address,function(options){
		$.each(options, function(){
			options += '<option value="' + this['optionValue'] + '">' + this['optionDisplay'] + '</option>';
		});
		$("[id=basicDetails] > [id=vehicleDetails] [id=make]").html(options);
		$("[id=basicDetails] > [id=vehicleDetails] [id=make]").change();
	});
}

function populateModel(manufacturer){
	var options;
	var address = "/idv_charts/models.json?manufacturer="+manufacturer;
	//var address = "model.json";
	$.getJSON(address,function(options){
		$.each(options, function(){
			options += '<option value="' + this['optionValue'] + '">' + this['optionDisplay'] + '</option>';
		});
		$("[id=basicDetails] > [id=vehicleDetails] [id=model]").html(options);
		$("[id=basicDetails] > [id=vehicleDetails] [id=model]").change();
	});	
}

function populatePrice(){
	var idvChartId = $("[id=basicDetails] > [id=vehicleDetails] [id=model]").val();
	var mdate = registrationDate();
	var options;
	var address = "/idv_charts/"+idvChartId+"/motorValue.json?mdate="+mdate;
	//var address = "model.json";
	$.getJSON(address,function(price){
		$("[id=basicDetails] > [id=vehicleDetails] [id=price]").text(price);
	});
}

function populateRegistrationDate(){
	var mdate = registrationDate();
	$("[id=basicDetails] > [id=registrationDetails] [id=registrationDate]").val(mdate);
}

function populateNewPolicyStartDate(){
	var currentDate = $("[id=previousPolicyDetails] [id=date]").datepicker( "getDate" );
	//var year = $("[id=previousPolicyDetails] [id=year]").val();
	//var month = $("[id=previousPolicyDetails] [id=month]").val();
	//var day = $("[id=previousPolicyDetails] [id=day]").val();
	//var d = new Date(year, month, day);
	var d = currentDate;
	d.setDate(currentDate.getDate() + 1);
	$("[id=previousPolicyDetails] [id=newPolicyStartDate]").text(d.getDate()+"-"+ m_names[d.getMonth()]+"-"+d.getFullYear());
}

function populatePolicyExpDate(){
	var mdate = policyExpDate();
	$("[id=previousPolicyDetails] [id=policyExpDate]").val(mdate);
}



function registrationDate(){
	return $("[id=basicDetails] > [id=registrationDetails] [id=year]").val()+"-"+$("[id=basicDetails] > [id=registrationDetails] [id=month]").val()+"-"+$("[id=basicDetails] > [id=registrationDetails] [id=day]").val();
}

function policyExpDate(){
	return $("[id=previousPolicyDetails] [id=year]").val()+"-"+$("[id=previousPolicyDetails] [id=month]").val()+"-"+$("[id=previousPolicyDetails] [id=day]").val();
}