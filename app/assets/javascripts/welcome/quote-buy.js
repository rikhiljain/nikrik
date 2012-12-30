function openMotorQuoteBuyForm(id){
	//alert(motorquotes[0].company_name);
	//var motorquote ;
	for(var result, i = -1; result = motorquotes[++i];){
		if (result.company_id == id)
		{
			selectedMotorQuote = result;
			break;
		}
	}

	if(selectedMotorQuote.user_id != null){
		var json = {};
		json["id"] = selectedMotorQuote.motor_search_id;
		json["company_name"] = selectedMotorQuote.company_name;
		json["total_premium"] = selectedMotorQuote.total_premium;
		json["discount"] = selectedMotorQuote.discount;
		json["final_premium"] = selectedMotorQuote.final_premium;
		submitMotorQuoteBuyRequest(JSON.stringify(json));
	}else{
		$("[id=quoteResultsBuyAccordion] [id=link]").click();
	}
  return false;
}


function submitMotorQuoteBuyRequest(serializedJSON){
	$.ajax({
  				url: "/motor_searches/buy",
  				type: "POST",
				dataType: "json", // expected format for response
				contentType: "application/json", // send as JSON
				data: serializedJSON,

  				complete: function() {
    				//called when complete
  				},

  				success: function() {
    				//called when successful
    				//alert("wow it is working");
    				$('#motorQuoteBuyFormModal').modal()
 				},

  				error: function(textStatus, errorThrown) {
    				//called when there is an error
    				console.log("some error happened" + textStatus);
  				},
			})
}

function validateMotorQuoteBuyForm(){

  // Validation
  $("[id=motorQuoteBuyForm]").validate({
    rules:{
      mobile_number:"required",
      email_id:"required",
      address:"required"
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
    }
  });
}

function createMotorQuoteBuyRequest(){
    var json = {};
    $.map($("[id=motorQuoteBuyForm]").serializeArray(), function(el, i){
      if(el.value == ""){
        //ignore
      }
      else{
        json[el.name] = el.value;
      }

    });

    json["company_name"] = selectedMotorQuote.company_name;
    json["id"] = selectedMotorQuote.motor_search_id;
    json["total_premium"] = selectedMotorQuote.total_premium;
    json["discount"] = selectedMotorQuote.discount;
    json["final_premium"] = selectedMotorQuote.final_premium;

    return JSON.stringify(json);
}