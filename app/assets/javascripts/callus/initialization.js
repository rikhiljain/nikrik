function __callus__initialize(){
  window.$callUsForm = $("[id=callUsForm]");
  window.$callUsFormNotificationDiv = $("[id=callUsFormNotificationDiv]");
  window.$callUsFormNotificationDivCloseLink = $("[id=callUsFormNotificationDiv] a");
  
  window.$adsBannerDiv = $("[id=adsBannerDiv]");
  window.$requestCallUsFormDiv = $("[id=requestCallBackFormDiv]");

  validateCallUsForm();
  $callUsForm.each (function(){this.reset();});
}