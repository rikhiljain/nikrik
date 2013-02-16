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
		var index =  $(".accordion-group").index($(e.target).parents(".accordion-group")) + 1;
		if(window.allowedAccordionIndexes[index] == 0){
			alert("display some useful message over here")
			return false;
		}
	});

	//Binding the accordion
	$(".accordion").on('shown hidden', function(e){
		if(e.type == "shown"){
			var index =  $(".accordion-group").index($(e.target).parents(".accordion-group")) + 1;
			window.currentAccordionIndex = index;
			if(index == 1){ //"Motor Quote Form"				
				$("[id=breadcrumb] > [id=1]").removeClass().addClass("bar bar-warning");
				$("[id=breadcrumb] > [id=2]").removeClass().addClass("bar bar-warning");
				$("[id=breadcrumb] > [id=3]").removeClass().addClass("bar bar-warning");
			}
			else if(index == 2){ //"Results"
				$("[id=breadcrumb] > [id=1]").removeClass().addClass("bar bar-success");
				$("[id=breadcrumb] > [id=2]").removeClass().addClass("bar bar-warning");
				$("[id=breadcrumb] > [id=3]").removeClass().addClass("bar bar-warning");
			}
			else if(index == 3){//"Insured Contact Details"
				$("[id=breadcrumb] > [id=1]").removeClass().addClass("bar bar-success");
				$("[id=breadcrumb] > [id=2]").removeClass().addClass("bar bar-success");
				$("[id=breadcrumb] > [id=3]").removeClass().addClass("bar bar-warning");
			}
		}
    	$(e.target).siblings('.accordion-heading').find('.accordion-toggle i').toggleClass('icon-plus-sign icon-minus-sign');
	});
}