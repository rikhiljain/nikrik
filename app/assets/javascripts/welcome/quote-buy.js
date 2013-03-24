function __common__openQuoteBuyForm(id){
	$("[id=quoteBuyFormNotificationDiv] a").click();
	for(var result, i = -1; result = quotes[++i];){
		if (result.company_id == id)
		{
			window.selectedQuote = result;
			break;
		}
	}

	if(window.user != null){
    __common__prefillQuoteBuyForm(window.user);
	}
  window.allowedAccordionIndexes[3] = 1;
  window.$quoteResultsBuyAccordionLink.css('cursor','pointer');
	window.$quoteResultsBuyAccordionLink.click();
  return false;
}

function __common__prefillQuoteBuyForm(user){
  $mobileNumber.val(user.mobile);
  $emailAddress.val(user.email);
  $address.val(user.address);
}

function __common__submitQuoteBuyRequest(serializedJSON){
  var postUrl;
  if(window.currentSelection == "Motor"){
    postUrl = "/motor/searches/buy";
  }else if(window.currentSelection == "Health"){
    postUrl = "/health/searches/buy";
  }else if(window.currentSelection == "Travel"){
    postUrl = "/travel/searches/buy";
  }
	$.ajax({
  				url: postUrl,
  				type: "POST",
				dataType: "json", // expected format for response
				contentType: "application/json", // send as JSON
				data: serializedJSON,

  				complete: function() {
    				//called when complete
  				},

  				success: function() {
    				//called when successful
            __common__buildNotificationsForQuoteBuyForm();
            __common__makeProgressBarGreen();
 				},

  				error: function(textStatus, errorThrown) {
    				//called when there is an error
    				console.log("some error happened" + textStatus);
  				},
			})
}

function __common__buildNotificationsForQuoteBuyForm(){
  var message = "A very sincere thanks for your interest. We will contact you very shortly. You should also receive one email with the quote details.";
  $quoteBuyForm.block(
    { 
      message: "<div class='alert alert-success'><a class='close' data-dismiss='alert' onClick='$quoteBuyForm.unblock(); return true;'>&#215;</a>"+message+"</div>", 
      timeout: 2000,
      onUnblock: function(){
        $quoteBuyForm.each (function(){this.reset();}); 
      }
    }
  );  
}

function __common__makeProgressBarGreen(){
  $("[id=breadcrumb] > [id=1]").removeClass().addClass("bar bar-success");
  $("[id=breadcrumb] > [id=2]").removeClass().addClass("bar bar-success");
  $("[id=breadcrumb] > [id=3]").removeClass().addClass("bar bar-success");
  window.allowedAccordionIndexes[0] = 1;
}

function __common__validateQuoteBuyForm(){
  // Validation
  $quoteBuyForm.validate({
    rules:{
      name: {required:true},
      mobile_number: {required:true, phoneIndia:true},
      email_id: {required:true, email:true},
      address: {required:true}
    },
    messages:{
      name: "Please provide your name",
      mobile_number:"Enter a valid mobile number",
      email_id:"Enter a valid email address",
      address:"Enter a valid address"
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
      $quoteBuyFormNotificationDivCloseLink.click();
    },
    submitHandler: function(form){
        $quoteBuyFormNotificationDivCloseLink.click();
        var serializedJSON = __common__createQuoteBuyRequest();
        console.log(serializedJSON);
        __common__submitQuoteBuyRequest(serializedJSON);
        return false;
    }
  });
}

function __common__createQuoteBuyRequest(){
    var json = {};
    $.map($quoteBuyForm.serializeArray(), function(el, i){
      if(el.value == ""){
        //ignore
      }
      else{
        json[el.name] = el.value;
      }

    });

    json["company_name"] = selectedQuote.company_name;
    if(window.currentSelection == "Motor"){
      json["id"] = selectedQuote.motor_search_id;
    }else if(window.currentSelection == "Health"){
      json["id"] = selectedQuote.health_search_id;
    }else if(window.currentSelection == "Travel"){
      json["id"] = selectedQuote.travel_search_id;
    }
    json["final_premium"] = selectedQuote.final_premium;

    return JSON.stringify(json);
}