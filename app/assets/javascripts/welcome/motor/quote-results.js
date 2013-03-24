function __motor__fillResultTable(data){
	//var a = '[{"company": 1,"total_premium": 110937.63745664,"discount": 0},{"company": 2,"total_premium": 110937.63745664,"discount": 0},{"company": 3,"total_premium": 10937.63745664,"discount": 0},{"company": 4,"total_premium": 110937.63745664,"discount": 0}]';
	//var a = '[{"company_id":1,"company_name":"ICICI","total_premium":"56,288","final_premium":"56,288","discount":"0"},{"company_id":2,"company_name":"BAJAJ","total_premium":"56,288","final_premium":"56,288","discount":"0"},{"company_id":3,"company_name":"TATA","total_premium":"56,288","final_premium":"56,288","discount":"0"},{"company_id":4,"company_name":"RELIANCE","total_premium":"56,288","final_premium":"56,288","discount":"0"}]';

//alert(data[0].company_name);
//var results = JSON.parse(a);
var results = data;
window.quotes = data;
var e = esc;
var html = [], h = -1;
html[++h] = "<table id='quoteResultsTable' class='table table-bordered'>";
html[++h] = "<th>Company Name</th>";
html[++h] = "<th>Final Premium</th>";
html[++h] = "<th>Details</th>";
html[++h] = "<th></th>";
html[++h] = "<tbody>";
for(var result, i = -1; result = results[++i];){
	html[++h] = "<tr><td>";
	html[++h] = result.company_name;
	html[++h] = "</td><td>";
	html[++h] = "<span class='rupee'>` "+result.final_premium+"</span>";
	html[++h] = "</td><td>";
	html[++h] = "<a class='is_hand-cursor' onclick='__motor__fillPremiumBreakupTable(";
	html[++h] = result.company_id + ");' >Premium Break-up</a>";
	html[++h] = "</td><td>";
	html[++h] = "<a class='is_hand-cursor' onclick='__common__openQuoteBuyForm("+result.company_id+");'>Buy</a>";
	html[++h] = "</td></tr>";
}
html[++h] = "</tbody>";
html[++h] = "</table>";
html[++h] = "<button id='motorQuoteResultsRecomputeLink' class='btn btn-link' type='button' onclick='__motor__recomputeQuoteForm()'>Recompute</button>";
html[++h] = "<button id='motorQuoteResultsCompareLink' class='btn btn-link' type='button' onclick='__common__policyCompare(\"Motor\")'>Compare All Policies</button>";
window.$quoteResultsAccordionTable[0].innerHTML = html.join('');
}

function __motor__fillPremiumBreakupTable(id){
	//alert(quotes[0].company_name);
	var motorquote ;
	for(var result, i = -1; result = quotes[++i];){
		if (result.company_id == id)
		{
			motorquote = result;
			break;
		}
	}
	var html = [], h = -1;
	html[++h] = "<p class='text-success'><strong>Insured declared Value (IDV) = "
	html[++h] = motorquote.idv_value
	html[++h] = "</strong></p>"
	html[++h] = "<table class='table table-bordered table-striped'>";
	html[++h] = "<tbody>";
	html[++h] = "<tr style='background-color:#ffc40d;font-weight:bold;' class='info'><td colspan='2'>Own Damage</td>";
	html[++h] = "<td colspan='2'>Liability</td></tr>";

	html[++h] = "<tr><td>Basic Premium</td><td>";
	html[++h] = motorquote.base_od;
	html[++h] = "</td><td>Basic Premium</td><td>";
	html[++h] =	motorquote.base_tp;
	html[++h] = "</td></tr><tr><td>Bi-fuel Kit premium</td><td>";
	html[++h] = motorquote.bi_fuel_od;	
	html[++h] = "</td><td>Liability for Bi-fuel Kit</td><td>";
	html[++h] = motorquote.bi_fuel_tp;	
	html[++h] = "</td></tr>";

	html[++h] = "<tr><td>Electrical Accessories Premium</td><td>";
	html[++h] = motorquote.elec_acc;
	html[++h] = "</td><td>PA for Unnamed Passenger</td><td>";
	html[++h] =	motorquote.passenger_pa;
	html[++h] = "</td></tr><tr><td>Non-electrical Accessories Premium</td><td>";
	html[++h] = motorquote.non_elec_acc;	
	html[++h] = "</td><td>Legal Liability To Paid Driver</td><td>";
	html[++h] = motorquote.pad_driver;	
	html[++h] = "</td></tr>";


	html[++h] = "<tr><td>Geographic Extension Premium</td><td>";
	html[++h] = "0";
	html[++h] = "</td><td>Compulsory PA Cover for Owner Driver</td><td>";
	html[++h] =	motorquote.owner_pa;
	html[++h] = "</td></tr><tr><td>Fiber Glass Tank Premium</td><td>";
	html[++h] =  "0";	
	html[++h] = "</td><td> 	Legal Liability to Paid Employee </td><td>";
	html[++h] = "0";	
	html[++h] = "</td></tr>";

	html[++h] = "<tr style='font-weight:bold;' class='success'><td>Sub Total (A)</td><td>";
	html[++h] = motorquote.net_od;
	html[++h] = "</td><td>Total (B)</td><td>";
	html[++h] =	motorquote.final_tp;
	html[++h] = "</td></tr>";

	html[++h] = "<tr><td>Anti-theft Discount</td><td>";
	html[++h] = motorquote.anti_theft_dis;
	html[++h] = "</td><td colspan='2'></td></tr>";

	html[++h] = "<tr><td>Automobile Membership Discount</td><td>";
	html[++h] = motorquote.aai_dis;
	html[++h] = "</td><td colspan='2'></td></tr>";

	html[++h] = "<tr><td>Deduct 0% for NCB</td><td>";
	html[++h] = motorquote.ncb_dis;
	html[++h] = "</td><td colspan='2'></td></tr>";

	html[++h] = "<tr style='font-weight:bold;' class='success'><td>Total Discount (C)</td><td>";
	html[++h] = motorquote.net_dis ;
	html[++h] = "</td><td colspan='2'></td></tr>";

	html[++h] = "<tr style='font-weight:bold;' class='success'><td>Total Own Damage Premium (D = A - C)</td><td>";
	html[++h] = motorquote.final_od;
	html[++h] = "</td><td colspan='2'></td></tr>";


	html[++h] = "<tr style='font-weight:bold;' class='success'><td>Total Premium (E = D + B)</td><td>";
	html[++h] = motorquote.total_premium ;
	html[++h] = "</td><td colspan='2'></td></tr>";

	html[++h] = "<tr style='font-weight:bold;' class='success'><td>Service Tax (F)</td><td>";
	html[++h] = motorquote.service_tax;
	html[++h] = "</td><td colspan='2'></td></tr>";

	html[++h] = "<tr style='font-weight:bold;' class='success'><td>Total Premium Payable (E+F)</td><td>";
	html[++h] = motorquote.final_premium;
	html[++h] = "</td><td colspan='2'></td></tr>";

	html[++h] = "</tbody>";
	html[++h] = "</table>";

	$("[id=motor_breakup_model] [id=breakup_table]")[0].innerHTML = html.join('');

	$('#motor_breakup_model').modal();

	return false;
}

function __motor__recomputeQuoteForm(){
		initialize();
}