function populateDynamicData(){
	__common__populateDynamicData();
	__motor__populateDynamicData();
	__health__populateDynamicData();
	__travel__populateDynamicData();
}

function __common__populateDynamicData(){
	__common__loadCurrentUser();
}


function __common__loadCurrentUser(){
	var address = "/motor/searches/currentUser.json";
	$.getJSON(address,function(currentUser){
		user = currentUser;
	});
}

