function postInitialization(){
	__common__postInitialization();
	__motor__postInitialization();
	__health__postInitialization();
	__travel__postInitialization();
}

function __common__postInitialization(){
  $.blockUI.defaults.css = {cursor:'default'};
  $.blockUI.defaults.overlayCSS = {backgroundColor: '#00f', opacity: 0.6, cursor: 'default', borderRadius:'6px 6px 6px 6px'};

  $('.carousel').carousel('cycle');
}