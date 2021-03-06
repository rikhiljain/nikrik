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
	window.$userMenuContentDivAlert.html("<h3>My Orders</h3>");
	var html = [], h = -1;
	$.jsonRequest({
        url: "/orders/user_orders",
        type: "GET",
        success:  function(data){
		html[++h] = "<table class='table table-striped table-centered'>";
		html[++h] = "<thead><tr><th>Order Date</th>";
		html[++h] = "<th>Order Number</th>";
		html[++h] = "<th>Order Status</th>";
		html[++h] = "<th>Points</th>";
		html[++h] = "<th>Order Details</th>";
		html[++h] = "</tr></thead><tbody>";
		for(var result, i = -1; result = data[++i];){
			html[++h] = "<tr><td>";
			html[++h] = result.created_at
			html[++h] = "</td><td>";
			html[++h] = result.order_num;
			html[++h] = "</td><td>";
			html[++h] = result.status;
			html[++h] = "</td><td>";
			html[++h] = result.points;
			html[++h] = "</td><td style='white-space: pre-wrap;' >";
			html[++h] =  "<strong>Purchased item - </strong><br>" + result.desc + "<br><strong>Shipping Address:</strong><br>" + result.address;
			html[++h] = "</td></tr>";
		}
		html[++h] = "</tbody></table>";
		window.$userMenuContentDivTable.html(html.join(''));

	}

	});		
		
}

function __loyalty__populatePolicies(){
	window.$userMenuContentDivAlert.html("<h3>My Policies</h3>");
	var motorHtml = [], m = -1;
	var healthHtml = [], h = -1;
	var travelHtml = [], t = -1;

	$.jsonRequest({
        url: "/policies/policies",
        type: "GET",
        success: function(result){
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
		}
	});		
}

function __loyalty__populateReferrals(address, referralId){

	window.$userMenuContentDivAlert[0].innerHTML = "<h3>My Referrals</h3>";
	var html = [], h = -1;

	$.jsonRequest({
        url: "/loyalty/user_referrals",
        type: "GET",
        success: function(data){
			html[++h] = "	<div id='myReferralLegend'>";
			html[++h] = "	<p class='info'><strong>LEGEND</strong></p>";
			html[++h] = "	<dl class='dl-horizontal'>";
			html[++h] = "	  <dt>OPEN</dt>";
			html[++h] = "	  <dd>Either we have yet to establish the contact with the your friend or the discussions are in progress. Please confirm the status after some time.</dd>";
			html[++h] = "	<br>";
			html[++h] = "	  <dt>CLOSED</dt>";
			html[++h] = "	  <dd>Your friend has dicided to purchase his/her next policy from us. Please verfiy that you have received the appropriate point by clicking on 'My Points' link.</dd>";
			html[++h] = "	<br>";
			html[++h] = "	  <dt>REJECTED</dt>";
			html[++h] = "	  <dd>For now your friend has dicided not to change his/her insurance agent. You can refer him/her again if he/she is interested in future.</dd>";
			html[++h] = "	</dl>";
			html[++h] = "	</div> ";      	
		for(var result, i = -1; result = data[++i];){
			html[++h] = "<dl class='dl-horizontal'>";
			html[++h] = "  <dt>Status</dt>";
			html[++h] = "  <dd>"+result.status+"*</dd>";
			html[++h] = "  <dt>Referral Date</dt>"
			html[++h] = "  <dd>"+result.created_at+"</dd>";
			html[++h] = "  <dt>Referral Name</dt>";
			html[++h] = "  <dd>"+result.ref_name+"</dd>";
			html[++h] = "  <dt>Referral Mobile</dt>";
			html[++h] = "  <dd>"+result.ref_mobile+"</dd>";
			html[++h] = "  <dt>Description </dt>";
			html[++h] = "  <dd>"+result.ref_desc+"</dd>";
			html[++h] = "</dl>";
			html[++h] = "<hr/>";
			}
			window.$userMenuContentDivTable.html(html.join(''));
		}

	});		

}

function __loyalty__populatePoints(){
	window.$userMenuContentDivAlert[0].innerHTML = "<h3>My Points</h3>";
	var html = [], h = -1;
	$.jsonRequest({
        url: "/loyalty/points",
        type: "GET",
        success:  function(data){
		html[++h] = "<p class='lead text-success'><strong>Total Available Points = " + data.total_points + "</strong></p>";
		html[++h] = "<table class='table table-striped table-centered'>";
		html[++h] = "<thead><tr><th>Transaction Date</th>";
		html[++h] = "<th>Description</th>";
		html[++h] = "<th>Points</th>";
		html[++h] = "<th>Transaction Type</th>";
		html[++h] = "<th>Expiry Date</th>";
		html[++h] = "</tr></thead><tbody>";
		for(var result, i = -1; result = data.points[++i];){
			if( result.status == 'EARNED')
			{
				html[++h] = "<tr><td>";
				html[++h] = result.created_at
				html[++h] = "</td><td>";
				html[++h] = result.desc;
				html[++h] = "</td><td>";
				html[++h] = '(<i class="icon-plus"></i>)';
				html[++h] = result.value
				html[++h] = "</td><td>";
				html[++h] = 'CREDIT';	

			}
			else if (result.status == 'USED') 
			{
				html[++h] = "<tr><td>";
				html[++h] = result.created_at
				html[++h] = "</td><td>";
				html[++h] = result.desc;
				html[++h] = "</td><td>";				
				html[++h] = '(<i class="icon-minus"></i>)';
				html[++h] = result.value
				html[++h] = "</td><td>";	
				html[++h] = 'DEBIT';			
			}
			else if (result.status == 'EXPIRED') {
				html[++h] = "<tr><td><strike>";
				html[++h] = result.created_at
				html[++h] = "</strike></td><td><strike>";
				html[++h] = result.desc;
				html[++h] = "</strike></td><td><strike>";
				html[++h] = result.value
				html[++h] = "</strike></td><td>";	
				html[++h] = 'EXPIRED';							
			}
			html[++h] = "</td><td>";
			html[++h] = result.exp_dt;
			html[++h] = "</td></tr>";
		}
		html[++h] = "</tbody></table>";
		window.$userMenuContentDivTable.html(html.join(''));

	}

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
			html[++h] = "<p><button class='btn btn-danger' type='button' onClick='__loyalty__confirmUserPoints("+JSON.stringify(result)+")'>Select</button></p>";
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
				__loyalty__buildErrorMessageForPoints(result, data);
			}
			else{
				__loyalty__buildSuccessMessageForPoints(result, data);
			}
		}
	});	

}


