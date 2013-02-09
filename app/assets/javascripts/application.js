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
//= require bootstrap
//= require welcome/jquery-selectors
//= require welcome/jquery-form-validations
//= require welcome/static-data
//= require welcome/tooltips
//= require welcome/dynamic-data
//= require welcome/post-initialization
//= require welcome/quote-request
//= require welcome/quote-results
//= require welcome/quote-buy
//= require welcome/welcome

var m_names = new Array("January", "February", "March", 
"April", "May", "June", "July", "August", "September", 
"October", "November", "December");

(function($){
	$(document).ready(function(){

		$("[id=secondLevelNavBar] [id=1]").bind("click", function(e){
			$("[id=secondLevelNavBar] li").removeClass("active");
			$(e.currentTarget).addClass("active")
			$("[id=motor]").addClass("active");
			$("[id=health]").removeClass("active");
			$("[id=travel]").removeClass("active");
		});

		$("[id=secondLevelNavBar] [id=2]").bind("click", function(e){
			$("[id=secondLevelNavBar] li").removeClass("active");
			$(e.currentTarget).addClass("active")
			$("[id=motor]").removeClass("active");
			$("[id=health]").addClass("active");
			$("[id=travel]").removeClass("active");
		});

		$("[id=secondLevelNavBar] [id=3]").bind("click", function(e){
			$("[id=secondLevelNavBar] li").removeClass("active");
			$(e.currentTarget).addClass("active")
			$("[id=motor]").removeClass("active");
			$("[id=health]").removeClass("active");
			$("[id=travel]").addClass("active");
		});

	});
})(jQuery);			
