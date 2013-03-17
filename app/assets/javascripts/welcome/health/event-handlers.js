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

		if($(this).val() == "2" ){
			$motherAgeGrp.show();
			$fatherAgeGrp.show();
			$adultAgeGrp.hide();
		}else {
			$motherAgeGrp.hide();
			$fatherAgeGrp.hide();
			$adultAgeGrp.show();
		}
	});

	$("[id=healthQuoteFormResetLink]").bind("click",function(e){
		initialize();
	});

}