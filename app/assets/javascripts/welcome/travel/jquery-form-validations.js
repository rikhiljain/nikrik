function __travel__customValidationMethods(){
		//Binding the form validation

    $.validator.addMethod("travel_date_range", function() {
      var days = __travel__days();
      if (days <= 0 )
      {
        return false ;
      }
      return true;

  });

  $.validator.addMethod("travel_individual_max_limit", function() {
      
      var days = __travel__days();
      if ( days > 180 && $travelPolicyFor.filter(":checked").val() == 'I' && $tripType.filter(":checked").val() == 'S')
      {
        return false;
      }
      return true;

  });

  $.validator.addMethod("travel_student_max_limit", function() {
      
    var days = __travel__days();
    if ( days > 730 && $travelPolicyFor.filter(":checked").val() == 'S' && $tripType.filter(":checked").val() == 'S')
    {
      return false;
    }
    return true;

  });
 
	__travel__validateQuoteForm();
}

function __travel__validateQuoteForm(){
  //$.validator.setDefaults({focusCleanup: "true", invalidHandler: motorQuoteFormInvalidHandler});
  // Validation

  $travelQuoteForm.validate({
    rules:{
      policy_for:{required:true},
      trip_type:{required:true},
      location:{required:true},
      age:{required:true},
      travel_cover:{required:true},
      max_trip_duration:{required:true},
      start_date: {required:true},
      end_date: {required:true , travel_date_range:true, 
                travel_individual_max_limit:true,
                travel_student_max_limit:true}
    },

    messages:{
      policy_for: { required: '' },
      trip_type: { required: '' },
      location: { required: '' },
      age: { required: '' },
      travel_cover: { required: '' },
      max_trip_duration: { required: '' },
      start_date: { required: '' } ,
      end_date: { required: '', 
      travel_date_range: "End date cannot be less than Start date", 
      travel_individual_max_limit: "Single trip cannot be more than 180 days for Individual",
      travel_student_max_limit: "Single trip cannot be more than 730 days for Student"}
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
      $("[id=travelQuoteFormNotificationDiv]").html("<div class='alert alert-error'>You missed "+validator.numberOfInvalids()+" fields. They have been highlighted below.<a class='close' data-dismiss='alert'>&#215;</a></div>");
    },
    submitHandler: function(form){
      //$motorQuoteFormNotificationDivCloseLink.click();
      var serializedJSON = __travel__createQuoteRequest();
      console.log(serializedJSON);
      __travel__submitQuoteRequest(serializedJSON);
      return false;
    }
  });
}

function __travel__days()
{
  var travelEndDate = $travelEndDate.val();
  var travelStartDate = $travelStartDate.val();

  if(travelEndDate == "" || travelStartDate == "" ){
    return 0;
  }
  var travelEndDateArray = travelEndDate.split("-");
  var travelStartDateArray = travelStartDate.split("-");

  var days = new Date(travelEndDateArray[2],travelEndDateArray[1],travelEndDateArray[0]) - new Date(travelStartDateArray[2],travelStartDateArray[1],travelStartDateArray[0]);
  return (parseInt(days/(24*3600*1000)) + 1);
}
