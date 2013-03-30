function __referral__initialize(){
  window.$referralForm = $("[id=referralForm]");
  window.$referralFormNotificationDiv = $("[id=referralFormNotificationDiv]");
  window.$referralFormNotificationDivCloseLink = $("[id=referralFormNotificationDiv] a");

  window.$adsBannerDiv = $("[id=adsBannerDiv]");
  window.$referFriendFormDiv = $("[id=referFriendFormDiv]");

  validateReferralForm();

}