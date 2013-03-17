function __health__bindToolTips(){
	$healthQuoteForm.filter("[id=health_cover_icon]").tooltip({"title":"Select health coverage amount.","placement":"right"});
	$healthQuoteForm.filter("[id=no_of_childs_icon]").tooltip({"title":"More than 21 years old Child will not be covered.","placement":"right"});
}