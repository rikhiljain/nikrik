var QuoteBuy = (function($){

  var that = {};
  var initialized = false;  
  var $notificationDiv;
  var $form;
  var $name;
  var $mobileNumber;  
  var $emailAddress;
  var $address;
  var $quote;
  var $premiumBreakUpDiv;
  var $formDocumentationAlert;

  var selectedQuote;

  that.init = function(){
    if(!initialized){
      $notificationDiv = $("[id=quoteBuyFormNotificationDiv] a");
      $form = $("[id=quoteBuyForm]");
      $name = $("[id=quoteBuyForm] [id=name]");
      $mobileNumber = $("[id=quoteBuyForm] [id=mobileNumber]");  
      $emailAddress = $("[id=quoteBuyForm] [id=emailAddress]");
      $address = $("[id=quoteBuyForm] [id=address]");
      $quote = $("[id=quoteBuyForm] > [id=buyQuote]")[0];
      $premiumBreakUpDiv = $("[id=quoteBuyFormPremiumBreakUpDiv]");
      $formDocumentationAlert = $("[id=quoteBuyForm] .formDocumentationAlert")
      validateForm();
      initialized = true;
    }
  };

  that.openForm = function(){
    that.init();
    $notificationDiv.click();
    if(window.currentSelection == "Motor"){
      selectedQuote = MotorQuoteResult.getLastClickedQuote();
    }else if(window.currentSelection == "Health"){
      selectedQuote = HealthQuoteResult.getLastClickedQuote();
    }else if(window.currentSelection == "Travel"){
      selectedQuote = TravelQuoteResult.getLastClickedQuote();
    }    
    selectedQuote = MotorQuoteResult.getLastClickedQuote();
    if(User.isNormalUser()){
      $formDocumentationAlert.show();
      $premiumBreakUpDiv.hide();
      $mobileNumber.val(user.mobile);
      $emailAddress.val(user.email);
      $address.val(user.address);
      $name.val(user.name);
      preFillForm();
    }
    else if(User.isAdmin() || User.isOperator()){
      //need to hide the documentation required alert
      $formDocumentationAlert.hide();
      $premiumBreakUpDiv.show();
      //need to display the premium breakup form as well
      if(window.currentSelection == "Motor"){
        $premiumBreakUpDiv.html(MotorQuoteResult.getPremiumBreakUp({"modal": false}));
        MotorQuoteResult.specialDiscountHandler();
      }else if(window.currentSelection == "Health"){
        $premiumBreakUpDiv.html(HealthQuoteResult.getPremiumBreakUp({"modal": false}));
        //HealthQuoteResult.specialDiscountHandler();
      }else if(window.currentSelection == "Travel"){
        $premiumBreakUpDiv.html(TravelQuoteResult.getPremiumBreakUp({"modal": false}));
        //TravelQuoteResult.specialDiscountHandler();
      }
    }
    window.allowedAccordionIndexes[3] = 1;
    window.$quoteResultsBuyAccordionLink.css('cursor','pointer');
    window.$quoteResultsBuyAccordionLink.click();
    return false;
  };

  //ideally we should not be exposing this method. This method should be part of closure.
  var preFillForm = function(){
    var html = [], h = -1;
    html[++h] = "<table id='quoteHealthResultsTable' class='table'";
    html[++h] = "<thead><tr><th style='text-align:center;vertical-align:middle;'>Company</th>";
    if( selectedQuote.plan != null)
      html[++h] = "<th style='text-align:center;vertical-align:middle;'>Plan</th>";

    html[++h] = "<th style='text-align:center;vertical-align:middle;'>Final Premium</th>";
    html[++h] = "<th style='text-align:center;vertical-align:middle;'>Reward Points</th>";
    html[++h] = "</tr></thead>";
    html[++h] = "<tbody>";
    html[++h] = "<tr><td style='text-align:center;vertical-align:middle;'>";
    html[++h] = "<img src='/assets/company/logo/logo_" + selectedQuote.company_id + ".png' style='height: 50px;width: 150px'/></td>";
    if( selectedQuote.plan != null)
    {
      html[++h] = "<td style='text-align:center;vertical-align:middle;'>";
      html[++h] = selectedQuote.plan;
      html[++h] = "</td>";
    }
    html[++h] = "<td style='text-align:center;vertical-align:middle;' ><span class='rupee'>` "+selectedQuote.final_premium+"</span>";
    html[++h] = "</td><td style='text-align:center;vertical-align:middle;'>";
    html[++h] = selectedQuote.points;
    html[++h] = "</td></tr>";
    html[++h] = "</tbody>";
    html[++h] = "</table>";
    $quote.innerHTML = html.join('');
  };

  //ideally we should not be exposing this method. This method should be part of closure.
  var submitRequest = function(serializedJSON){
    var postUrl;
    if(window.currentSelection == "Motor"){
      if(User.isNormalUser()){
        postUrl = "/motor/searches/buy";        
      }
      else if(User.isAdmin() || User.isOperator()){
        postUrl = "/motor/searches/quoteEmail";   
      }
    }else if(window.currentSelection == "Health"){
      if(User.isNormalUser()){
        postUrl = "/health/searches/buy";        
      }
      else if(User.isAdmin() || User.isOperator()){
        postUrl = "/health/searches/quoteEmail";   
      }      
    }else if(window.currentSelection == "Travel"){
      if(User.isNormalUser()){
        postUrl = "/travel/searches/buy";        
      }
      else if(User.isAdmin() || User.isOperator()){
        postUrl = "/travel/searches/quoteEmail";   
      }      
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
              buildNotifications();
              makeProgressBarGreen();
          },

            error: function(textStatus, errorThrown) {
              //called when there is an error
              console.log("some error happened" + textStatus);
            },
        })
  };

  var buildNotifications = function(){
    var message = "A very sincere thanks for your interest. We will contact you very shortly. You should also receive one email with the quote details.";
    $form.block(
      { 
        message: "<div class='alert alert-success'><a class='close' data-dismiss='alert' onClick='$quoteBuyForm.unblock(); return true;'>&#215;</a>"+message+"</div>", 
        timeout: 5000,
        onUnblock: function(){
          $form.each (function(){this.reset();}); 
          __insurance__initialize();
        }
      }
    );  
  };

  var makeProgressBarGreen = function(){
    $("[id=breadcrumb] > [id=1]").removeClass().addClass("bar bar-success");
    $("[id=breadcrumb] > [id=2]").removeClass().addClass("bar bar-success");
    $("[id=breadcrumb] > [id=3]").removeClass().addClass("bar bar-success");
    window.allowedAccordionIndexes[0] = 1;
  };

  var validateForm = function(){
    // Validation
    $form.validate({
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
        $notificationDiv.click();
      },
      submitHandler: function(form){
          $notificationDiv.click();
          var serializedJSON = createRequest();
          //console.log(serializedJSON);
          submitRequest(serializedJSON);
          return false;
      }
    });
  };

  //ideally we should not be exposing this method. This method should be part of closure.
  var createRequest = function(){
      var json = {};
      if(User.isNormalUser()){
        createRequestForNormalUser(json);
      }
      else if(User.isAdmin() || User.isOperator()){
        createRequestForAdminOrOperatorUser(json);
      }
      return JSON.stringify(json);
  }; 

  var createRequestForNormalUser = function(json){
    $.map($form.serializeArray(), function(el, i){
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
    json["plan"] = selectedQuote.plan;  
  };

  var createRequestForAdminOrOperatorUser = function(json){
    json.mail = $premiumBreakUpDiv.html().replace(new RegExp('"', 'g'),"'");
  }; 


  return that;

})(jQuery);


