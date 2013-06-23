var ReferFriend = (function($){

  var that = {};

  var initialized = false;
  var $referralFormDiv;
  var $referralForm;
  var $referralFormNotificationDiv;
  var $referralFormNotificationDivCloseLink;

  that.show = function(){
    init();
    AdsBanner.hide();
    CallUs.hide();
    reset();
    $referralFormDiv.show();
  };  

  that.hide = function(){
    init();
    $referralFormDiv.hide();
  };

  //private API
  var init = function(){
    if(!initialized){
      $referralFormDiv = $("[id=referFriendFormDiv]");
      $referralForm = $("[id=referralForm]");
      $referralFormNotificationDiv = $("[id=referralFormNotificationDiv]");
      $referralFormNotificationDivCloseLink = $("[id=referralFormNotificationDiv] a");
      validateReferralForm();
      initialized = true;
    }
  };

  var validateReferralForm = function(){
    // Validation
    $referralFormValidator = $referralForm.validate({
      rules:{
        'mobile': {required:true, phoneIndia:true},
        'email': {required:true, email:true},
        'ref_mobile':{required:true, phoneIndia:true},
        'ref_name': {required:true}
      },
      messages:{
        'mobile':"Enter a valid your mobile number",
        'email':"Enter a valid your email address",
        'ref_mobile': "Enter a valid referral mobile number",
        'ref_name': "Please provide referral name"
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
        $referralFormNotificationDivCloseLink.click();
      },
      submitHandler: function(form){
          $referralFormNotificationDivCloseLink.click();
          var serializedJSON = createReferralRequest();
          console.log(serializedJSON);
          submitReferralForm(serializedJSON);
          return false;
      }
    });
  };


  var createReferralRequest = function(){
      var json = {};
      $.map($referralForm.serializeArray(), function(el, i){
        if(el.value == ""){
          //ignore
        }
        else{
          json[el.name] = el.value;
        }

      });

      return JSON.stringify(json);
  };


  var submitReferralForm = function(serializedJSON){
    $.ajax({
          url: "/loyalty/referral",
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
              buildNotificationsForReferralForm();
          },

            error: function(textStatus, errorThrown) {
              //called when there is an error
              console.log("some error happened" + textStatus + errorThrown);
            },
        })
  };

  var buildNotificationsForReferralForm = function(){
    var message = "A very sincere thanks for your interest. We will contact you very shortly.";
    $referralForm.block(
      { 
        message: "<div class='alert alert-success'><a class='close' data-dismiss='alert' onClick='$referralForm.unblock(); return true;'>&#215;</a>"+message+"</div>", 
        timeout: 5000,
        onUnblock: function(){
          reset();
          AdsBannerDiv().show();
        }      
      }
    );
  };

  var reset = function(){
    //reset form
    $referralForm.each (function(){this.reset();});
    //remove all the previous error
    $referralForm.find(".error").removeClass("error"); 
    //window.$referralFormValidator.resetForm();   
  };

  return that;

})(jQuery);


