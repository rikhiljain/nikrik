var Callus = (function($){

  var that = {};

  var $callUsForm, $callUsFormNotificationDiv, $callUsFormNotificationDivCloseLink, $adsBannerDiv, $requestCallUsFormDiv, referFriendFormDiv;

  that.init = function(){
    $callUsForm = $("[id=callUsForm]");
    $callUsFormNotificationDiv = $("[id=callUsFormNotificationDiv]");
    $callUsFormNotificationDivCloseLink = $("[id=callUsFormNotificationDiv] a");  
    $adsBannerDiv = $("[id=adsBannerDiv]");
    $requestCallUsFormDiv = $("[id=requestCallBackFormDiv]");
    $referFriendFormDiv = $("[id=referFriendFormDiv]");

    that.validateForm();
    $callUsForm.each (function(){this.reset();});
  };

  that.validateForm = function(){
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
        that.toggleNotificationDiv();
      },
      submitHandler: function(form){
          that.toggleNotificationDiv();
          var serializedJSON = that.createRequest();
          console.log(serializedJSON);
          that.submitForm(serializedJSON);
          return false;
      }
    });
  };

  that.toggleNotificationDiv = function(){
    $callUsFormNotificationDivCloseLink.click();
  };

  that.createRequest = function(){
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

  that.submitForm = function(serializedJSON){
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
              that.buildNotificationsForForm();
          },
          error: function(textStatus, errorThrown) {
            //called when there is an error
            console.log("some error happened" + textStatus + errorThrown);
          },
        })
  };

  that.buildNotificationsForForm = function(){
    var message = "A very sincere thanks for your interest. We will contact you very shortly.";
    $callUsForm.block(
      { 
        message: "<div class='alert alert-success'><a class='close' data-dismiss='alert' onClick='$callUsForm.unblock(); return true;'>&#215;</a>"+message+"</div>", 
        timeout: 5000,
        onUnblock: function(){
          $callUsForm.each (function(){this.reset();}); 
          $adsBannerDiv.show();
          $referFriendFormDiv.hide();
          $requestCallUsFormDiv.hide();         
        }
      }
    );
  };

  that.showForm = function (){
    $callUsForm.each (function(){this.reset();});
    $callUsForm.find(".error").removeClass("error");
    $adsBannerDiv.hide();
    $referFriendFormDiv.hide();
    $requestCallUsFormDiv.show();
  };

  return that;

})(jQuery);


