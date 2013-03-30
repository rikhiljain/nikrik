function validateReferralForm(){
  // Validation
  $referralForm.validate({
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
}


function createReferralRequest(){
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
}


function submitReferralForm(serializedJSON){
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
}

function buildNotificationsForReferralForm(){
  var message = "A very sincere thanks for your interest. We will contact you very shortly.";
  $referralForm.block(
    { 
      message: "<div class='alert alert-success'><a class='close' data-dismiss='alert' onClick='$referralForm.unblock(); return true;'>&#215;</a>"+message+"</div>", 
      timeout: 5000,
      onUnblock: function(){
        $referralForm.each (function(){this.reset();});
          window.$adsBannerDiv.show();
          window.$referFriendFormDiv.hide();
          window.$requestCallUsFormDiv.hide(); 
      }      
    }
  );
}

function showReferFriendForm(){
  window.$adsBannerDiv.hide();
  window.$requestCallUsFormDiv.hide();
  window.$referFriendFormDiv.show();
}