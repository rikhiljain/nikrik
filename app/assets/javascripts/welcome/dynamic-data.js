function populateDynamicData(){
	populateManufacturers();
}

function populateManufacturers(){
	var selOptions = '<option value="">Select Manufacturer</option>'; 
	var address = "/idv_charts/distinctMakers.json";
	//var address = "make.json";
	$.getJSON(address,function(options){
		$.each(options, function(){
			selOptions += '<option value="' + this['optionValue'] + '">' + this['optionDisplay'] + '</option>';
		});
		$("[id=basicDetails] > [id=vehicleDetails] [id=make]").html(selOptions);
		$("[id=basicDetails] > [id=vehicleDetails] [id=make]").change();
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
		$("[id=basicDetails] > [id=vehicleDetails] [id=model]").html(selOptions);
		//$("[id=basicDetails] > [id=vehicleDetails] [id=model]").change();
	});	
}

function populatePrice(){
	var mdate = $("[id=basicDetails] > [id=registrationDetails] [id=registerDate]").val();
	if(mdate == ""){
		return;
	}
	console.log(mdate);
	var idvChartId = $("[id=basicDetails] > [id=vehicleDetails] [id=model]").val();
	var options;
	var address = "/idv_charts/"+idvChartId+"/motorValue.json?mdate="+mdate;
	//var address = "model.json";
	$.getJSON(address,function(price){
		$("[id=basicDetails] > [id=vehicleDetails] [id=price]").text(price);
	});
}


function populateNewPolicyStartDate(){
	var currentDate = $("[id=previousPolicyDetails] [id=date]").datepicker( "getDate" );
	var d = currentDate;
	d.setDate(currentDate.getDate() + 1);
	console.log(d.getMonth());
	$("[id=previousPolicyDetails] [id=newPolicyStartDate]").text(d.getDate()+"-"+ m_names[d.getMonth()]+"-"+d.getFullYear());
}

