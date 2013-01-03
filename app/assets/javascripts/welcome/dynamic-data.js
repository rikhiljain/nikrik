function populateDynamicData(){
	populateManufacturers();
	loadCurrentUser();
}

function populateManufacturers(){
	var selOptions = '<option value="">Select Manufacturer</option>'; 
	var address = "/idv_charts/distinctMakers.json";
	//var address = "make.json";
	$.getJSON(address,function(options){
		$.each(options, function(){
			selOptions += '<option value="' + this['optionValue'] + '">' + this['optionDisplay'] + '</option>';
		});
		$make.html(selOptions);
		$make.change();
	});
}

function populateModel(manufacturer){
	var selOptions = '<option value="">Select Model</option>';;
	var address = "/idv_charts/models.json?manufacturer="+manufacturer;
	//var address = "model.json";
	$.getJSON(address,function(options){
		$.each(options, function(){
			selOptions += '<option value="' + this['optionValue'] + '">' + this['optionDisplay'] + '</option>';
		});
		$model.html(selOptions);
		//$("[id=basicDetails] > [id=vehicleDetails] [id=model]").change();
	});	
}

function populatePrice(){
	var mdate = $registerDate.val();
	if(mdate == ""){
		return;
	}
	console.log(mdate);
	var idvChartId = $model.val();
	var options;
	var address = "/idv_charts/"+idvChartId+"/motorValue.json?mdate="+mdate;
	//var address = "model.json";
	$.getJSON(address,function(price){
		$price.text(price);
	});
}


function populateNewPolicyStartDate(){
	var currentDate = $policyExpDate.datepicker( "getDate" );
	var d = currentDate;
	d.setDate(currentDate.getDate() + 1);
	console.log(d.getMonth());
	$newPolicyStartDate.text(d.getDate()+"-"+ m_names[d.getMonth()]+"-"+d.getFullYear());
}

function loadCurrentUser(){
	var address = "/motor_searches/currentUser.json";
	$.getJSON(address,function(currentUser){
		user = currentUser;
	});
}

