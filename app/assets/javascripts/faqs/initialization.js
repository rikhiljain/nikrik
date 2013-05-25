function __faqs__initialize(){
	

}

function __faqs__display(text){
		displayInsuranceShopeeDiv();

		//console.log($(this).attr("href"));
		window.$mainContentDiv.hide();
		window.$userMenuContentDiv.show();

		window.currentSelection = "XXX";
		try
		{
			var query_key;
			console.log(text);
			if(text == "Motor Insurance"){
				query_key = "faqs_motor_insurance";
			}
			else if(text == "Health Insurance"){
				query_key = "faqs_health_insurance";
			}
			else if(text == "Travel Insurance"){
				query_key = "faqs_travel_insurance";
			}
			else if(text == "General"){
				query_key = "faqs_general";
			}
			else if(text == "FAQs"){
				query_key = "faqs_general";
			}									
			window.$userMenuContentDivAlert.html("<h3>FAQs - "+text+"</h3>");
			$.jsonRequest({
		        url: "/static_htmls.json?key="+query_key,
		        type: "GET",
		        success:  function(data){
		        	console.log(data);
		        	console.log(data[0]);
		        	console.log(data[0].query_value);
		        	console.log(typeof data[0].query_value);
		        	console.log(JSON.stringify(data[0].query_value));
		        	//console.log(JSON.stringify(data[0].query_value).replace(/(\r\n|\n|\r|\\n)/gm,""));
					window.$userMenuContentDivTable.html(data[0].query_value.replace(/(\r\n|\n|\r|\\n)/gm,""));
				}
			});					

		}
		catch( err)
		{
			console.log(err.message);
		}
		return false;	
}

