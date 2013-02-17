function __health__customValidationMethods(){
	//these should run once only when we display the health policy form
		//Binding the form validation
  $.validator.addMethod("no_of_childs_val", function() {
      policy_for = window.$healthPolicyFor.filter(":checked").val();
      if ( policy_for == "3" || policy_for == "4" ){
       if( window.$noOfChilds.val() == '')
        { return false;}

  }
    return true;
  });

	__health__validateQuoteForm();
}

function __health__validateQuoteForm(){
  //$.validator.setDefaults({focusCleanup: "true", invalidHandler: motorQuoteFormInvalidHandler});
  // Validation

  $healthQuoteForm.validate({
    rules:{
      adult_age:"required",
      heath_cover:"required",
      no_of_childs:"no_of_childs_val"
    },

    messages:{
      adult_age:"",
      heath_cover: "",
      no_of_childs: ""
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
      $("[id=healthQuoteFormNotificationDiv]").html("<div class='alert alert-error'>You missed "+validator.numberOfInvalids()+" fields. They have been highlighted below.<a class='close' data-dismiss='alert'>&#215;</a></div>");
    },
    submitHandler: function(form){
      //$motorQuoteFormNotificationDivCloseLink.click();
      var serializedJSON = __health__createQuoteRequest();
      console.log(serializedJSON);
      __health__submitQuoteRequest(serializedJSON);
      return false;
    }
  });
}
