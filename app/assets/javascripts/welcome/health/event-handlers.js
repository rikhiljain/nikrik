function __health__bindAllEventHandlers(){
	__health__bindQuoteFormEvents();
}

function __health__bindQuoteFormEvents(){

	$healthPolicyFor.bind("change",function(){
		if($(this).val() == "1" || $(this).val() == "2" ){
			window.$noOfChildsGrp.hide();
		}else{
			window.$noOfChildsGrp.show();
		}
	});

	$("[id=healthQuoteFormResetLink]").bind("click",function(e){
		initialize();
	});

}