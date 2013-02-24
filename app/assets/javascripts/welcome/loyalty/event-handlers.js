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
			populatePolicies($(this).attr("href"));
		}else if($(this).attr("id") == "myReferrals"){
			populateReferrals($(this).attr("href"));
		}else if($(this).attr("id") == "myPoints"){
			populatePoints($(this).attr("href"));
		}else if($(this).attr("id") == "myPolicies"){
			populateRewards($(this).attr("href"));
		}

		return false;
	});

}

function populatePolicies(address){
	getJsonAndPopulateTable(address+".json", ["Name:ref_name", "Mobile Number:ref_mobile", "Description:ref_desc", "Status:status", "Created At:created_at", "Updated At:updated_at"], "My Policies")
}

function populateReferrals(address){
	getJsonAndPopulateTable(address+".json", ["Name:ref_name", "Mobile Number:ref_mobile", "Description:ref_desc", "Status:status", "Created At:created_at", "Updated At:updated_at"], "My Referrals")
}

function populatePoints(address){
	getJsonAndPopulateTable(address+".json", ["Reference Type:ref_type", "Reference Id:ref_id", "Value:value", "Status:status", "Created At:created_at", "Expiry Date At:exp_dt"], "My Points")
}

function populateRewards(address){
	getJsonAndPopulateTable(address+".json", ["Name:ref_name", "Mobile Number:ref_mobile", "Description:ref_desc", "Status:status", "Created At:created_at", "Updated At:updated_at"], "My Rewards")
}

function getJsonAndPopulateTable(address, headers, heading){
	$.getJSON(address,function(referrals){
		var jsonHtmlTable = ConvertJsonToTable(referrals, 'jsonTable', "table table-bordered table-striped", 'Download', headers);
		window.$userMenuContentDivAlert[0].innerHTML = "<h3>"+heading+"</h3>"
		window.$userMenuContentDivTable[0].innerHTML = jsonHtmlTable;
	});	

}



