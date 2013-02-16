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
//= require bootstrap
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
//= require welcome/welcome

var m_names = new Array("January", "February", "March", 
"April", "May", "June", "July", "August", "September", 
"October", "November", "December");

var user;
var quotes;
var selectedQuote;
var selection = "Motor";
var accordionIndex = -1;


(function($){
	$(document).ready(function(){

		$("[id=secondLevelNavBar] [id=1]").bind("click", function(e){
			//Motor
			if(selection != "Motor"){
				$("[id=secondLevelNavBar] li").removeClass("active");
				$(e.currentTarget).addClass("active");
				selection = "Motor";
				initialize();
			}
		});

		$("[id=secondLevelNavBar] [id=2]").bind("click", function(e){
			//Health
			if(selection != "Health"){
				$("[id=secondLevelNavBar] li").removeClass("active");
				$(e.currentTarget).addClass("active");
				selection = "Health";
				initialize();
			}
		});

		$("[id=secondLevelNavBar] [id=3]").bind("click", function(e){
			//Travel
			if(selection != "Travel"){
				$("[id=secondLevelNavBar] li").removeClass("active");
				$(e.currentTarget).addClass("active");
				selection = "Travel";
				initialize();
			}
		});

	});
})(jQuery);			
