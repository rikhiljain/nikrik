function __health__bindAllEventHandlers(){
	__health__bindQuoteFormEvents();
}

function __health__bindQuoteFormEvents(){

	$healthPolicyFor.bind("change",function(){
		if($(this).val() == "1" || $(this).val() == "2" ){
			$noOfChildsGrp.hide();
		}else{
			$noOfChildsGrp.show();
		}
	});

	//Binding the form validation
	__health__validateQuoteForm();
}