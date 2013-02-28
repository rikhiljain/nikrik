function __common__validateCallUsForm(){
  // Validation
  $callUsForm.validate({
    rules:{
      mobile_number: {required:true, phoneIndia:true},
      email_address: {required:true, email:true},
    },
    messages:{
      mobile_number:"Enter a valid mobile number",
      email_address:"Enter a valid email address",
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
    },
    invalidHandler: function (form, validator){
      $callUsFormNotificationDivCloseLink.click();
    },
    submitHandler: function(form){
        $callUsFormNotificationDivCloseLink.click();
        var serializedJSON = __common__createCallUsRequest();
        console.log(serializedJSON);
        __common__submitCallUsForm(serializedJSON);
        return false;
    }
  });
}


function __common__createCallUsRequest(){
    var json = {};
    $.map($callUsForm.serializeArray(), function(el, i){
      if(el.value == ""){
        //ignore
      }
      else{
        json[el.name] = el.value;
      }

    });

    return JSON.stringify(json);
}


function __common__submitCallUsForm(serializedJSON){
  $.ajax({
        url: "/home/callus",
        type: "POST",
        dataType: "json", // expected format for response
        contentType: "application/json", // send as JSON
        timeout: 3000, //3 second timeout
        data: serializedJSON,

          complete: function() {
            //called when complete
          },

          success: function() {
            //called when successful
            console.log("Success" );
            __common__buildNotificationsForCallUsForm();
        },

          error: function(textStatus, errorThrown) {
            //called when there is an error
            console.log("some error happened" + textStatus + errorThrown);
          },
      })
}

function __common__buildNotificationsForCallUsForm(){
  var message = "A very sincere thanks for your interest. We will contact you very shortly.";
  $callUsForm.hide();
  $callUsFormNotificationDiv.html("<div class='alert alert-success'>"+message+"<a class='close' data-dismiss='alert'>&#215;</a></div>");
  $callUsFormNotificationDiv.delay(5000).queue(function(n) { $(this).html(""); $callUsForm.show();  });

}