function __loyalty__confirmPurchase(id){
	var json = {};
	json["id"] = id;
	 $.map($("[id=orderDetailsForm]").serializeArray(), function(el, i){
        json[el.name] = el.value;
    });
	serializedJSON = JSON.stringify(json);
  	$.ajax({
        url: "/loyalty/confirm/",
        type: "POST",
        dataType: "json", // expected format for response
        contentType: "application/json", // send as JSON
        timeout: 100000, //3 second timeout
        data: serializedJSON,

        
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
	window.$rewardDetailsModal.find(".fifth").text("Select");	
	window.$rewardDetailsModal.find(".fifth").unbind('click');
	window.$rewardDetailsModal.find(".fifth").click(function(){__loyalty__confirmUserPoints(result)});
	window.$rewardDetailsModal.show();
	window.$rewardDeatilsOrErrorModal.modal();
}


function __loyalty__buildErrorMessageForPoints(result, data){
	var message = "<p>You don't seem to have the sufficient reward points to proceed with the purchase. Please check your reward points balance.</p>";
	message +=  "<p><strong>Current balance: "+data.total_points+"</p>";
	message +=  "<p><strong>Points required: " + result.points+"</p>";
	window.$errorModal.find(".first").html(message);
	window.$rewardDetailsModal.hide();
	window.$successModal.hide();
	window.$errorModal.show();
	window.$rewardDeatilsOrErrorModal.modal();
}

function __loyalty__buildSuccessMessageForPoints(result, data){
	var message = "<p>You have sufficient reward points to proceed with the purchase.</p>";
	message +=  "<p><strong>Current balance: "+data.total_points+"</p>";
	message +=  "<p><strong>Points required: " + result.points+"</p>";
	window.$rewardDetailsModal.find(".notification").html(message);
	window.$rewardDetailsModal.find(".notification").show();

	window.$rewardDetailsModal.find(".first").html(result.details);
	window.$rewardDetailsModal.find(".second").attr("src", "/assets/rewards/"+ result.image_name);
	window.$rewardDetailsModal.find(".third").html("Reward points: " + result.points);
	window.$rewardDetailsModal.find(".fourth").html(result.description);
	//window.$rewardDetailsModal.find(".fifth").attr("reward", JSON.stringify(result));
	window.$rewardDetailsModal.find(".fifth").text("Purchase");	
	window.$rewardDetailsModal.find(".fifth").unbind('click');
	window.$rewardDetailsModal.find(".fifth").click(function(){__loyalty__purchase(result, data)});	
	window.$errorModal.hide();
	window.$successModal.hide();
	window.$rewardDetailsModal.show();
	window.$rewardDeatilsOrErrorModal.modal();
}

function __loyalty__purchase(result, data){
	var message = "<p><strong>Pease verify your address and make changes if any.<br/> Once done, please confirm your purchase.</strong></p>";
	message +=  "<p>Current balance: "+data.total_points+"</p>";
	message +=  "<p>Points required: " + result.points+"</p>";

	message+="			   <hr/>";
	message+="				<form id='orderDetailsForm' >";
	message+="				  <fieldset>";
	message+="				    <label>Shipping Address</label>";
	message+="				    <textarea rows='3' name='address'>"+data.address+"</textarea>";
	message+="				    <label>Mobile Number</label>";
	message+="				    <input type='text' value='"+data.mobile+"' name='mobile'></input>";
	message+="				  </fieldset>";
	message+="				</form>";

	window.$rewardDetailsModal.find(".notification").html(message);
	window.$rewardDetailsModal.find(".notification").show();

	window.$rewardDetailsModal.find(".first").html(result.details);
	window.$rewardDetailsModal.find(".second").attr("src", "/assets/rewards/"+ result.image_name);
	window.$rewardDetailsModal.find(".third").html("Reward points: " + result.points);
	window.$rewardDetailsModal.find(".fourth").html(result.details);
	//window.$rewardDetailsModal.find(".fifth").attr("reward", JSON.stringify(result));
	window.$rewardDetailsModal.find(".fifth").text("Confirm");	
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