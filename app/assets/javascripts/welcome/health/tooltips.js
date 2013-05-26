function __health__bindToolTips(){
	$("[id=healthQuoteForm] [id=policyFor_icon]").tooltip({"title":"Please select the one from the available options.","placement":"right"});
	$("[id=healthQuoteForm] [id=health_cover_icon]").tooltip({"title":"Please select the health coverage amount.","placement":"right"});
	$("[id=healthQuoteForm] [id=no_of_childs_icon]").tooltip({"title":"More than 21 years old Child will not be covered.","placement":"right"});
	$("[id=healthQuoteForm] [id=adult_age_icon]").tooltip({"title":"Please select the age of elder spouse in the family.","placement":"right"});
	$("[id=healthQuoteForm] [id=father_age_icon]").tooltip({"title":"Please select the age of the father.","placement":"right"});
	$("[id=healthQuoteForm] [id=mother_age_icon]").tooltip({"title":"Please select the age of the mother.","placement":"right"});
}