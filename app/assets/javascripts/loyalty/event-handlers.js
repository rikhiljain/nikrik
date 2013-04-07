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
		try
		{
			if(id == "myPolicies"){
				__loyalty__populatePolicies();
			}else if(id == "myReferrals"){
				__loyalty__populateReferrals(href);
			}else if(id == "myPoints"){
				__loyalty__populatePoints();
			}else if(id == "myRewards"){
				__loyalty__populateRewards();
			}else if(id == "myOrders"){
				__loyalty__populateOrders(href);
			}else if(id == "editProfile"){
				return true;
			}
		}
		catch( err)
		{
			alert(err.message);
		}
		return false;	
}

function __loyalty__populateOrders(){
	__loyalty__getJsonAndPopulateTable("/orders/user_orders.json", ["Id:id","Ordare Date:created_at","Order Status:status","Shipped Address:address","Reward Id:reward_id"], "My Orders",["id"],
		function (data) {
	});		
}

function __loyalty__populatePolicies(){
	window.$userMenuContentDivAlert.html("<h3>My Policies</h3>");
	var motorHtml = [], m = -1;
	var healthHtml = [], h = -1;
	var travelHtml = [], t = -1;
	$.getJSON("/policies/policies.json",function(result){
		for(var data, i = -1; data = result[++i];){
			if(data.policy_type.toUpperCase() == "MOTOR"){
				motorHtml[++m] = "<tr>"+"<td>"+data.policy_id+"</td>"+"<td>"+data.start_date+"</td>"+"<td>"+data.end_date+"</td>"+"<td>"+data.premium+"</td>"+"<td>"+data.company_name+"</td>"+"</tr>";
			}else if(data.policy_type.toUpperCase() == "HEALTH"){
				healthHtml[++h] = "<tr>"+"<td>"+data.policy_id+"</td>"+"<td>"+data.start_date+"</td>"+"<td>"+data.end_date+"</td>"+"<td>"+data.premium+"</td>"+"<td>"+data.company_name+"</td>"+"</tr>";
			}else if(data.policy_type.toUpperCase() == "TRAVEL"){
				travelHtml[++t] = "<tr>"+"<td>"+data.policy_id+"</td>"+"<td>"+data.start_date+"</td>"+"<td>"+data.end_date+"</td>"+"<td>"+data.premium+"</td>"+"<td>"+data.company_name+"</td>"+"</tr>";
			}
		}
		$("[id=userPoliciesMotorTabTbody]").html(motorHtml.join(''));
		$("[id=userPoliciesHealthTabTbody]").html(healthHtml.join(''));
		$("[id=userPoliciesTravelTabTbody]").html(travelHtml.join(''));
		window.$userMenuContentDivTable.html("");
		window.$userMenuContentDivTable.html($("[id=userPoliciesDiv]").html());
		$('#userPoliciesTab a').click(function(e){e.preventDefault(); $(this).tab('show');});
	});		
}

