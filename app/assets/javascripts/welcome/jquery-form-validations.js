function jqueryFormValidations(){
	cusomValidationMethods();
}

function cusomValidationMethods(){
		$.validator.addMethod("register_city_val", function() {
	    if ($rtoId.val() == ""){
	    	return false;
	    } 
   		else{
   			 return true;
   		}
	});

	$.validator.addMethod("policy_exp_date_val", function() {
		if($("[id=basicDetails] > [id=currentInsuranceDetails] [id=policyType]:checked").val() == "true"){
			return true;
		}
		else{
			if ($policyExpDate.val() == ""){
	    		return false;
	    	} 
   			else{
   			 	return true;
   			}
		}
	});

	$.validator.addMethod("phoneIndia", function(mobile_number, element) {
    	mobile_number = mobile_number.replace(/\s+/g, ""); 
		return this.optional(element) || mobile_number.length > 9 ;
		}, "Please specify a valid phone number");
}