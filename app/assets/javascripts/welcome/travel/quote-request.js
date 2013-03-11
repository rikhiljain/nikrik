function __travel__createQuoteRequest(){
    var json = {};
    console.log($travelQuoteForm.serializeArray());
    $.map($travelQuoteForm.serializeArray(), function(el, i){
        json[el.name] = el.value;
    });
    return JSON.stringify(json);
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
            __travel__fillResultTable(data);
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
  window.$travelQuoteForm.block({ message: "Please click on Reset the Form link" }); 
}

function __travel__enableForm(){ 
  window.$travelQuoteForm.unblock(); 
}
