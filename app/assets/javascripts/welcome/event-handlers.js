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
	$("[id=breadcrumb] > a").bind("click", function(e){
		if($(e.target).hasClass("badge-warning")){
			return;
		}
		var index = $("[id=breadcrumb] > a").index($(e.target)) + 1;
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
			var message = "";
			if(window.currentSelection == "Motor"){
				message = "Please enter your vehicles details and generate a quote first";
			}else if(window.currentSelection == "Health"){
				message = "Please enter your health details and generate a quote first";
			}else if(window.currentSelection == "Travel"){
				message = "Please enter your travel details and generate a quote first";
			}
			//if it is "Results" accordion
			if(index == 2){
				alert(message);
			}else if(index == 3){
				//if it is "Eneter details and Review" accordion and user has not even genrated a quote
				if(window.allowedAccordionIndexes[2] == 0){
					alert(message);
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
			__common__updateBreadCrumbs();
		}
    	$(e.target).siblings('.accordion-heading').find('.accordion-toggle i').toggleClass('icon-plus-sign icon-minus-sign');
	});
}

function __common__updateBreadCrumbs(){
	if(window.allowedAccordionIndexes[0] == 1){
		$("[id=breadcrumb]  [id=1]").removeClass().addClass("badge badge-success");
		$("[id=breadcrumb]  [id=2]").removeClass().addClass("badge badge-success");
		$("[id=breadcrumb]  [id=3]").removeClass().addClass("badge badge-success");
	}else if(window.allowedAccordionIndexes[3] == 1){
		//make "Calculate premium" accordion green
		//make "Results" accordion green
		//make "Eneter details and Review" accordion yellow
		$("[id=breadcrumb]  [id=1]").removeClass().addClass("badge badge-success");
		$("[id=breadcrumb]  [id=2]").removeClass().addClass("badge badge-success");
		$("[id=breadcrumb]  [id=3]").removeClass().addClass("badge badge-warning");
	}else if(window.allowedAccordionIndexes[2] == 1){
		//make "Calculate premium" accordion green
		//make "Results" accordion yellow
		$("[id=breadcrumb]  [id=1]").removeClass().addClass("badge badge-success");
		$("[id=breadcrumb]  [id=2]").removeClass().addClass("badge badge-warning");
		$("[id=breadcrumb]  [id=3]").removeClass().addClass("badge badge-important");
	}else if(window.allowedAccordionIndexes[1] == 1){
		//make "Calculate premium" accordion yellow
		$("[id=breadcrumb]  [id=1]").removeClass().addClass("badge badge-warning");
		$("[id=breadcrumb]  [id=2]").removeClass().addClass("badge badge-important");
		$("[id=breadcrumb]  [id=3]").removeClass().addClass("badge badge-important");
	}
}