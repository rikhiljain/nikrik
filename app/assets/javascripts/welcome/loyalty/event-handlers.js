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
	__loyalty__getJsonAndPopulateTable(address+".json", ["Id:id","Name:ref_name", "Mobile Number:ref_mobile", "Description:ref_desc", "Status:status", "Created At:created_at", "Updated At:updated_at"], "My Policies","id");
}

function __loyalty__populateReferrals(address, referralId){
	__loyalty__getJsonAndPopulateTable(address+".json", ["Id:id","Name:ref_name", "Mobile Number:ref_mobile", "Description:ref_desc", "Status:status", "Created At:created_at", "Updated At:updated_at"], "My Referrals","id",
		function (data) {
			if(referralId == null){
				//if referaal id is null, we don't need to anything
				//else we will have to find that row and highlight that
			}else{
				$("[id=userMenuContentDiv] > [id=userMenuContentDivTable] tr td:nth-child(1)").each(function(index, value){
					if(value.innerHTML == referralId){
						$(this).parent().addClass("error");
					}
		 		});
			}
	});
}

function __loyalty__populatePoints(address){
	__loyalty__getJsonAndPopulateTable(address+".json", ["Id:id","Reference Type:ref_type", "Reference Id:ref_id", "Value:value", "Status:status", "Created At:created_at", "Expiry Date At:exp_dt"], "My Points","id", 
		function (data) {
			//This will be the third column as the first it column is hidden
		$("[id=userMenuContentDiv] > [id=userMenuContentDivTable] tr td:nth-child(3)").each(function(index, value){
			 if(value.innerHTML != "<i></i>"){
			 	var user_id = data[0]["user_id"];
			 	value.innerHTML = "<a class=\"is_hand-cursor\" onclick=\"__loyalty__populateReferrals('/loyalty/user_referrals/"+user_id+"',"+value.innerHTML+");\">"+value.innerHTML+"</a>";
			 }
		 });		
	});
}

function __loyalty__populateRewards(address){
	__loyalty__getJsonAndPopulateTable(address+".json", ["Id:id","Name:ref_name", "Mobile Number:ref_mobile", "Description:ref_desc", "Status:status", "Created At:created_at", "Updated At:updated_at"], "My Rewards","id");
}

function __loyalty__getJsonAndPopulateTable(urlAddress, tableHeaders, formHeading, hiddenFieldName, callBackFn){
	$.getJSON(urlAddress,function(data){
		var jsonHtmlTable = ConvertJsonToTable(data, 'jsonTable', "table table-bordered table-striped", 'Download', tableHeaders, hiddenFieldName);
		window.$userMenuContentDivAlert[0].innerHTML = "<h3>"+formHeading+"</h3>";
		window.$userMenuContentDivTable[0].innerHTML = jsonHtmlTable;
		if(callBackFn != null){
			callBackFn(data);
		}
	});	

}



