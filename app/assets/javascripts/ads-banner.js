var AdsBanner = (function($){

  var that = {};

  var initialized = false;
  var $adsBannerDiv;

  that.show = function(){
    init();
    CallUs.hide();
    ReferFriend.hide();
    $adsBannerDiv.show();
  };  

  that.hide = function(){
    init();
    $adsBannerDiv.hide();
  };

 var  init = function(){
    if(!initialized){
      $adsBannerDiv = $("[id=adsBannerDiv]");
      initialized = true;
    }
  };

  return that;

})(jQuery);


