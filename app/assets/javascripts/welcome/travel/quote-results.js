function __travel__fillResultTable(data){

var results = data;
window.quotes = data;
var e = esc;
var html = [], h = -1;
html[++h] = "<p><button id='travelQuoteResultsRecomputeLink' class='btn is_btn-custom' type='button' onclick='__travel__recomputeQuoteForm()'>Recompute</button>";
html[++h] = "&nbsp;&nbsp;"; 
html[++h] = "<button id='motorQuoteResultsCompareLink' class='btn is_btn-custom' type='button' onclick='__travel__policyCompare(true)'>Compare All Policies</button></p>";
html[++h] = "<table id='quoteTravelResultsTable' class='table table-striped'>";
html[++h] = "<thead><tr><th style='text-align:center;vertical-align:middle;' >Company Name</th>";
html[++h] = "<th style='text-align:center;vertical-align:middle;' >Plan</th>";
html[++h] = "<th><button id='motorQuoteResultsCompareLink' class='btn is_btn-custom' type='button' onclick='__travel__policyCompare(false)'>Compare</button></th>";
html[++h] = "<th style='text-align:center;vertical-align:middle;' >Final Premium</th>";
html[++h] = "<th style='text-align:center;vertical-align:middle;'>Reward Points</th>";
html[++h] = "<th></th>";
html[++h] = "</tr></thead><tbody>";
for(var result, i = -1; result = results[++i];){
	html[++h] = "<tr><td style='text-align:center;vertical-align:middle;' >";
	html[++h] = "<img src='/assets/company/logo/logo_" + result.company_id + ".png' />";
	html[++h] = "</td><td style='text-align:center;vertical-align:middle;' >";
	html[++h] = result.plan;
	html[++h] = "</td><td style='text-align:center;vertical-align:middle;' >";
	html[++h] = "<input id='compare' type='checkbox' value='true' </input>";
	html[++h] = "</td><td style='text-align:center;vertical-align:middle;'>";
	html[++h] = "<span class='rupee'>` "+result.total_premium+"</span>";
	html[++h] = "</td><td style='text-align:center;vertical-align:middle;'>";
	html[++h] = result.points;
	html[++h] = "</td><td style='text-align:center;vertical-align:middle;'>";
	html[++h] = "<button class='btn is_btn-custom' type='button' onclick='__common__openQuoteBuyForm("+result.company_id+");'>Buy</a>";
	html[++h] = "</td></tr>";
}
html[++h] = "</tbody>";
html[++h] = "</table>";
html[++h] = "<button id='travelQuoteResultsRecomputeLink' class='btn is_btn-custom' type='button' onclick='__travel__recomputeQuoteForm()'>Recompute</button>";
html[++h] = "&nbsp;&nbsp;"; 
html[++h] = "<button id='motorQuoteResultsCompareLink' class='btn is_btn-custom' type='button' onclick='__travel__policyCompare(true)'>Compare All Policies</button>";
window.$quoteResultsAccordionTable[0].innerHTML = html.join('');
}

function __travel__recomputeQuoteForm(){
	initialize();
}

