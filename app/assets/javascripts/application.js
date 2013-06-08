// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery/jquery-1.8.3
//= require jquery/jquery.validate
//= require jquery/jquery-ui-1.9.2.custom
//= require jquery/jquery.blockUI
//= require dataTables/jquery.dataTables
//= require dataTables/jquery.dataTables.bootstrap
//= require bootstrap
//= require dataTables/jquery.dataTables
//= require lonelytype/cluster
//= require carouFredSel/jquery.carouFredSel-6.2.1

//= require welcome/jquery-selectors
//= require welcome/motor/jquery-selectors
//= require welcome/health/jquery-selectors
//= require welcome/travel/jquery-selectors
//= require welcome/jquery-form-validations
//= require welcome/motor/jquery-form-validations
//= require welcome/health/jquery-form-validations
//= require welcome/travel/jquery-form-validations
//= require welcome/static-data
//= require welcome/motor/static-data
//= require welcome/health/static-data
//= require welcome/travel/static-data
//= require welcome/tooltips
//= require welcome/motor/tooltips
//= require welcome/health/tooltips
//= require welcome/travel/tooltips
//= require welcome/event-handlers
//= require welcome/motor/event-handlers
//= require welcome/health/event-handlers
//= require welcome/travel/event-handlers
//= require welcome/dynamic-data
//= require welcome/motor/dynamic-data
//= require welcome/health/dynamic-data
//= require welcome/travel/dynamic-data
//= require welcome/post-initialization
//= require welcome/motor/post-initialization
//= require welcome/health/post-initialization
//= require welcome/travel/post-initialization
//= require welcome/motor/quote-request
//= require welcome/health/quote-request
//= require welcome/travel/quote-request
//= require welcome/motor/quote-results
//= require welcome/health/quote-results
//= require welcome/travel/quote-results
//= require welcome/quote-buy
//= require welcome/initialization
//= require welcome/motor/initialization
//= require welcome/health/initialization
//= require welcome/travel/initialization
//= require welcome/policy-compare
//= require welcome/welcome

//= require loyalty/jquery-selectors
//= require loyalty/jquery-form-validations
//= require loyalty/static-data
//= require loyalty/tooltips
//= require loyalty/event-handlers
//= require loyalty/dynamic-data
//= require loyalty/post-initialization
//= require loyalty/initialization

//= require callus/initialization
//= require callus/callus

//= require referral/initialization
//= require referral/referral

//= require root/initialization

//= require faqs

//= require json-to-table

//= require_self

var m_names = new Array("January", "February", "March", 
"April", "May", "June", "July", "August", "September", 
"October", "November", "December");

window.user;
window.quotes;
window.selectedQuote;
window.currentSelection;
window.currentAccordionIndex;
window.allowedAccordionIndexes;


(function($){
	$(document).ready(function(){

		// Make sure that every Ajax request sends the CSRF token
		$.ajaxPrefilter(function(options, originalOptions, xhr) { CSRFProtection(xhr); });

		$.jsonRequest = function(options){
	
		    var validResponseCB = options.success || function(jsonResponse){
		      console.log("Valid response returned");
		      console.log(jsonResponse);
		    };
		    options.dataType = "json";// expected format for response
        	options.contentType = "application/json"; // send as JSON
        	options.timeout = 100000;//3 second timeout
		    
		    options.success = function(jsonResponse){
		      if(jsonResponse.status == "redirect"){
		        window.location = jsonResponse.to;
		      }
		      else{
		        validResponseCB(jsonResponse);
		      }
		    };
	
		    // The real action takes place here.
		    $.ajax(options);
		  };


		__insurance__initialize();
		__loyalty__initialize();
		__referral__initialize();
		__callus__initialize();
		__root__initialize();


		if(window.content == "devise"){
			//this will happen only when the devise forms are being displayed.
			//we really want to clear out the selection, so that when we click
			//on 'Motor' link. Then we can display the insurance shopee div
			window.currentSelection = "XXX";
			//we want to hide the insurance shopee div
			$("[id=insuranceShopeeDiv]").hide();	
		}else if(window.content == "insuranceShopee"){
			//This will happen only when
			//The page loads on after login, logout and first page.
			//By default we want to display motor
			window.currentSelection = "Motor";
			//No accordion will be selected
			window.currentAccordionIndex = -1;
			//Nothing is allowed
			window.allowedAccordionIndexes = new Array();
			//We would like to display the insurance shopee div.
			//This might already be displayed, but calling again will not hurt us.
			displayInsuranceShopeeDiv();
			//we also want to intilize every thing. Every evnet binding for mainContentDiv.
			__insurance__accordion__initialize();

			//now we should make the "Motor" as selected
			$("[id=secondLevelNavBar] [id=1]").addClass("active");
		}

		//Setting the event handlers for 'Motor', 'Health' and 'Travel' links.
		//This is needed no matter what is being displayed.
		secondLevelNavBarEventHandlers();
		
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

	});
})(jQuery);

function secondLevelNavBarEventHandlers(){

	$("[id=secondLevelNavBar] [id=1]").bind("click", function(e){
		//We need to display the insurance shopee div.
		displayInsuranceShopeeDiv();
		__root__showAdsBanner();
		//Motor
		//This check is important so that if some one clicks on already active link. Nothing should happen.
		if(window.currentSelection != "Motor"){
			$("[id=secondLevelNavBar] li").removeClass("active");
			$(e.currentTarget).addClass("active");
			window.currentSelection = "Motor";
			__insurance__accordion__initialize();
		}
		return false;
	});

	$("[id=secondLevelNavBar] [id=2]").bind("click", function(e){
		//We need to display the insurance shopee div.
		displayInsuranceShopeeDiv();
		__root__showAdsBanner();
		//Health
		//This check is important so that if some one clicks on already active link. Nothing should happen.
		if(window.currentSelection != "Health"){
			$("[id=secondLevelNavBar] li").removeClass("active");
			$(e.currentTarget).addClass("active");
			window.currentSelection = "Health";
			__insurance__accordion__initialize();
		}
		return false;
	});

	$("[id=secondLevelNavBar] [id=3]").bind("click", function(e){
		//We need to display the insurance shopee div.
		displayInsuranceShopeeDiv();
		__root__showAdsBanner();
		//Travel
		//This check is important so that if some one clicks on already active link. Nothing should happen.
		if(window.currentSelection != "Travel"){
			$("[id=secondLevelNavBar] li").removeClass("active");
			$(e.currentTarget).addClass("active");
			window.currentSelection = "Travel";
			__insurance__accordion__initialize();
		}
		return false;
	});

	$("[id=secondLevelNavBar] [id=4]").bind("click", function(e){
		__root__showAdsBanner();
		//Rewards
		//This check is important so that if some one clicks on already active link. Nothing should happen.
		if(window.currentSelection != "Rewards"){
			$("[id=secondLevelNavBar] li").removeClass("active");
			__loyalty__myLinksClickHandlers($(this).attr("userMenuId"), $(this).attr("userMenuHref"));
			$(e.currentTarget).addClass("active");
		}
		return false;
	});	

}

function displayInsuranceShopeeDiv(){
		//we need to show the insurance div and hide the devise div
		$("[id=insuranceShopeeDiv]").show();
		$("[id=deviseDiv]").hide();
		$("[id=secondLevelNavBar] li").removeClass("active");
	}			


// Make sure that every Ajax request sends the CSRF token
function CSRFProtection(xhr) {
 var token = $('meta[name="csrf-token"]').attr('content');
 if (token) xhr.setRequestHeader('X-CSRF-Token', token);
}