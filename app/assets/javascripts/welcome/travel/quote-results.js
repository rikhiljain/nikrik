function __travel__fillResultTable(data){

var results = data;
window.quotes = data;
var e = esc;
var html = [], h = -1;
html[++h] = "<table id='quoteTravelResultsTable' class='table table-bordered'>";
html[++h] = "<th>Company Name</th>";
html[++h] = "<th>Plan</th>";
html[++h] = "<th>Total Premium</th>";
html[++h] = "<th></th>";
html[++h] = "<tbody>";
for(var result, i = -1; result = results[++i];){
	html[++h] = "<tr><td>";
	html[++h] = result.company_name;
	html[++h] = "</td><td>";
	html[++h] = result.plan;
	html[++h] = "</td><td>";
	html[++h] = result.total_premium;
	html[++h] = "</td><td>";
	html[++h] = "<a class='_is_hand-cursor' onclick='__common__openQuoteBuyForm("+result.company_id+");'>Buy</a>";
	html[++h] = "</td></tr>";
}
html[++h] = "</tbody>";
html[++h] = "</table>";
html[++h] = "<button id='travelQuoteResultsRecomputeLink' class='btn btn-link' type='button' onclick='__travel__recomputeQuoteForm()'>Recompute</button>";
window.$quoteResultsAccordionTable[0].innerHTML = html.join('');
}

function __travel__recomputeQuoteForm(){
	initialize();
}

