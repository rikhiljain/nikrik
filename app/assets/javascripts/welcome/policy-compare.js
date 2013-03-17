function __common__policyCompare(policyType){

	//make one ajax call to pull the data
	//for a policy type.
	//Polict type will be either "Motor", "Health" or "Travel"
	var policyAttributes = {
					"first":{
								"1":"value1",
								"2":"value2"
					},
					"second":{
								"1":"true",
								"2":"false"
					},
					"third":{
								"1":"10",
								"2":"20"						
					}
			  };

	var companyIds = new Array();
	var results = window.quotes;

	//We have the quotes stored in window.quotes
	//These quotes will have the company_id and company_name columns.
	//We need to display all the dcompanies in popup and then one can close
	//unnecessary items

	var html = [], h = -1;
	html[++h] = "<table id='quoteCompareTable' class='table table-bordered'>";
	html[++h] = "<tbody>";	
	html[++h] = "<tr>";
	html[++h] = "<td></td>"; //We need one empty cell to store the attribute names
	for(var result, i = -1; result = results[++i];){
		html[++h] = "<td>";
		html[++h] = result.company_name;
		companyIds.push(result.company_id);
		html[++h] = "</td>";
	}
	html[++h] = "</tr>";
	html[++h] = "<tr>";	
	html[++h] = "<td></td>"; //We need one empty cell to store the attribute names	
	for(var result, i = -1; result = results[++i];){
		html[++h] = "<td>";
		html[++h] = result.final_premium;
		html[++h] = "</td>";
	}			
	html[++h] = "</tr>";

	//iterate over all policy attributes
	for(var propt in policyAttributes){
		html[++h] = "<tr>";
		html[++h] = "<td>";
		html[++h] = propt;
		html[++h] = "</td>";
		//for loop over company ids
		for(var companyId, i = -1; companyId = companyIds[++i];){
			html[++h] = "<td>";
			html[++h] = policyAttributes[propt][companyId];
			html[++h] = "</td>";
		}
		html[++h] = "</tr>";
		console.log(propt);
	}

	$("[id=policy_compare_model] [id=policy_compare_table]")[0].innerHTML = html.join('');
	$('#policy_compare_model').modal();

	return false;
}