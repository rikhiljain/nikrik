 function initilizeCallUsFrom(){ 

  window.$callUsForm = $("[id=callUsForm]");
  window.$callUsFormNotificationDiv = $("[id=callUsFormNotificationDiv]");
  window.$callUsFormNotificationDivCloseLink = $("[id=callUsFormNotificationDiv] a");
  
  window.$adsBannerDiv = $("[id=adsBannerDiv]");
  window.$requestCallUsFormDiv = $("[id=requestCallBackFormDiv]");

  validateCallUsForm();
}

function light_initilizeCallUsFrom(){
  //we just need to reset the form
}

function validateCallUsForm(){
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
        var serializedJSON = createCallUsRequest();
        console.log(serializedJSON);
        submitCallUsForm(serializedJSON);
        return false;
    }
  });
}


function createCallUsRequest(){
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


function submitCallUsForm(serializedJSON){
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
            buildNotificationsForCallUsForm();
        },

          error: function(textStatus, errorThrown) {
            //called when there is an error
            console.log("some error happened" + textStatus + errorThrown);
          },
      })
}

function buildNotificationsForCallUsForm(){
  var message = "A very sincere thanks for your interest. We will contact you very shortly.";
  $callUsForm.block(
    { 
      message: "<div class='alert alert-success'><a class='close' data-dismiss='alert' onClick='$callUsForm.unblock(); return true;'>&#215;</a>"+message+"</div>", 
      timeout: 5000,
      onUnblock: function(){
        $callUsForm.each (function(){this.reset();}); 
          window.$adsBannerDiv.show();
          window.$referFriendFormDiv.hide();
          window.$requestCallUsFormDiv.hide();         
      }
    }
  );
}

function showCallUsForm(){
  window.$adsBannerDiv.hide();
  window.$referFriendFormDiv.hide();
  window.$requestCallUsFormDiv.show();
}


