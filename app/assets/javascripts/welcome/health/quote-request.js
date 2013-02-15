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

function __health__createQuoteRequest(){
    var json = {};
    console.log($healthQuoteForm.serializeArray());
    $.map($healthQuoteForm.serializeArray(), function(el, i){
        json[el.name] = el.value;
    });
    return JSON.stringify(json);
}

function __health__submitQuoteRequest(serializedJSON){
  $.ajax({
          url: "/health/searches/quote",
          type: "POST",
        dataType: "json", // expected format for response
        contentType: "application/json", // send as JSON
        data: serializedJSON,

          complete: function(data) {
            //called when complete
          },

          success: function(data) {
            //called when successful
            fillHealthResultTable(data);
            window.$healthFormAccordionLink.click();
            window.$healthResultsAccordionLink.click();
       },

          error: function(data, textStatus, errorThrown) {
            //called when there is an error
            console.log("some error happened" + textStatus);
          },
      })
}
