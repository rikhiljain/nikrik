function __health__fillResultTable(data){
	//var a = '[{"company": 1,"total_premium": 110937.63745664,"discount": 0},{"company": 2,"total_premium": 110937.63745664,"discount": 0},{"company": 3,"total_premium": 10937.63745664,"discount": 0},{"company": 4,"total_premium": 110937.63745664,"discount": 0}]';
	//var a = '[{"company_id":1,"company_name":"ICICI","total_premium":"56,288","final_premium":"56,288","discount":"0"},{"company_id":2,"company_name":"BAJAJ","total_premium":"56,288","final_premium":"56,288","discount":"0"},{"company_id":3,"company_name":"TATA","total_premium":"56,288","final_premium":"56,288","discount":"0"},{"company_id":4,"company_name":"RELIANCE","total_premium":"56,288","final_premium":"56,288","discount":"0"}]';

//alert(data[0].company_name);
//var results = JSON.parse(a);
var results = data;
window.quotes = data;
var e = esc;
var html = [], h = -1;
html[++h] = "<p><button id='healthQuoteResultsRecomputeLink' class='btn is_btn-custom' type='button' onclick='__health__recomputeQuoteForm()'>Recompute</button>";
html[++h] = "&nbsp;&nbsp;"; 
html[++h] = "<button id='motorQuoteResultsCompareLink' class='btn is_btn-custom' type='button' onclick='__health__policyCompare(true)'>Compare All Policies</button></p>";

html[++h] = "<table id='quoteHealthResultsTable' class='table table-striped'>";
html[++h] = "<thead><tr><th style='text-align:center;vertical-align:middle;'>Company</th>";
html[++h] = "<th style='text-align:center;vertical-align:middle;'>Plan</th>";
html[++h] = "<th><button id='motorQuoteResultsCompareLink' class='btn is_btn-custom' type='button' onclick='__health__policyCompare(false)'>Compare</button></th>";
html[++h] = "<th style='text-align:center;vertical-align:middle;'>Final Premium</th>";
html[++h] = "<th style='text-align:center;vertical-align:middle;'>Reward Points</th>";
html[++h] = "<th style='text-align:center;vertical-align:middle;'></th></tr></thead>";
html[++h] = "<tbody>";
for(var result, i = -1; result = results[++i];){
	html[++h] = "<tr><td style='text-align:center;vertical-align:middle;'>";
	html[++h] = "<img src='/assets/company/logo/logo_" + result.company_id + ".png' data-toggle='tooltip' title='"+result.company_name+"' data-placement='right'/>";
	html[++h] = "</td><td style='text-align:center;vertical-align:middle;'>";
	html[++h] = result.plan;
	html[++h] = "</td><td style='text-align:center;vertical-align:middle;' >";
	html[++h] = "<input id='compare' type='checkbox' value='true' </input>";
	html[++h] = "</td><td style='text-align:center;vertical-align:middle;'>";
	html[++h] = "<span class='rupee'>` "+result.final_premium+"</span>";
	html[++h] = "</td><td style='text-align:center;vertical-align:middle;'>";
	html[++h] = result.points;
	html[++h] = "</td><td style='text-align:center;vertical-align:middle;'>";
	html[++h] = "<button class='btn is_btn-custom' type='button' onclick='__common__openQuoteBuyForm("+result.company_id+");'>Buy</a>";
	html[++h] = "</td></tr>";
}
html[++h] = "</tbody>";
html[++h] = "</table>";
html[++h] = "<button id='healthQuoteResultsRecomputeLink' class='btn is_btn-custom' type='button' onclick='__health__recomputeQuoteForm()'>Recompute</button>";
html[++h] = "&nbsp;&nbsp;"; 
html[++h] = "<button id='motorQuoteResultsCompareLink' class='btn is_btn-custom' type='button' onclick='__health__policyCompare(true)'>Compare All Policies</button>";
window.$quoteResultsAccordionTable[0].innerHTML = html.join('');
$("[id=quoteHealthResultsTable] img").tooltip();
}

function __health__recomputeQuoteForm(){
	__insurance__accordion__initialize("recompute");
}

