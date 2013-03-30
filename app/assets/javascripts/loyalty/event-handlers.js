function __loyalty__bindAllEventHandlers() {
	__loyalty__myLinksClickHandlers();
}

function __loyalty__myLinksClickHandlers(){
	$("[id=userMenuDiv] a").bind("click", function(){

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
		}else if($(this).attr("id") == "myRewards"){
			__loyalty__populateRewards($(this).attr("href"));
		}else if($(this).attr("id") == "editProfile"){
			return true;
		}

		return false;
	});

}

function __loyalty__populatePolicies(address){
	__loyalty__getJsonAndPopulateTable(address+".json", ["Id:id","Policy Path:policy_path","Policy Type:policy_type","Company Name:company_name","Policy Id:policy_id", "Premium:premium", "Start Date:start_date", "End Date:end_date"," :download"], "My Policies",["id","policy_path"],
		function (data) {
			$("[id=userMenuContentDiv] > [id=userMenuContentDivTable] tbody tr").each(function(index, value){
				var downloadUrl = "/policies/download/"+$(this).children(":nth-child(1)").text();
				var downloadLink = "<a href='"+downloadUrl+"'>Download</a>";
				$(this).children(":nth-child(9)").html(downloadLink);
	 		});
	});		
}

function __loyalty__populateReferrals(address, referralId){
	__loyalty__getJsonAndPopulateTable(address+".json", ["Id:id","Name:ref_name", "Mobile Number:ref_mobile", "Description:ref_desc", "Status:status", "Created At:created_at", "Updated At:updated_at"], "My Referrals",["id"],
		function (data) {
			if(referralId == null){
				//if referaal id is null, we don't need to anything
				//else we will have to find that row and highlight that
			}else{
				$("[id=userMenuContentDiv] > [id=userMenuContentDivTable] tbody tr").each(function(index, value){
					if($(this).children(":nth-child(1)").text() == referralId){
						$(this).children().addClass("is_redBorderAndBg");
					}
		 		});
			}
	});
}

function __loyalty__populatePoints(address){
	__loyalty__getJsonAndPopulateTable(address+".json", ["Id:id","Reference Type:ref_type", "Reference Id:ref_id", "Value:value", "Status:status", "Created At:created_at", "Expiry Date At:exp_dt"], "My Points",["id"], 
		function (data) {
			//This will be the third column as the first it column is hidden
		$("[id=userMenuContentDiv] > [id=userMenuContentDivTable] tbody tr").each(function(index, value){
			 var  referralId = $(this).children(":nth-child(3)").text();
			 if(referralId != ""){
			 	var user_id = data[0]["user_id"];
			 	$(this).children(":nth-child(3)").html("<a class=\"is_hand-cursor\" onclick=\"__loyalty__populateReferrals('/loyalty/user_referrals/"+user_id+"',"+referralId+");\">"+referralId+"</a>");
			 }
		 });		
	});
}

function __loyalty__populateRewards(address){
	__loyalty__getJsonAndPopulateTable(address+".json", ["Id:id","Name:name", "Image:image_name", "Points:points", "Description:details"], "My Rewards", ["id","name"],
		function (data) {
			//This will be the third column as the first it column is hidden
		$("[id=userMenuContentDiv] > [id=userMenuContentDivTable] tbody tr").each(function(index, value){
			var altName = $(this).children(":nth-child(2)").text();
			var json = {};
			json["title"] = altName;
			json["placement"] = "right";
			$(this).children(":nth-child(3)").html("<img rel='rewardsTooltip' src='/assets/rewards/"+$(this).children(":nth-child(3)").text()+"' class='img-circle' title='"+altName+"' data-toggle='tooltip' data-placement='right'></img>");
		 });
		$("[rel=rewardsTooltip]").tooltip();		
	});		
}

function __loyalty__getJsonAndPopulateTable(urlAddress, tableHeaders, formHeading, hiddenFieldNames, callBackFn){
	$.getJSON(urlAddress,function(data){
		var jsonHtmlTable = ConvertJsonToTable(data, 'jsonTable', "table table-bordered table-striped", 'Download', tableHeaders, hiddenFieldNames);
		window.$userMenuContentDivAlert[0].innerHTML = "<h3>"+formHeading+"</h3>";
		window.$userMenuContentDivTable[0].innerHTML = jsonHtmlTable;
		if(callBackFn != null){
			callBackFn(data);
		}
	});	

}



