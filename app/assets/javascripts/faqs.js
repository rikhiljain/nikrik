(function($){
	$(document).ready(function(){

		var faqLinks = [
							{element: $("#footerLevelNavBar .motorInsuranceFaqLink"), url: "/static_htmls.json?key=faqs_motor_insurance"},
							{element: $("#footerLevelNavBar .healthInsuranceFaqLink"), url: "/static_htmls.json?key=faqs_health_insurance"},
							{element: $("#footerLevelNavBar .travelInsuranceFaqLink"), url: "/static_htmls.json?key=faqs_travel_insurance"},
							{element: $("#footerLevelNavBar .generalFaqLink"), url: "/static_htmls.json?key=faqs_general"}																					
						];
		for(var i=0; i < faqLinks.length; i++){
			//$(faqLinks[i]).each()
			for(var j=0; j < faqLinks[i].element.length; j++){
				$(faqLinks[i].element[j]).click(function(elem, url){
					return function(e) {
						display(elem, url);
						return false;
					}
				}(faqLinks[i].element[j], faqLinks[i].url));									
			}
		}


		function display(elem, url){
			displayInsuranceShopeeDiv();

			window.$mainContentDiv.hide();
			window.$userMenuContentDiv.show();

			window.currentSelection = "XXX";
			try
			{
				window.$userMenuContentDivAlert.html("<h3>FAQs - "+$(elem).text()+"</h3>");
				$.jsonRequest({
			        url: url,
			        type: "GET",
			        success:  function(data){
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
	});
})(jQuery);
