function __loyalty__bindAllEventHandlers() {

	$("[id=userMenuDiv] a").bind("click", function(){
		return __loyalty__myLinksClickHandlers($(this).attr("id"), $(this).attr("href"));
	});
}

function __loyalty__myLinksClickHandlers(id, href){
		displayInsuranceShopeeDiv();

		//console.log($(this).attr("href"));
		window.$mainContentDiv.hide();
		window.$userMenuContentDiv.show();

		window.currentSelection = "XXX";

		if(id == "myPolicies"){
			__loyalty__populatePolicies(href);
		}else if(id == "myReferrals"){
			__loyalty__populateReferrals(href);
		}else if(id == "myPoints"){
			__loyalty__populatePoints(href);
		}else if(id == "myRewards"){
			__loyalty__populateRewards(href);
		}else if(id == "editProfile"){
			return true;
		}

		return false;	
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

	var itemsInRow = 2;
	var formHeading = "Insurance Shopee Rewards Program";
	if(window.user != null){
		formHeading = "My Rewards";
	}
	window.$userMenuContentDivAlert[0].innerHTML = "<h3>"+formHeading+"</h3>";
	var html = [], h = -1;
	html[++h] = "<table class='table is_rewards'><tbody><tr>";
	$.getJSON(address+".json",function(data){
		rewardResults = data;
		for(var result, i = -1; result = data[++i];){
			if(i != 0 && i % itemsInRow == 0){
				html[++h] = "</tr><tr>";
			}
			html[++h] = "<td width='50%'>";
			html[++h] = "<div>";
			html[++h] = "<img src='/assets/rewards/"+ result.image_name +"''></img>";
			html[++h] = "<p><span class='label label-info'>"+result.name + ", " + result.points + " Points" +"</span></p>";
			html[++h] = "<p><button class='btn btn-link' type='button' onClick='__loyalty__rewardsDescription("+JSON.stringify(result)+")'>"+result.details+"</button></p>";
			html[++h] = "<p><button class='btn btn-danger' type='button' onClick=''>Qty 1 -  Select</button></p>";
		}
		html[++h] = "</tr></tbody></table>";
		window.$userMenuContentDivTable.html(html.join(''));

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

function __loyalty__purchase(id){
	$.getJSON("/loyalty/purchase/"+ id,function(data){
		var html = [], h = -1;
html[++h] = "<div id=\"purchase_confirm_msg\"></div>";
html[++h] = "<table class='table'>";
html[++h] = "<tbody>";
html[++h] = "<tr><td>Name:</td><td>";
html[++h] = data.name;
html[++h] = "</tr><tr><td>Details:</td><td>";
html[++h] = data.details;
html[++h] = "</tr><tr><td>Points:</td><td>";
html[++h] = data.points;
html[++h] = "</td></tr>";
html[++h] = "</tbody>";
html[++h] = "</table>";
html[++h] = "<a class=\"is_hand-cursor\" onclick=\"__loyalty__confirmPurchase('" + data.id + "')\" > Confirm </a>";
window.$userMenuContentDivAlert[0].innerHTML = "<h3>Confirm Your Purchase</h3>";
window.$userMenuContentDivTable[0].innerHTML = html.join('');
	});	

}


function __loyalty__confirmPurchase(id){
	var json = {};
	json["id"] = id;
	serializedJSON = JSON.stringify(json);
  $.ajax({
        url: "/loyalty/confirm/",
        type: "POST",
        dataType: "json", // expected format for response
        contentType: "application/json", // send as JSON
        timeout: 3000, //3 second timeout
        data: serializedJSON,

          complete: function() {
            //called when complete
          },

          success: function( data) {
            //called when successful
            purchase_div = $("[id=purchase_confirm_msg]");
            if(data.error == true)
            {
            	purchase_div.addClass("alert alert-error");
            }
            else
            {
            	purchase_div.addClass("alert alert-success");
            }
            purchase_div[0].innerHTML = data.notice;
        },

          error: function(textStatus, errorThrown) {
            //called when there is an error
            console.log("some error happened" + textStatus + errorThrown);
          },
      })
}

function __loyalty__rewardsDescription(result){
	
	$("[id=rewards_details_model] .first").html(result.details);
	$("[id=rewards_details_model] .third").html("Reward points: " + result.points);
	$("[id=rewards_details_model] .fourth").html(result.description);

	$('#rewards_details_model').modal();

}




