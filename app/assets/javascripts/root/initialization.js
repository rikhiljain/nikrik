function __root__initialize(){
	__root__loadCurrentUser();
	__root__cusomValidationMethods();
	__root__postInitialization();
}

function __root__loadCurrentUser(){
	var address = "/motor/searches/currentUser.json";
	$.getJSON(address,function(currentUser){
		window.user = currentUser;
	});
}

function __root__cusomValidationMethods(){
	$.validator.addMethod("register_city_val", function() {
	    if (window.$rtoId.val() == ""){
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

function __root__postInitialization(){
  $.blockUI.defaults.css = {cursor:'default'};
  $.blockUI.defaults.overlayCSS = {backgroundColor: '#00f', opacity: 0.6, cursor: 'default', borderRadius:'6px 6px 6px 6px'};

  $('.carousel').carousel('cycle');
}