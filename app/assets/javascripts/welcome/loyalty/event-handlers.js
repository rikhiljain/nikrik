function __loyalty__bindAllEventHandlers() {
	__loyalty__myLinksClickHandlers();
}

function __loyalty__myLinksClickHandlers(){
	$(".span2 .nav a").bind("click", function(){

		displayInsuranceShopeeDiv();

		//console.log($(this).attr("href"));
		window.$mainContentDiv.hide();
		window.$userMenuContentDiv.show();

		window.currentSelection = "XXX";

		if($(this).attr("id") == "myPolicies"){
			__loyalty__populatePolicies($(this).attr("href"));
		}else if($(this).attr("id") == "myReferrals"){
			__loyalty__populateReferrals($(this).attr("href"));
		}else if($(this).attr("id") == "myPoints"){
			__loyalty__populatePoints($(this).attr("href"));
		}else if($(this).attr("id") == "myPolicies"){
			__loyalty__populateRewards($(this).attr("href"));
		}

		return false;
	});

}

function __loyalty__populatePolicies(address){
	__loyalty__getJsonAndPopulateTable(address+".json", ["Name:ref_name", "Mobile Number:ref_mobile", "Description:ref_desc", "Status:status", "Created At:created_at", "Updated At:updated_at"], "My Policies");
}

function __loyalty__populateReferrals(address){
	__loyalty__getJsonAndPopulateTable(address+".json", ["Name:ref_name", "Mobile Number:ref_mobile", "Description:ref_desc", "Status:status", "Created At:created_at", "Updated At:updated_at"], "My Referrals");
}

function __loyalty__populatePoints(address){
	__loyalty__getJsonAndPopulateTable(address+".json", ["Reference Type:ref_type", "Reference Id:ref_id", "Value:value", "Status:status", "Created At:created_at", "Expiry Date At:exp_dt"], "My Points", 
		function () {
		$("[id=userMenuContentDiv] > [id=userMenuContentDivTable] tr td:nth-child(2)").each(function(index, value){
			 if(value.innerHTML != "<i></i>"){
			 	value.innerHTML = "<a class=\"is_hand-cursor\" onclick=\"__loyalty__populateReferrals('/loyalty/user_referrals/"+value.innerHTML+"');\">"+value.innerHTML+"</a>";
			 }
		 });		
	});
}

function __loyalty__populateRewards(address){
	__loyalty__getJsonAndPopulateTable(address+".json", ["Name:ref_name", "Mobile Number:ref_mobile", "Description:ref_desc", "Status:status", "Created At:created_at", "Updated At:updated_at"], "My Rewards");
}

function __loyalty__getJsonAndPopulateTable(address, headers, heading, fn){
	$.getJSON(address,function(referrals){
		var jsonHtmlTable = ConvertJsonToTable(referrals, 'jsonTable', "table table-bordered table-striped", 'Download', headers);
		window.$userMenuContentDivAlert[0].innerHTML = "<h3>"+heading+"</h3>";
		window.$userMenuContentDivTable[0].innerHTML = jsonHtmlTable;
		if(fn != null){
			fn();
		}
	});	

}



