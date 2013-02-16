function __health__customValidationMethods(){
	//these should run once only when we display the health policy form
		//Binding the form validation
	__health__validateQuoteForm();
}

function __health__validateQuoteForm(){
  //$.validator.setDefaults({focusCleanup: "true", invalidHandler: motorQuoteFormInvalidHandler});
  // Validation
  $healthQuoteForm.validate({
    rules:{
    },

    messages:{
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
