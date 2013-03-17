function __common__policyCompare(policyType){

	//make one ajax call to pull the data
	//for a policy type.
	//Polict type will be either "Motor", "Health" or "Travel"

	// var policyAttributes = {
	// 				"first":{
	// 							"1":"value1",
	// 							"2":"value2"
	// 				},
	// 				"second":{
	// 							"1":"true",
	// 							"2":"false"
	// 				},
	// 				"third":{
	// 							"1":"10",
	// 							"2":"20"						
	// 				}
	// };

	var policyAttributes = {
					"first":{
								"1:Gold":"value1",
								"1:Silver":"value2",
								"2:Gold":"value3",
								"2:Silver":"value4"
					},
					"second":{
								"1:Gold":"true",
								"1:Silver":"true",
								"2:Gold":"false",
								"2:Silver":"false"
					},
					"third":{
								"1:Gold":"10",
								"1:Silver":"20",
								"2:Gold":"30",
								"2:Silver":"40"					
					}
	};			  

	var companyIds = new Array();

//	var results = JSON.parse('[{"idv_value":1290100,"company_id":1,"company_name":"ICICI","base_od":44380,"elec_acc":0,"non_elec_acc":0,"bi_fuel_od":0,"net_od":44380,"anti_theft_dis":0,"aai_dis":0,"ncb_dis":8876,"net_dis":8876,"final_od":35504,"base_tp":2853,"bi_fuel_tp":60,"owner_pa":100,"passenger_pa":0,"pad_driver":50,"final_tp":3063,"total_premium":38567,"service_tax":4767,"final_premium":43334,"motor_search_id":38},{"idv_value":1290100,"company_id":2,"company_name":"BAJAJ","base_od":44380,"elec_acc":0,"non_elec_acc":0,"bi_fuel_od":0,"net_od":44380,"anti_theft_dis":0,"aai_dis":0,"ncb_dis":8876,"net_dis":8876,"final_od":35504,"base_tp":2853,"bi_fuel_tp":60,"owner_pa":100,"passenger_pa":0,"pad_driver":50,"final_tp":3063,"total_premium":38567,"service_tax":4767,"final_premium":43334,"motor_search_id":38},{"idv_value":1290100,"company_id":3,"company_name":"TATA","base_od":44380,"elec_acc":0,"non_elec_acc":0,"bi_fuel_od":0,"net_od":44380,"anti_theft_dis":0,"aai_dis":0,"ncb_dis":8876,"net_dis":8876,"final_od":35504,"base_tp":2853,"bi_fuel_tp":60,"owner_pa":100,"passenger_pa":0,"pad_driver":50,"final_tp":3063,"total_premium":38567,"service_tax":4767,"final_premium":43334,"motor_search_id":38},{"idv_value":1290100,"company_id":4,"company_name":"RELIANCE","base_od":44380,"elec_acc":0,"non_elec_acc":0,"bi_fuel_od":0,"net_od":44380,"anti_theft_dis":0,"aai_dis":0,"ncb_dis":8876,"net_dis":8876,"final_od":35504,"base_tp":2853,"bi_fuel_tp":60,"owner_pa":100,"passenger_pa":0,"pad_driver":50,"final_tp":3063,"total_premium":38567,"service_tax":4767,"final_premium":43334,"motor_search_id":38}]');

	var results = JSON.parse('[{"idv_value":1290100,"company_id":1,"plan":"Gold","company_name":"ICICI","base_od":44380,"elec_acc":0,"non_elec_acc":0,"bi_fuel_od":0,"net_od":44380,"anti_theft_dis":0,"aai_dis":0,"ncb_dis":8876,"net_dis":8876,"final_od":35504,"base_tp":2853,"bi_fuel_tp":60,"owner_pa":100,"passenger_pa":0,"pad_driver":50,"final_tp":3063,"total_premium":38567,"service_tax":4767,"final_premium":43334,"motor_search_id":38},{"idv_value":1290100,"company_id":2,"plan":"Gold","company_name":"BAJAJ","base_od":44380,"elec_acc":0,"non_elec_acc":0,"bi_fuel_od":0,"net_od":44380,"anti_theft_dis":0,"aai_dis":0,"ncb_dis":8876,"net_dis":8876,"final_od":35504,"base_tp":2853,"bi_fuel_tp":60,"owner_pa":100,"passenger_pa":0,"pad_driver":50,"final_tp":3063,"total_premium":38567,"service_tax":4767,"final_premium":43334,"motor_search_id":38},{"idv_value":1290100,"company_id":3,"plan":"Silver","company_name":"TATA","base_od":44380,"elec_acc":0,"non_elec_acc":0,"bi_fuel_od":0,"net_od":44380,"anti_theft_dis":0,"aai_dis":0,"ncb_dis":8876,"net_dis":8876,"final_od":35504,"base_tp":2853,"bi_fuel_tp":60,"owner_pa":100,"passenger_pa":0,"pad_driver":50,"final_tp":3063,"total_premium":38567,"service_tax":4767,"final_premium":43334,"motor_search_id":38},{"idv_value":1290100,"company_id":4,"company_name":"RELIANCE","base_od":44380,"elec_acc":0,"non_elec_acc":0,"bi_fuel_od":0,"net_od":44380,"anti_theft_dis":0,"aai_dis":0,"ncb_dis":8876,"net_dis":8876,"final_od":35504,"base_tp":2853,"bi_fuel_tp":60,"owner_pa":100,"passenger_pa":0,"pad_driver":50,"final_tp":3063,"total_premium":38567,"service_tax":4767,"final_premium":43334,"motor_search_id":38}]');


	//var results = window.quotes;

	//console.log(JSON.stringify(results));

	//We have the quotes stored in window.quotes
	//These quotes will have the company_id and company_name columns.
	//We need to display all the dcompanies in popup and then one can close
	//unnecessary items

	var html = [], h = -1;

	for(var result, i = -1; result = results[++i];){
		html[++h] = "<label class='checkbox inline'>";		
		html[++h] = "<input type='checkbox' value='"+(i+1)+"' checked onclick='__common__policyCompare__ColumnToggele(this)'>"+result.company_name+"</input>";
		html[++h] =  "</label>";
	}


	html[++h] = "<table id='quoteCompareTable' class='table table-bordered datatable' style='border-style:none solid solid none;'>";
	html[++h] = "<thead><tr><th>col1</th><th>col2</th><th>col3</th><th>col4</th><th>col5</th></tr></thead>";	
	html[++h] = "<tbody>";	
	html[++h] = "<tr>";
	html[++h] = "<td style='border:none;'></td>"; //We need one empty cell to store the attribute names
	for(var result, i = -1; result = results[++i];){
		html[++h] = "<td class='alert-success'>";
		if(result.plan != null){
			html[++h] = "<strong>"+result.company_name+"</strong>";
			html[++h] = "<strong> - "+result.plan+"</strong>";
			companyIds.push(result.company_id+":"+result.plan);
		}else{
			html[++h] = "<strong>"+result.company_name+"</strong>";
			companyIds.push(result.company_id);
		}
		html[++h] = "</td>";
	}
	html[++h] = "</tr>";
	html[++h] = "<tr>";	
	html[++h] = "<td style='border:none;'></td>"; //We need one empty cell to store the attribute names	
	for(var result, i = -1; result = results[++i];){
		html[++h] = "<td class='alert-success'>";
		html[++h] = "<strong>"+result.final_premium+"</strong>";
		html[++h] = "</td>";
	}			
	html[++h] = "</tr>";

	//iterate over all policy attributes
	for(var prompt in policyAttributes){
		html[++h] = "<tr>";
		html[++h] = "<td class='alert-error'>";
		html[++h] = "<strong>"+prompt+"</strong>";
		html[++h] = "</td>";
		//for loop over company ids
		for(var companyId, i = -1; companyId = companyIds[++i];){
			html[++h] = "<td>";
			var attribValue = policyAttributes[prompt][companyId];
			if(attribValue != null && (attribValue.toUpperCase() == "TRUE" || attribValue.toUpperCase() == "YES" || attribValue.toUpperCase() == "SUPPORTED")){
				html[++h] = "<i class='icon-ok'></i>";
			}else if(attribValue != null && (attribValue.toUpperCase() == "FALSE" || attribValue.toUpperCase() == "NO" || attribValue.toUpperCase() == "NOT SUPPORTED")){
				html[++h] = "<i class='icon-remove'></i>";
			}else{
				html[++h] = attribValue;
			}
			html[++h] = "</td>";
		}
		html[++h] = "</tr>";
		//console.log(prompt);
	}
	html[++h] = "</tbody>";
	html[++h] = "</table>";

	//console.log(html.join(''));



	$("[id=policy_compare_model] [id=policy_compare_body]")[0].innerHTML = html.join('');

	$('.datatable').dataTable({"sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>", "sPaginationType": "bootstrap", "bPaginate": false,
		    "aoColumnDefs": [{"bSortable":false,"aTargets":[ 0,1,2,3,4]}]
	});

	$('#policy_compare_model').modal();

	return false;
}

function __common__policyCompare__ColumnToggele(elem){
	//console.log($(elem).val());
	__common__policyCompare__fnShowHide($(elem).val());
}

function __common__policyCompare__fnShowHide(iCol)
{
    /* Get the DataTables object again - this is not a recreation, just a get of the object */
    var oTable = $('#quoteCompareTable').dataTable();
     
    var bVis = oTable.fnSettings().aoColumns[iCol].bVisible;
    oTable.fnSetColumnVis( iCol, bVis ? false : true );
}