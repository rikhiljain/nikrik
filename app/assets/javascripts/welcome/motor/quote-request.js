function __motor__createQuoteRequest(){
  	var ignoreFormFields = new Array();
  	if($("[id=basicDetails] > [id=currentInsuranceDetails] [id=policyType]:checked").val() == "true"){
  		ignoreFormFields["policy_exp_date"] = "dummy";
  		ignoreFormFields["has_claim"] = "dummy";
  		ignoreFormFields["ncb"] = "dummy";
  	}
  	if($("[id=previousPolicyDetails] [id=claimsMade]:checked").val() == "true"){
  		ignoreFormFields["ncb"] = "dummy";
  	}
  	if(window.$kit.val() != "LPG" || $kit.val() != "CNG"){
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

function __motor__submitQuoteRequest(serializedJSON){
	$.ajax({
  				url: "/motor/searches/quote",
  				type: "POST",
				dataType: "json", // expected format for response
				contentType: "application/json", // send as JSON
				data: serializedJSON,

  				complete: function(data) {
    				//called when complete
  				},

  				success: function(data) {
    				//called when successful
    				__motor__fillResultTable(data);
    				$quoteFormAccordionLink.click();
					  $quoteResultsAccordionLink.click();
 				},

  				error: function(data, textStatus, errorThrown) {
    				//called when there is an error
    				console.log("some error happened" + textStatus);
  				},
			})
}