function __loyalty__populateReferrals(address, referralId){
	__loyalty__getJsonAndPopulateTable("/loyalty/user_referrals.json", ["Id:id","Name:ref_name", "Mobile Number:ref_mobile", "Description:ref_desc", "Status:status", "Created At:created_at", "Updated At:updated_at"], "My Referrals",["id"],
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

function __loyalty__populatePoints(){
	window.$userMenuContentDivAlert[0].innerHTML = "<h3>My Points</h3>";
	var html = [], h = -1;
	$.getJSON("/loyalty/points.json",function(data){
		html[++h] = "<p>Total Available Points = " + data.total_points + "</p>";
		html[++h] = "<table class='table table-striped table-centered'>";
		html[++h] = "<thead><tr><th>Reference Type</th>";
		html[++h] = "<th>Points</th>";
		html[++h] = "<th>Status</th>";
		html[++h] = "<th>Created On</th>";
		html[++h] = "</tr></thead><tbody>";
		for(var result, i = -1; result = data.points[++i];){
			html[++h] = "<tr><td>";
			html[++h] = result.ref_type
			html[++h] = "</td><td>";
			html[++h] = result.value;
			html[++h] = "</td><td>";
			html[++h] = result.status
			html[++h] = "</td><td>";
			html[++h] = result.created_at;
			html[++h] = "</td></tr>";
		}
		html[++h] = "</tbody></table>";
		window.$userMenuContentDivTable.html(html.join(''));

	});		

}

function __loyalty__populateRewards(){

	var itemsInRow = 2;
	var formHeading = "Rewards Program";
	if(window.user != null){
		formHeading = "My Rewards";
	}
	window.$userMenuContentDivAlert[0].innerHTML = "<h3>"+formHeading+"</h3>";
	var html = [], h = -1;
	html[++h] = "<table class='table is_rewards'><tbody><tr>";
	$.getJSON("/loyalty/rewards.json",function(data){
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
			html[++h] = "<p><button class='btn btn-danger' type='button' onClick='__loyalty__confirmUserPoints("+JSON.stringify(result)+")'>Qty 1 -  Select</button></p>";
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

function __loyalty__confirmUserPoints(result){
	$.getJSON("/loyalty/purchase/"+ result.id+".json",function(data){
		if(data.operationResult == false){
			__loyalty__buildErrorMessageForSignin();
		}else{
			if(data.total_points < result.points){
				__loyalty__buildErrorMessageForPoints(result, data.total_points);
			}
			else{
				__loyalty__buildSuccessMessageForPoints(result, data.total_points);
			}
		}
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
        timeout: 100000, //3 second timeout
        data: serializedJSON,

          complete: function() {
            //called when complete
          },

          success: function( data) {
            //called when successful
            if(data.result == true)
            {
            	__loyalty__buildSuccessMessageForConfirmation();
            }
            else
            {
            	if(data.resultCode == "NOT_SUFFICIENT_POINTS"){
            		__loyalty__buildErrorMessageForPoints(data.result, data.userPoints);

            	}else if(data.resultCode == "NOT_LOGGED_IN"){
            		__loyalty__buildErrorMessageForSignin();
            	}
            }

        },

          error: function(textStatus, errorThrown) {
            //called when there is an error
            __loyalty__buildErrorMessageForUnknownError("Some error has happened" + textStatus + errorThrown);
          },
      })
}

function __loyalty__rewardsDescription(result){	
	window.$errorModal.hide();
	window.$successModal.hide();
	window.$rewardDetailsModal.find(".notification").hide();
	window.$rewardDetailsModal.find(".first").html(result.details);
	window.$rewardDetailsModal.find(".second").attr("src", "/assets/rewards/"+ result.image_name);
	window.$rewardDetailsModal.find(".third").html("Reward points: " + result.points);
	window.$rewardDetailsModal.find(".fourth").html(result.description);
	//window.$rewardDetailsModal.find(".fifth").attr("reward", JSON.stringify(result));
	window.$rewardDetailsModal.find(".fifth").text("Qty 1 - Select");	
	window.$rewardDetailsModal.find(".fifth").unbind('click');
	window.$rewardDetailsModal.find(".fifth").click(function(){__loyalty__confirmUserPoints(result)});
	window.$rewardDetailsModal.show();
	window.$rewardDeatilsOrErrorModal.modal();
}


function __loyalty__buildErrorMessageForPoints(result, userPoints){
	var message = "<p>You don't seem to have the sufficient reward points to proceed with the purchase. Please check your reward points balance.</p>";
	message +=  "<p><strong>Current balance: "+userPoints+"</p>";
	message +=  "<p><strong>Points required: " + result.points+"</p>";
	window.$errorModal.find(".first").html(message);
	window.$rewardDetailsModal.hide();
	window.$successModal.hide();
	window.$errorModal.show();
	window.$rewardDeatilsOrErrorModal.modal();
}

function __loyalty__buildSuccessMessageForPoints(result, userPoints){
	var message = "<p>You have sufficient reward points to proceed with the purchase. Please confirm your purchase.</p>";
	message +=  "<p><strong>Current balance: "+userPoints+"</p>";
	message +=  "<p><strong>Points required: " + result.points+"</p>";
	window.$rewardDetailsModal.find(".notification").html(message);
	window.$rewardDetailsModal.find(".notification").show();

	window.$rewardDetailsModal.find(".first").html(result.details);
	window.$rewardDetailsModal.find(".second").attr("src", "/assets/rewards/"+ result.image_name);
	window.$rewardDetailsModal.find(".third").html("Reward points: " + result.points);
	window.$rewardDetailsModal.find(".fourth").html(result.description);
	//window.$rewardDetailsModal.find(".fifth").attr("reward", JSON.stringify(result));
	window.$rewardDetailsModal.find(".fifth").text("Qty 1 - Confirm");	
	window.$rewardDetailsModal.find(".fifth").unbind('click');
	window.$rewardDetailsModal.find(".fifth").click(function(){__loyalty__confirmPurchase(result.id)});	
	window.$errorModal.hide();
	window.$successModal.hide();
	window.$rewardDetailsModal.show();
	window.$rewardDeatilsOrErrorModal.modal();
}

function __loyalty__buildSuccessMessageForConfirmation(){
	var message = "Your Purchase has been comfirmed.";
	window.$successModal.find(".first").html(message);
	window.$rewardDetailsModal.hide();
	window.$errorModal.hide();
	window.$successModal.show();
	window.$rewardDeatilsOrErrorModal.modal();
}

function __loyalty__buildErrorMessageForSignin(){
	var message = "It seems that either you have not logged in or your session has expired. Please login to confirm your purchase.";
	window.$errorModal.find(".first").html(message);
	window.$rewardDetailsModal.hide();
	window.$successModal.hide();
	window.$errorModal.show();
	window.$rewardDeatilsOrErrorModal.modal();
}

function __loyalty__buildErrorMessageForUnknownError(error){
	window.$errorModal.find(".first").html(error);
	window.$rewardDetailsModal.hide();
	window.$successModal.hide();
	window.$errorModal.show();
	window.$rewardDeatilsOrErrorModal.modal();
}