var Root = (function($){

	var that = {};

	var initialized = false;

	that.init = function(){
		if(!initialized){
			initialize();
			initialized = true;
		}
	};

	var initialize = function(){
		//initilize the company listing carouse;
		$('#logoCarou').carouFredSel({
			width: '100%',
			items: {
				visible: 'odd+2'
			},
			scroll: {
				pauseOnHover: true,
				onBefore: function() {
					$(this).children().removeClass( 'hover' );
				}
			},
			auto: {
				items: 1,
				easing: 'linear',
				duration: 1250,
				timeoutDuration: 0
			}
		});
		//we don't want animation on bootbox alerts
		bootbox.animate(false);
		
		$('#myCarousel').carousel({
	          interval: 10000
	        });	

		affixAll();
		cusomValidationMethods();
		configureBlockUIPlugin();
		createAutoClosingAlert();	
	};

	var affixAll = function(){
		var positions = new Array();
		var widths = new Array();
		var elements = new Array();
		$(".is_affix").each(function( index, elem ) {
			var position = $(elem).position();
			if(position.left != 0 && position.top != 0){
				positions.push($(elem).position());
				widths.push($(elem).width());
				elements.push($(elem));
			}
		});

		$.each(elements, function( index, elem ) {
			$(elem).css({
			    "position":"fixed", 
			    "top": positions[index].top + "px",
			    "left": positions[index].left + "px",
			    "width": widths[index] + "px"
			});
		});		
	};

	var cusomValidationMethods = function(){
		$.validator.addMethod("register_city_val", function() {
		    if (window.$rtoId.val() == ""){
		    	return false;
		    } 
	   		else{
	   			 return true;
	   		}
		});

		$.validator.addMethod("policy_exp_date_val", function() {
			if($("[id=basicDetails] > [id=currentInsuranceDetails] [id=policyType]:checked").val() == "true"){
				return true;
			}
			else{
				if ($policyExpDate.val() == ""){
		    		return false;
		    	} 
	   			else{
	   			 	return true;
	   			}
			}
		});

		$.validator.addMethod("phoneIndia", function(mobile_number, element) {
	    	mobile_number = mobile_number.replace(/\s+/g, ""); 
			return this.optional(element) || mobile_number.length > 9 ;
			}, "Please specify a valid phone number");
	};

	var configureBlockUIPlugin = function(){
	  $.blockUI.defaults.css = {cursor:'default'};
	  $.blockUI.defaults.overlayCSS = {backgroundColor: '#00f', opacity: 0.6, cursor: 'default', borderRadius:'6px 6px 6px 6px'};
	};

	var createAutoClosingAlert = function(){
	    window.setTimeout(function(){
	    	$("[id=mainMessagesDiv]").alert('close');
	     }
	     , 2000);
	};			

	return that;

})(jQuery);





