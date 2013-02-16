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
	$.ajax({
  				url: "/motor/searches/buy",
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
 				},

  				error: function(textStatus, errorThrown) {
    				//called when there is an error
    				console.log("some error happened" + textStatus);
  				},
			})
}

function __common__buildNotificationsForQuoteBuyForm(){
  var message = "A very sincere thanks for your interest. We will contact you very shortly. You should also receive one email with the quote details.";
  $quoteBuyFormNotificationDiv.html("<div class='alert alert-success'>"+message+"<a class='close' data-dismiss='alert'>&#215;</a></div>");
}

function __common__validateQuoteBuyForm(){
  // Validation
  $quoteBuyForm.validate({
    rules:{
      mobile_number: {required:true, phoneIndia:true},
      email_id: {required:true, email:true},
      address: {required:true}
    },
    messages:{
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
    json["id"] = selectedQuote.motor_search_id;
    json["final_premium"] = selectedQuote.final_premium;

    return JSON.stringify(json);
}