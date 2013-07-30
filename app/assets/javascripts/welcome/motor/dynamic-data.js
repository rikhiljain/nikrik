function __motor__populateDynamicData(){
	__motor__populateManufacturers();
}

function __motor__populateManufacturers(){
	var selOptions = '<option value="">Select Manufacturer</option>'; 
	var address = "/motor/idv_charts/distinctMakers.json";
	//var address = "make.json";
	console.log($make);
	$.getJSON(address,function(options){
		$.each(options, function(){
			selOptions += '<option value="' + this['optionValue'] + '">' + this['optionDisplay'] + '</option>';
		});
		window.$make.html(selOptions);
		window.$make.change();
	});
}

function  __motor__populateModel(manufacturer){
	var selOptions = '<option value="">Select Model</option>';;
	var address = "/motor/idv_charts/models.json?manufacturer="+manufacturer;
	//var address = "model.json";
	$.getJSON(address,function(options){
		$.each(options, function(){
			selOptions += '<option value="' + this['optionValue'] + '">' + this['optionDisplay'] + '</option>';
		});
		window.$model.html(selOptions);
		//$("[id=basicDetails] > [id=vehicleDetails] [id=model]").change();
	});	
}

function  __motor__populatePrice(){
	var mdate = $registerDate.val();
	if ( mdate == "" )
	{
		alert("Please provide registration date.");
		return;
	}

	if( $model.val() == "" || $make.val() == ""){
		return;
	}
	var idvChartId = $model.val();
	var options;
	var address = "/motor/idv_charts/"+idvChartId+"/motorValue.json?mdate="+mdate;
	//var address = "model.json";
	$.getJSON(address,function(price){
		window.$price.text("` "+price);
	});
}


function  __motor__populateNewPolicyStartDate(){
	var currentDate = $policyExpDate.datepicker( "getDate" );
	var d = currentDate;
	d.setDate(currentDate.getDate() + 1);
	console.log(d.getMonth());
	window.$newPolicyStartDate.text(d.getDate()+"-"+ m_names[d.getMonth()]+"-"+d.getFullYear());
}

function loadCurrentUser(){
	var address = "/motor/searches/currentUser.json";
	$.getJSON(address,function(currentUser){
		user = currentUser;
	});
}

