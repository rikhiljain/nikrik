function __motor__customValidationMethods(){
	//these should run once only when we display the motor policy form
		//Binding the form validation
	__motor__validateQuoteForm();
}

function __motor__validateQuoteForm(){
  //$.validator.setDefaults({focusCleanup: "true", invalidHandler: motorQuoteFormInvalidHandler});
  // Validation
  $motorQuoteForm.validate({
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
      window.$motorQuoteFormNotificationDiv.html("<div class='alert alert-error'>You missed "+validator.numberOfInvalids()+" fields. They have been highlighted below.<a class='close' data-dismiss='alert'>&#215;</a></div>");
    },
    submitHandler: function(form){
      window.$motorQuoteFormNotificationDivCloseLink.click();
      var serializedJSON = __motor__createQuoteRequest();
      console.log(serializedJSON);
      __motor__submitQuoteRequest(serializedJSON);
      return false;
    }
  });
}