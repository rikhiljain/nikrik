(function($){
	$(document).ready(function(){
		cacheAllJquerySelectore();
		bindAllEventHandlers();
		populateStaticData();
		populateDynamicData();
		bindCityAutoComplete();
		showOrHideElements();
		fireEventsManually();
	});
})(jQuery);	

function cacheAllJquerySelectore(){
	//fill this
}

function bindAllEventHandlers(){
	//this will hide/unhide the previous policy details div
	$("[id=basicDetails] > [id=currentInsuranceDetails] [id=policyType]").bind("change",function(){
		if($(this).val() == "N"){
			$("[id=previousPolicyDetails]").hide();
		}else{
			$("[id=previousPolicyDetails]").show();
		}
	});
	
	//this will change the model drop down when we change the make
	$("[id=basicDetails] > [id=vehicleDetails] [id=make]").bind("change",function(){
		populateModel($("[id=basicDetails] > [id=vehicleDetails] [id=make]").val());
	});

	//this will update the price when we change the model
	$("[id=basicDetails] > [id=vehicleDetails] [id=model]").bind("change",function(){
		populatePrice($(this).val(),registrationDate());
	});

	//this will update the price when we change day, month or year of purchase date
	$("[id=basicDetails] > [id=registrationDetails] [id=day]").bind("change",function(){
		populatePrice();
	});
	$("[id=basicDetails] > [id=registrationDetails] [id=month]").bind("change",function(){
		populatePrice();
	});
	$("[id=basicDetails] > [id=registrationDetails] [id=year]").bind("change",function(){
		populatePrice();
	});

	//If a claim has been made in previous policy year we will not show the ncb drop down and checkbox
	//But if a claim has not been made in previous policy year then we want to show these options
	$("[id=previousPolicyDetails] [id=claimsMade]").bind("change",function(){
		if($(this).val() == "Y"){
			$("[id=previousPolicyDetails] [id=ncbDiv]").hide();
			$("[id=previousPolicyDetails] [id=noCliamBounsVerified]").hide();
		}else{
			$("[id=previousPolicyDetails] [id=ncbDiv]").show();
			$("[id=previousPolicyDetails] [id=noCliamBounsVerified]").show();
		}
	});	

	//If the kit is not factory fitted, we must show the kit value drop down
	$("[id=protectionForAccessories] [id=kit]").bind("change",function(){
		if($(this).val() == "CNG" || $(this).val() == "LPG" ){
			$("[id=protectionForAccessories] [id=kitPriceControlGroup]").show();
		}
		else{
			$("[id=protectionForAccessories] [id=kitPriceControlGroup]").hide();
		}
	});

	//Compute new policy start date
	$("[id=previousPolicyDetails] [id=day]").bind("change",function(){
		populateNewPolicyStartDate();
	});
	$("[id=previousPolicyDetails] [id=month]").bind("change",function(){
		populateNewPolicyStartDate();
	});
	$("[id=previousPolicyDetails] [id=year]").bind("change",function(){
		populateNewPolicyStartDate();
	});
	
}

function populateStaticData(){
	pouplateDay($("[id=basicDetails] > [id=registrationDetails] [id=day]"));
	pouplateMonth($("[id=basicDetails] > [id=registrationDetails] [id=month]"));
	pouplateYear($("[id=basicDetails] > [id=registrationDetails] [id=year]"));
	
	pouplateDay($("[id=previousPolicyDetails] [id=day]"));
	pouplateMonth($("[id=previousPolicyDetails] [id=month]"));
	pouplateYear($("[id=previousPolicyDetails] [id=year]"));	
	
	populateNCB($("[id=previousPolicyDetails] [id=ncb]"));
	populateKit($("[id=protectionForAccessories] [id=kit]"));
	populateKitPrice($("[id=protectionForAccessories] [id=kitPrice]"));

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

function showOrHideElements(){
	$("[id=protectionForAccessories] [id=kitPriceControlGroup]").hide();
}

function fireEventsManually(){
	//fill this
}

function registrationDate(){
	return $("[id=basicDetails] > [id=registrationDetails] [id=year]").val()+"-"+$("[id=basicDetails] > [id=registrationDetails] [id=month]").val()+"-"+$("[id=basicDetails] > [id=registrationDetails] [id=day]").val();
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

function populatePrice(){
	var idvChartId = $("[id=basicDetails] > [id=vehicleDetails] [id=model]").val();
	var mdate = registrationDate();
	var options;
	var address = "http://localhost:3000/idv_charts/"+idvChartId+"/motorValue.json?mdate="+mdate;
	//var address = "model.json";
	$.getJSON(address,function(price){
		$("[id=basicDetails] > [id=vehicleDetails] [id=price]").text(price);
	});
}

function populateNewPolicyStartDate(){
	var year = $("[id=previousPolicyDetails] [id=year]").val();
	var month = $("[id=previousPolicyDetails] [id=month]").val();
	var day = $("[id=previousPolicyDetails] [id=day]").val();
	var d = new Date(year, month, day);
	d.setDate(d.getDate() + 1);
	$("[id=previousPolicyDetails] [id=newPolicyStartDate]").text(d.getDate()+"-"+ m_names[d.getMonth()]+"-"+d.getFullYear());
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
		options += '<option value="' + i + '">' + i + '%</option>';
	 }
	selectElement.html(options);	
}

function populateKit(selectElement){
var options = [
	               	{"optionValue":"FactoryFittedCNG", "optionDisplay": "Factory Fitted CNG"},
	               	{"optionValue":"CNG", "optionDisplay": "CNG"},
	               	{"optionValue":"FactoryFittedLPG", "optionDisplay": "Factory Fitted LPG"},
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



  
