function __travel__bindAllEventHandlers(){
	
	$("[id=travelQuoteFormResetLink]").bind("click",function(e){
		__travel__initialize();
	});

	window.$tripType.bind("change",function(){
		if($(this).val() == "S"){
			window.$maxTripDurationCG.hide();
  			window.$travelEndDate.removeAttr('disabled');
  			window.$travelEndDate.val("");
  			window.$travelStartDate.val("");
		}else{
			window.$maxTripDurationCG.show();
			var now = new Date();
 			
 			now.setDate(now.getDate() + 1);
 			window.$travelStartDate.val(now.getDate() + "-" + now.getMonth() +  "-" + now.getFullYear());
 			
 			now.setDate(now.getDate() + 364);
 			window.$travelEndDate.val(now.getDate() + "-" + now.getMonth() +  "-" + now.getFullYear());

 			window.$travelEndDate.attr('disabled', 'disabled');
 			window.$travelTotalDays.text( __travel__days() );

		}
	});

	window.$travelStartDate.bind("change",function(){
			if ($tripType.filter(":checked").val() == 'M')
			{
				 var travelStartDateArray = $travelStartDate.val().split("-");
				 var startDate = new Date(travelStartDateArray[2],travelStartDateArray[1],travelStartDateArray[0]) ;
 
				startDate.setDate(startDate.getDate() + 364);
 				window.$travelEndDate.val(startDate.getDate() + "-" + startDate.getMonth() +  "-" + startDate.getFullYear());

			}
		 __travel__populateDays();
	});

	window.$travelEndDate.bind("change",function(){
		 __travel__populateDays();
	});

	window.$travelPolicyFor.bind("change",function(){
		 if($(this).val() == 'S')
		 {
		 	$tripType.each (function(){
		 		if( $(this).val() == 'S')
	  			{
	  				$(this).attr('checked', 'checked');
	  			}
	  			
	  			if( $(this).val() == 'M')
	  			{
	  				$("[id=travelQuoteForm] [id=annualTripRadio]").hide();
	  				window.$maxTripDurationCG.hide();
	  			}
 			});
 			window.$travelEndDate.removeAttr('disabled');
 			
		 }
		 else
		 {
		 	$tripType.each (function(){
	  			if( $(this).val() == 'M')
	  			{
	  				$("[id=travelQuoteForm] [id=annualTripRadio]").show();
	  			}

 			});
		 }
	});

}

	$("[id=travelQuoteFormResetLink]").bind("click",function(e){
		__insurance__accordion__initialize();
	});
