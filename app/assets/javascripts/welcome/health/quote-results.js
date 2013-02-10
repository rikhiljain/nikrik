function __health__fillResultTable(data){
	//var a = '[{"company": 1,"total_premium": 110937.63745664,"discount": 0},{"company": 2,"total_premium": 110937.63745664,"discount": 0},{"company": 3,"total_premium": 10937.63745664,"discount": 0},{"company": 4,"total_premium": 110937.63745664,"discount": 0}]';
	//var a = '[{"company_id":1,"company_name":"ICICI","total_premium":"56,288","final_premium":"56,288","discount":"0"},{"company_id":2,"company_name":"BAJAJ","total_premium":"56,288","final_premium":"56,288","discount":"0"},{"company_id":3,"company_name":"TATA","total_premium":"56,288","final_premium":"56,288","discount":"0"},{"company_id":4,"company_name":"RELIANCE","total_premium":"56,288","final_premium":"56,288","discount":"0"}]';

//alert(data[0].company_name);
//var results = JSON.parse(a);
var results = data;
quotes = data;
var e = esc;
var html = [], h = -1;
html[++h] = "<table id='quoteHealthResultsTable' class='table table-bordered'>";
html[++h] = "<th>Company Name</th>";
html[++h] = "<th>Total Premium</th>";
html[++h] = "<th></th>";
html[++h] = "<tbody>";
for(var result, i = -1; result = results[++i];){
	html[++h] = "<tr><td>";
	html[++h] = result.company_id;
	html[++h] = "</td><td>";
	html[++h] = result.total_premium;
	html[++h] = "</td><td>";
	html[++h] = "<a class='_iSHandCursor' onclick='__common__openQuoteBuyForm("+result.company_id+");'>Buy</a>";
	html[++h] = "</td></tr>";
}
html[++h] = "</tbody>";
html[++h] = "</table>";
html[++h] = "<button id='healthQuoteResultsRecomputeLink' class='btn btn-link' type='button' onclick='__health__recomputeQuoteForm()'>Recompute</button>";
$("[id=healthResultsAccordion] [id=table]")[0].innerHTML = html.join('');
}

function __health__recomputeQuoteForm(){
		$healthQuoteForm.each (function(){
  			this.reset();
		});
		$healthFormAccordionLink.click();
}
