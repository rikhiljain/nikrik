function __health__bindToolTips(){
	$("[id=healthQuoteForm][id=health_cover_icon]").tooltip({"title":"Select health coverage amount.","placement":"right"});
	$("[id=healthQuoteForm][id=no_of_childs_icon]").tooltip({"title":"More than 21 years old Child will not be covered.","placement":"right"});
	$("[id=healthQuoteForm][id=adult_age_icon]").tooltip({"title":"Age of Elder spouse in the family.","placement":"right"});
}