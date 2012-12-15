(function($){
	$(document).ready(function(){
		bindAllEventHandlers();
		populateStaticData();
		populateDynamicData();
		bindCityAutoComplete();
	});
})(jQuery);	

function bindAllEventHandlers(){
	$("[id=basicDetails] > [id=currentInsuranceDetails] [id=policyType]").bind("change",function(){
		if($(this).val() == "N"){
			$("[id=previousPolicyDetails]").hide();
		}else{
			$("[id=previousPolicyDetails]").show();
		}
	})
	
	$("[id=basicDetails] > [id=vehicleDetails] [id=make]").bind("change",function(){
		populateModel($("[id=basicDetails] > [id=vehicleDetails] [id=make]").val());
	})
	
	$("[id=basicDetails] > [id=vehicleDetails] [id=model]").bind("change",function(){
		populatePrice($(this).val(),registrationDate());
	})
	
}

function populateStaticData(){
	pouplateDay($("[id=basicDetails] > [id=registrationDetails] [id=day]"));
	pouplateMonth($("[id=basicDetails] > [id=registrationDetails] [id=month]"));
	pouplateYear($("[id=basicDetails] > [id=registrationDetails] [id=year]"));
	
	pouplateDay($("[id=previousPolicyDetails] [id=day]"));
	pouplateMonth($("[id=previousPolicyDetails] [id=month]"));
	pouplateYear($("[id=previousPolicyDetails] [id=year]"));	
	
	populateNCB($("[id=previousPolicyDetails] [id=ncb]"));

}

function populateDynamicData(){
	populateManufacturers();
}

function  bindCityAutoComplete(){
	$( "#city" ).autocomplete({
		source: "/rtos.json",
		minLength: 2
	});
}

function registrationDate(){
	return $("[id=previousPolicyDetails] [id=year]").val()+"-"+$("[id=previousPolicyDetails] [id=month]").val()+"-"+$("[id=previousPolicyDetails] [id=day]").val();
}

function populateManufacturers(){
	var options;
	var address = "http://localhost:3000/idv_charts/distinctMakers.json";
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
	var address = "http://localhost:3000/idv_charts/models.json?manufacturer="+manufacturer;
	//var address = "model.json";
	$.getJSON(address,function(options){
		$.each(options, function(){
			options += '<option value="' + this['optionValue'] + '">' + this['optionDisplay'] + '</option>';
		});
		$("[id=basicDetails] > [id=vehicleDetails] [id=model]").html(options);
		$("[id=basicDetails] > [id=vehicleDetails] [id=model]").change();
	});	
}

function populatePrice(idvChartId, mdate){
	var options;
	var address = "http://localhost:3000/idv_charts/"+idvChartId+"/motorValue.json?mdate="+mdate;
	//var address = "model.json";
	$.getJSON(address,function(price){
		$("[id=basicDetails] > [id=vehicleDetails] [id=price]").text(price);
	});
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
		options += '<option value="' + 20 + '">' + i + '%</option>';
	 }
	selectElement.html(options);	
}



  
