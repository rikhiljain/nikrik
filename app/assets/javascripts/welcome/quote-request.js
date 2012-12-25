function createMotorQuoteRequest(){
  	populatePolicyExpDate();
  	populateRegistrationDate();
  	var ignoreFormFields = new Array();
  	if($("[id=basicDetails] > [id=currentInsuranceDetails] [id=policyType]:checked").val() == "true"){
  		ignoreFormFields["policy_exp_date"] = "dummy";
  		ignoreFormFields["has_claim"] = "dummy";
  		ignoreFormFields["ncb"] = "dummy";
  	}
  	if($("[id=previousPolicyDetails] [id=claimsMade]:checked").val() == "true"){
  		ignoreFormFields["ncb"] = "dummy";
  	}
  	if($("[id=protectionForAccessories] [id=kit]").val() == "FactoryFittedLPG" || $("[id=protectionForAccessories] [id=kit]").val() == "FactoryFittedCNG"){
  		ignoreFormFields["cng_value"] = "dummy";
  	}
  	var json = {};
  	console.log($('form').serializeArray());
  	$.map($("form").serializeArray(), function(el, i){
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

function validateForm(){

  // Validation
  $("[id=motorQuoteForm]").validate({
    rules:{
      register_city:"required"
    },

    messages:{
      register_city:"Enter your registration city"
    },
    errorClass: "help-inline",
    errorElement: "span",
    highlight:function(element, errorClass, validClass)
    {
      $(element).parents('.control-group').addClass('error');
    },
    unhighlight: function(element, errorClass, validClass)
    {
      $(element).parents('.control-group').removeClass('error');
      //$(element).parents('.control-group').addClass('success');
    }
  });
}