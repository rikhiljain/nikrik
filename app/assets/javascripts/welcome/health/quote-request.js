function __health__createQuoteRequest(){
    var json = {};
    console.log($healthQuoteForm.serializeArray());
    $.map($healthQuoteForm.serializeArray(), function(el, i){
        json[el.name] = el.value;
    });
    return JSON.stringify(json);
}

function __health__submitQuoteRequest(serializedJSON){
  $.ajax({
          url: "/health/searches/quote",
          type: "POST",
        dataType: "json", // expected format for response
        contentType: "application/json", // send as JSON
        data: serializedJSON,

          complete: function(data) {
            //called when complete
          },

          success: function(data) {
            //called when successful
            __health__fillResultTable(data);
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
