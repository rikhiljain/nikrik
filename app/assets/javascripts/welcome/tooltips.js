function bindToolTips(){

	__common__bindToolTips();
	__motor__bindToolTips();
	__health__bindToolTips();
	__travel__bindToolTips();

}

function __common__bindToolTips(){
		$("i").tooltip({"placement": "right"});
}