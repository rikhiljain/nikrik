function __travel__customValidationMethods(){
		//Binding the form validation

	__travel__validateQuoteForm();
}

function __travel__validateQuoteForm(){
  //$.validator.setDefaults({focusCleanup: "true", invalidHandler: motorQuoteFormInvalidHandler});
  // Validation

  $travelQuoteForm.validate({
    rules:{
      policy_for:"required",
      location:"required",
      travel_cover:"required",
      start_date: "required",
      end_date: "required"
    },

    messages:{
      policy_for:"",
      location:"",
      travel_cover:"",
      start_date: "",
      end_date: ""
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
      $("[id=travelQuoteFormNotificationDiv]").html("<div class='alert alert-error'>You missed "+validator.numberOfInvalids()+" fields. They have been highlighted below.<a class='close' data-dismiss='alert'>&#215;</a></div>");
    },
    submitHandler: function(form){
      //$motorQuoteFormNotificationDivCloseLink.click();
      var serializedJSON = __travel__createQuoteRequest();
      console.log(serializedJSON);
      __travel__submitQuoteRequest(serializedJSON);
      return false;
    }
  });
}
