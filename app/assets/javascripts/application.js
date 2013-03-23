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
//= require welcome/jquery-selectors
//= require welcome/motor/jquery-selectors
//= require welcome/health/jquery-selectors
//= require welcome/travel/jquery-selectors
//= require welcome/loyalty/jquery-selectors
//= require welcome/jquery-form-validations
//= require welcome/motor/jquery-form-validations
//= require welcome/health/jquery-form-validations
//= require welcome/travel/jquery-form-validations
//= require welcome/loyalty/jquery-form-validations
//= require welcome/static-data
//= require welcome/motor/static-data
//= require welcome/health/static-data
//= require welcome/travel/static-data
//= require welcome/loyalty/static-data
//= require welcome/tooltips
//= require welcome/motor/tooltips
//= require welcome/health/tooltips
//= require welcome/travel/tooltips
//= require welcome/loyalty/tooltips
//= require welcome/event-handlers
//= require welcome/motor/event-handlers
//= require welcome/health/event-handlers
//= require welcome/travel/event-handlers
//= require welcome/loyalty/event-handlers
//= require welcome/dynamic-data
//= require welcome/motor/dynamic-data
//= require welcome/health/dynamic-data
//= require welcome/travel/dynamic-data
//= require welcome/loyalty/dynamic-data
//= require welcome/post-initialization
//= require welcome/motor/post-initialization
//= require welcome/health/post-initialization
//= require welcome/travel/post-initialization
//= require welcome/loyalty/post-initialization
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
//= require welcome/loyalty/initialization
//= require welcome/call-us
//= require welcome/referral
//= require welcome/policy-compare
//= require welcome/welcome
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

		//cluster.init('brandText');

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
			welcome();
		}
		//Setting the event handlers for 'Motor', 'Health' and 'Travel' links.
		//This is needed no matter what is being displayed.
		secondLevelNavBarEventHandlers();	
		//We need to fix the affix no matter what is being displayed.
		affixAll();
		__loyalty__cacheAllJquerySelector();
		__loyalty__bindAllEventHandlers();
	});
})(jQuery);

function secondLevelNavBarEventHandlers(){

	$("[id=secondLevelNavBar] [id=1]").bind("click", function(e){
		//We need to display the insurance shopee div.
		displayInsuranceShopeeDiv();
		//Motor
		//This check is important so that if some one clicks on already active link. Nothing should happen.
		if(window.currentSelection != "Motor"){
			$("[id=secondLevelNavBar] li").removeClass("active");
			$(e.currentTarget).addClass("active");
			window.currentSelection = "Motor";
			initialize();
		}
	});

	$("[id=secondLevelNavBar] [id=2]").bind("click", function(e){
		//We need to display the insurance shopee div.
		displayInsuranceShopeeDiv();
		//Health
		//This check is important so that if some one clicks on already active link. Nothing should happen.
		if(window.currentSelection != "Health"){
			$("[id=secondLevelNavBar] li").removeClass("active");
			$(e.currentTarget).addClass("active");
			window.currentSelection = "Health";
			initialize();
		}
	});

	$("[id=secondLevelNavBar] [id=3]").bind("click", function(e){
		//We need to display the insurance shopee div.
		displayInsuranceShopeeDiv();
		//Travel
		//This check is important so that if some one clicks on already active link. Nothing should happen.
		if(window.currentSelection != "Travel"){
			$("[id=secondLevelNavBar] li").removeClass("active");
			$(e.currentTarget).addClass("active");
			window.currentSelection = "Travel";
			initialize();
		}
	});

}

function displayInsuranceShopeeDiv(){
		//we need to show the insurance div and hide the devise div
		$("[id=insuranceShopeeDiv]").show();
		$("[id=deviseDiv]").hide();
		//This is most important, we want to bind all the events and initialize.
		//We might put a check to run this only when the window.content == "devise", but I am not sure about it??
		if(window.content == "devise"){
			//If we want to display the insuranceShopeeDiv, then we will also activate all the events.
			//If those have already been not run. That will be the case when we click on devise forms
			//and then click on 'Motor' etc links or on MyRewards etc links
			welcome();
			//Once we have initialized it, we do not want to do it again.
			window.content == "insuranceShopee";
		}
}


function affixAll(){
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
}			
