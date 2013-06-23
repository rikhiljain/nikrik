//think about the scope of the function.
//All the functions are public now.
//Can we make them private by using closure
var HealthQuoteResult = (function($){

	var that = {};

	var allQuotes;
	var lastClickedQuote;
	var lastClickedCompanyId;
	var premiumBreakUpHtml;

	that.fillResults = function(data){
		allQuotes = data;
		//pretty bad code, remove this
		quotes = allQuotes;
		var e = esc;
		var html = [], h = -1;
		html[++h] = "<p><button id='healthQuoteResultsRecomputeLink' class='btn is_btn-custom' type='button' onclick='HealthQuoteResult.recomputeQuote()'>Recompute</button>";
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
		for(var result, i = -1; result = data[++i];){
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
			if(User.isAdmin() || User.isOperator()){
				html[++h] = "<button class='btn is_btn-custom' type='button' onclick='HealthQuoteResult.makeSelection("+result.company_id+");QuoteBuy.openForm();'>Send Quote</a>";
			}
			else {
				html[++h] = "<button class='btn is_btn-custom' type='button' onclick='HealthQuoteResult.makeSelection("+result.company_id+");QuoteBuy.openForm();'>Buy</a>";
			}
			html[++h] = "</td></tr>";
		}
		html[++h] = "</tbody>";
		html[++h] = "</table>";
		html[++h] = "<button id='healthQuoteResultsRecomputeLink' class='btn is_btn-custom' type='button' onclick=HealthQuoteResult.recomputeQuote()'>Recompute</button>";
		html[++h] = "&nbsp;&nbsp;"; 
		html[++h] = "<button id='motorQuoteResultsCompareLink' class='btn is_btn-custom' type='button' onclick='__health__policyCompare(true)'>Compare All Policies</button>";
		window.$quoteResultsAccordionTable[0].innerHTML = html.join('');
		$("[id=quoteHealthResultsTable] img").tooltip();
	};

	that.makeSelection = function(id){
		for(var result, i = -1; result = allQuotes[++i];){
			if (result.company_id == id)
			{
				lastClickedQuote = result;
				lastClickedCompanyId = id;
				break;
			}
		}		
	};


	that.getPremiumBreakUp = function(options){
		var modal = options.modal;
		modal = false;
		var html = [], h = -1;
		if(!modal){
			html[++h] = "<h3>Health Insurance Premium for - " + lastClickedQuote.company_name + "</h3>";
			html[++h] = "<div>";
		}

	    html[++h] = "<table id='quoteHealthResultsTable' class='table'";
	    html[++h] = "<thead><tr><th style='text-align:center;vertical-align:middle;'>Company</th>";
	    if( lastClickedQuote.plan != null)
	      html[++h] = "<th style='text-align:center;vertical-align:middle;'>Plan</th>";

	    html[++h] = "<th style='text-align:center;vertical-align:middle;'>Final Premium</th>";
	    html[++h] = "<th style='text-align:center;vertical-align:middle;'>Reward Points</th>";
	    html[++h] = "</tr></thead>";
	    html[++h] = "<tbody>";
	    html[++h] = "<tr><td style='text-align:center;vertical-align:middle;'>";
	    html[++h] = "<img src='/assets/company/logo/logo_" + lastClickedQuote.company_id + ".png' style='height: 50px;width: 150px'/></td>";
	    if( lastClickedQuote.plan != null)
	    {
	      html[++h] = "<td style='text-align:center;vertical-align:middle;'>";
	      html[++h] = lastClickedQuote.plan;
	      html[++h] = "</td>";
	    }
	    html[++h] = "<td style='text-align:center;vertical-align:middle;' ><span class='rupee'>` "+lastClickedQuote.final_premium+"</span>";
	    html[++h] = "</td><td style='text-align:center;vertical-align:middle;'>";
	    html[++h] = lastClickedQuote.points;
	    html[++h] = "</td></tr>";
	    html[++h] = "</tbody>";
	    html[++h] = "</table>";

		if(!modal){
			html[++h] = "</div>";
			return html.join('');
		}
		else{		
			throw {desc: "This operation is not supported."}
		}
	};

	that.recomputeQuote = function(){
		__insurance__accordion__initialize("recompute");
	};

	that.getLastClickedQuote = function(){
		return lastClickedQuote;
	};

	that.getAllQuotes = function(){
		return allQuotes;
	};

	that.getLastClickedCompanyId = function(){
		return getLastClickedCompanyId;
	}

	return that;

})(jQuery);
