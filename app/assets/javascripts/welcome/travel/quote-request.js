function __travel__createQuoteRequest(){
    var json = {};
    var memberAttributes = new Array();
    //console.log($travelQuoteForm.serializeArray());
    $.map($travelQuoteForm.serializeArray(), function(el, i){
      if( el.name == 'relationship' && el.value)
      {
        var memberAttribute = {};
        memberAttribute[el.name] = el.value;
        memberAttributes.push(memberAttribute);
      }
      else if ( el.name == 'traveller_age' && el.value)
      {
        var memberAttribute = memberAttributes.pop();
        memberAttribute["age"] = el.value;
        memberAttributes.push(memberAttribute);
      }
      else
      {
        json[el.name] = el.value;
      }

    });
    json["members_attributes"] = memberAttributes;
    return JSON.stringify(json);
    //console.log(JSON.stringify(json));
    //return '{"policy_for":"F","trip_type":"S","age":"34","location":"W","travel_cover":"50000","start_date":"19-06-2013","end_date":"24-09-2013","members_attributes":[{"age":"60","relationship":"Father"},{"age":"30","relationship":"Mother"}]}';

}

function __travel__submitQuoteRequest(serializedJSON){
  $.ajax({
          url: "/travel/searches/quote",
          type: "POST",
        dataType: "json", // expected format for response
        contentType: "application/json", // send as JSON
        data: serializedJSON,

          complete: function(data) {
            //called when complete
          },

          success: function(data) {
            //called when successful
            __travel__disableForm();
            TravelQuoteResult.fillResults(data);
            window.$quoteFormAccordionLink.click();
            window.allowedAccordionIndexes[2] = 1;
            window.$quoteResultsAccordionLink.css('cursor','pointer');
            window.$quoteResultsAccordionLink.click(); 
       },

          error: function(data, textStatus, errorThrown) {
            //called when there is an error
            console.log("some error happened" + textStatus);
          },
      })
}

function __travel__disableForm(){
  window.$travelQuoteForm.block(
    { 
      message: $('#formDisableDisplay')
    }
  ); 
}

function __travel__enableForm(){ 
  window.$travelQuoteForm.unblock(); 
}
