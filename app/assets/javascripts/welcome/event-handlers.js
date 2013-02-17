function bindAllEventHandlers(){

	__common__bindAllEventHandlers();
	__motor__bindAllEventHandlers();
	__health__bindAllEventHandlers();
	__travel__bindAllEventHandlers();

}

function __common__bindAllEventHandlers(){
	__common__bindBreadcrumbEvents();
	__common__bindQuoteBuyFormEvents();
	__common__bindAccordionEvents();
}

function __common__bindBreadcrumbEvents(){
	$("[id=breadcrumb] > div").bind("click", function(e){
		if($(e.target).hasClass("active")){
			return;
		}
		var index = $("[id=breadcrumb] > div").index($(e.target)) + 1;
		if(index == 3){//"Enter details and Review"
			$(".accordion-group:nth-child(3) a").click();
		}
		else if(index == 2){//"Results/"
			$(".accordion-group:nth-child(2) a").click();
		}
		else if(index == 1){//"Calculate Premium/"
			$(".accordion-group:nth-child(1) a").click();
		}
	});
}

function __common__bindQuoteBuyFormEvents(){
	//Binding the form validation
	__common__validateQuoteBuyForm();
}

function __common__bindAccordionEvents(){

	$(".accordion").on('click', function(e){
		//index of the accordion being clicked
		var index =  $(".accordion-group").index($(e.target).parents(".accordion-group")) + 1;
		//if the accordion being clicked is not allowed yet
		if(window.allowedAccordionIndexes[index] == 0){
			//if it is "Results" accordion
			if(index = 2){
				alert("Please enter your vehicles details and generate a quote first");
			}else if(index = 3){
				//if it is "Eneter details and Review" accordion and user has not even genrated a quote
				if(window.allowedAccordionIndexes[2] == 0){
					alert("Please enter your vehicles details and generate a quote first");
				}else {
					//it is a "Eneter details and Review" accordion and the user has not click on the buy link in "Results" accordion
					alert("Please click on buy link");
				}
			}
			
			return false;
		}
	});

	//Binding the accordion
	$(".accordion").on('shown hidden', function(e){
		if(e.type == "shown"){
			var index =  $(".accordion-group").index($(e.target).parents(".accordion-group")) + 1;
			window.currentAccordionIndex = index;
			if(window.allowedAccordionIndexes[2] != 0){
				//make calculate premium green
				$("[id=breadcrumb] > [id=1]").removeClass().addClass("bar bar-success");
			}
			if(window.allowedAccordionIndexes[3] != 0){
				//make "Results" accordion green
				$("[id=breadcrumb] > [id=2]").removeClass().addClass("bar bar-success");
			}
		}
    	$(e.target).siblings('.accordion-heading').find('.accordion-toggle i').toggleClass('icon-plus-sign icon-minus-sign');
	});
}