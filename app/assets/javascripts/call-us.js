var CallUs = (function($){

  var that = {};
  var _internal = {};


  var $callUsForm, $callUsFormNotificationDiv, $callUsFormNotificationDivCloseLink, $requestCallUsFormDiv, initialized = false;

  that.show = function (){
    init();
    AdsBanner.hide();
    ReferFriend.hide();
    reset();
   $requestCallUsFormDiv.show();
  };

  that.hide = function(){
    init();
    reset();
    $requestCallUsFormDiv.hide();
  }; 

  //private API 

  var init = function(){
    if(!initialized){
      $callUsForm = $("[id=callUsForm]");
      $callUsFormNotificationDiv = $("[id=callUsFormNotificationDiv]");
      $callUsFormNotificationDivCloseLink = $("[id=callUsFormNotificationDiv] a");  
      $requestCallUsFormDiv = $("[id=requestCallBackFormDiv]");
      validateForm();
      reset();
      initialized = true;
    }
  };

  var validateForm = function(){
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
        _internal.toggleNotificationDiv();
      },
      submitHandler: function(form){
          toggleNotificationDiv();
          var serializedJSON = createRequest();
          console.log(serializedJSON);
          submitForm(serializedJSON);
          return false;
      }
    });
  };

  var toggleNotificationDiv = function(){
    $callUsFormNotificationDivCloseLink.click();
  };

  var createRequest = function(){
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
  };

  var submitForm = function(serializedJSON){
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
              //console.log("Success" );
              buildNotificationsForForm();
          },
          error: function(textStatus, errorThrown) {
            //called when there is an error
            console.log("some error happened" + textStatus + errorThrown);
          },
        })
  };

  var buildNotificationsForForm = function(){
    var message = "A very sincere thanks for your interest. We will contact you very shortly.";
    $callUsForm.block(
      { 
        message: "<div class='alert alert-success'><a class='close' data-dismiss='alert' onClick='$callUsForm.unblock(); return true;'>&#215;</a>"+message+"</div>", 
        timeout: 5000,
        onUnblock: function(){
          reset();
          AdsBanner.show();        
        }
      }
    );
  };

  var reset = function(){
    $callUsForm.each (function(){this.reset();});
    $callUsForm.find(".error").removeClass("error"); 
  };

  return that;

})(jQuery);


