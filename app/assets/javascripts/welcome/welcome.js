//WE JUST NEED ONE ONLOAD AND THAT IS ALREADY BEING DONE IN APPLICATION.JS
//IF WE HAVE TWO OF THESE THEN THERE IS NO GURANTEE OF THE ORDERING.
// (function($){
// 	$(document).ready(function(){

// 		cacheAllJquerySelector(); //jquery-selector.js
// 		jqueryFormValidations(); //jquery-form-validations.js
// 		populateStaticData(); //static-data.js
// 		bindToolTips(); //tooltips.js
// 		bindDatePickers(); //this file [the main file will have all the binding code]
// 		bindCityAutoComplete(); //this file
// 		bindAllEventHandlers(); //this file
// 		populateDynamicData(); //dynamic-data.js
// 		initialize();
// 		postInitialization(); //post-initialization.js
// 		affixAll();
// 	});
// })(jQuery);

function __insurance__initialize(){
	cacheAllJquerySelector(); //jquery-selector.js
	jqueryFormValidations(); //jquery-form-validations.js
	populateStaticData(); //static-data.js
	bindToolTips(); //tooltips.js
	bindDatePickers(); //this file [the main file will have all the binding code]
	bindCityAutoComplete(); //this file
	bindAllEventHandlers(); //this file
	populateDynamicData(); //dynamic-data.js
	//initialize();
	postInitialization(); //post-initialization.js
}


function  bindCityAutoComplete(){
	$( "#registerCity" ).autocomplete({
		source: "/motor/rtos.json",
		minLength: 2,
		search: function(event, ui){
			$rtoId.val("");
		},
		select: function( event, ui ) {
				$rtoId.val(ui.item.id);
            }
	});
}

function bindDatePickers(){
	var policyEndDate = new Date();	
	policyEndDate.setDate(policyEndDate.getDate()+7);
	window.$policyExpDate.datepicker({ dateFormat: "dd-mm-yy", constrainInput: "true", changeMonth: "true", changeYear: "true", defaultDate: policyEndDate });
	//$("[id=previousPolicyDetails] [id=date]").val(policyEndDate.getDate()+"-"+policyEndDate.getMonth()+1+"-"+policyEndDate.getFullYear());

	var registrationDate = new Date();	
	registrationDate.setYear(registrationDate.getFullYear());
	window.$registerDate.datepicker({ dateFormat: "dd-mm-yy", constrainInput: "true", changeMonth: "true", changeYear: "true",defaultDate: registrationDate });
	//$("[id=registrationDetails] [id=registerDate]").val(registrationDate.getDate()+"-"+registrationDate.getMonth()+1+"-"+registrationDate.getFullYear());
}

function esc(text){
	var a =  text
			.replace("&","&amp;")
			.replace("<", "&lt;")
			.replace(">", "&gt;");
	return a;
}
