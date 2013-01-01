function createMotorQuoteRequest(){
  	var ignoreFormFields = new Array();
  	if($("[id=basicDetails] > [id=currentInsuranceDetails] [id=policyType]:checked").val() == "true"){
  		ignoreFormFields["policy_exp_date"] = "dummy";
  		ignoreFormFields["has_claim"] = "dummy";
  		ignoreFormFields["ncb"] = "dummy";
  	}
  	if($("[id=previousPolicyDetails] [id=claimsMade]:checked").val() == "true"){
  		ignoreFormFields["ncb"] = "dummy";
  	}
  	if($("[id=protectionForAccessories] [id=kit]").val() != "LPG" || $("[id=protectionForAccessories] [id=kit]").val() != "CNG"){
  		ignoreFormFields["cng_value"] = "dummy";
  	}
  	var json = {};
  	console.log($("[id=motorQuoteForm]").serializeArray());
  	$.map($("[id=motorQuoteForm]").serializeArray(), function(el, i){
  		if(el.value == "" || ignoreFormFields[el.name] == "dummy"){
  			//ignore
  		}
  		else{
  			json[el.name] = el.value;
  		}

  	});
  	return JSON.stringify(json);
}

function submitMotorQuoteRequest(serializedJSON){
	$.ajax({
  				url: "/motor_searches/quote",
  				type: "POST",
				dataType: "json", // expected format for response
				contentType: "application/json", // send as JSON
				data: serializedJSON,

  				complete: function(data) {
    				//called when complete
  				},

  				success: function(data) {
    				//called when successful
    				fillResultTable(data);
    				$("[id=quoteFormAccordion] [id=link]").click();
					  $("[id=quoteResultsAccordion] [id=link]").click();
 				},

  				error: function(data, textStatus, errorThrown) {
    				//called when there is an error
    				console.log("some error happened" + textStatus);
  				},
			})
}

function validateMotorQuoteForm(){
  //$.validator.setDefaults({focusCleanup: "true", invalidHandler: motorQuoteFormInvalidHandler});
  // Validation
  $("[id=motorQuoteForm]").validate({
    rules:{
      register_city:"register_city_val",
      register_date:"required",
      idv_chart_id:"required",
      year_of_manufacture:"required",
      policy_exp_date:"policy_exp_date_val"
    },

    messages:{
      register_city:"",
      register_date: "",
      idv_chart_id: "",
      year_of_manufacture: "",
      policy_exp_date: ""
    },
    errorClass: "help-inline",
    errorElement: "span",
    highlight:function(element, errorClass, validClass)
    {
      $(element).parents('.control-group').addClass('_iSError');
    },
    unhighlight: function(element, errorClass, validClass)
    {
      $(element).parents('.control-group').removeClass('_iSError');
      //$(element).parents('.control-group').add:Class('success');
    },
    onfocusout: function(element, event){
      this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
    },
    onkeyup: function(element, event) {
    },
    onclick: function(element, event) {
    },
    invalidHandler: function (form, validator){
      $("[id=motorQuoteFormErrorDiv] a").click();
      $("[id=motorQuoteFormErrorDiv]").append("<div class='alert alert-error'>You missed "+validator.numberOfInvalids()+" fields. They have been highlighted below.<a class='close' data-dismiss='alert'>&#215;</a></div>");
    },
    submitHandler: function(form){
      var serializedJSON = createMotorQuoteRequest();
      console.log(serializedJSON);
      submitMotorQuoteRequest(serializedJSON);
      $("[id=motorQuoteFormErrorDiv] a").click();
      return false;
    }
  });
}