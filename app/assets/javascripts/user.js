var User = (function($){

  var that = {};
  var user;

  that.load = function(){
    var address = "/motor/searches/currentUser.json";
    $.getJSON(address,function(currentUser){
      user = currentUser;
    });
  };

  that.get = function(){
    return user;
  };

  that.isLoggedIn = function(){
    if(user === null || user === undefined){
      return false;
    }
    return true;
  }

  that.isAdmin = function(){
    //logged in and admin
    return that.isLoggedIn() && (user.roles.indexOf('admin') != -1);
  };

  that.isOperator = function(){
    //logged in and operator
    return that.isLoggedIn() && (user.roles.indexOf('operator') != -1);
  };

  that.isNormalUser = function(){
    //logged in and not admin and not operator
      return that.isLoggedIn() && !that.isAdmin() && !that.isOperator();
  };

  that.getRole = function(){
    return that.isLoggedIn() ? user.roles : [];
  };  

  return that;

})(jQuery);


