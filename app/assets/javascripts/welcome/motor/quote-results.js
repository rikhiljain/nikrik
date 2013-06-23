//think about the scope of the function.
//All the functions are public now.
//Can we make them private by using closure
var MotorQuoteResult = (function($){

	var that = {};

	var $premiumBreakUPModal;
	var $premiumBreakUPModalLabel;
	var $premiumBreakUPModalTable;

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
		html[++h] = "<p><button id='motorQuoteResultsRecomputeLink' class='btn is_btn-custom' type='button' onclick='MotorQuoteResult.recomputeQuote()'>Recompute</button>";
		html[++h] = "&nbsp;&nbsp;"; 
		html[++h] = "<button id='motorQuoteResultsCompareLink' class='btn is_btn-custom' type='button' onclick='__motor__policyCompare( true)'>Compare All Policies</button></p>";
		html[++h] = "<table id='quoteResultsTable' class='table table-striped'>";
		html[++h] = "<thead><tr><th style='text-align:center;vertical-align:middle;' >Company Name</th>";
		html[++h] = "<th><button id='motorQuoteResultsCompareLink' class='btn is_btn-custom' type='button' onclick='__motor__policyCompare(false)'>Compare</button></th>";
		html[++h] = "<th style='text-align:center;vertical-align:middle;'>Final Premium</th>";
		html[++h] = "<th style='text-align:center;vertical-align:middle;'>Reward Points</th>";
		html[++h] = "<th style='text-align:center;vertical-align:middle;'>Details</th>";
		html[++h] = "<th></th>";
		html[++h] = "</tr></thead><tbody>";
		for(var result, i = -1; result = allQuotes[++i];){
			html[++h] = "<tr><td style='text-align:center;vertical-align:middle;'>";
			html[++h] = "<img src='/assets/company/logo/logo_" + result.company_id + ".png' />";
			html[++h] = "</td><td style='text-align:center;vertical-align:middle;'>";
			html[++h] = "<input id='compare' type='checkbox' value='true' </input>";
			html[++h] = "</td><td style='text-align:center;vertical-align:middle;'>";
			html[++h] = "<span class='rupee'>` "+result.final_premium+"</span>";
			html[++h] = "</td><td style='text-align:center;vertical-align:middle;'>";
			html[++h] = result.points;
			html[++h] = "</td><td style='text-align:center;vertical-align:middle;'>";
			html[++h] = "<a class='is_hand-cursor' onclick='MotorQuoteResult.makeSelection("+result.company_id+");MotorQuoteResult.displayPremiumBreakupModal();' >Premium Break-up</a>";
			html[++h] = "</td><td style='text-align:center;vertical-align:middle;'>";
			if(User.isAdmin() || User.isOperator()){
				html[++h] = "<button class='btn is_btn-custom' type='button' onclick='MotorQuoteResult.makeSelection("+result.company_id+");QuoteBuy.openForm();'>Quote</a>";
			}
			else{
				html[++h] = "<button class='btn is_btn-custom' type='button' onclick='MotorQuoteResult.makeSelection("+result.company_id+");QuoteBuy.openForm();'>Buy</a>";
			}
			html[++h] = "</td></tr>";
		}
		html[++h] = "</tbody>";
		html[++h] = "</table>";
		html[++h] = "<button id='motorQuoteResultsRecomputeLink' class='btn is_btn-custom' type='button' onclick='MotorQuoteResult.recomputeQuote()'>Recompute</button>";
		html[++h] = "&nbsp;&nbsp;"; 
		html[++h] = "<button id='motorQuoteResultsCompareLink' class='btn is_btn-custom' type='button' onclick='__motor__policyCompare(true)'>Compare All Policies</button>";
		window.$quoteResultsAccordionTable[0].innerHTML = html.join('');
	};

	that.makeSelection = function(id){
		$premiumBreakUPModal = $("[id=motor_breakup_model]");
		$premiumBreakUPModalTable = $("[id=motor_breakup_model] [id=breakup_table]")[0];
		$premiumBreakUPModalLabel = $("[id=motor_breakup_model] [id=myModalLabel]")[0];
		for(var result, i = -1; result = allQuotes[++i];){
			if (result.company_id == id)
			{
				lastClickedQuote = result;
				lastClickedCompanyId = id;
				break;
			}
		}		
	};

	that.displayPremiumBreakupModal = function(){
		that.getPremiumBreakUp({"modal": true}).modal();
		return false;
	};

	that.getPremiumBreakUp = function(options){
		var modal = options.modal;
		var html = [], h = -1;
		if(!modal){
			html[++h] = "<h3>Car Insurance Premium Break-Up for - " + lastClickedQuote.company_name + "</h3>";
			html[++h] = "<div>";
		}

		html[++h] = "<p class='text-success'><strong>Insured declared Value (IDV) = "
		html[++h] = lastClickedQuote.idv_value
		html[++h] = "</strong></p>"
		html[++h] = "<table class='table table-bordered table-striped'>";
		html[++h] = "<tbody>";
		html[++h] = "<tr style='background-color:#ffc40d;font-weight:bold;' class='info'><td colspan='2'>Own Damage</td>";
		html[++h] = "<td colspan='2'>Liability</td></tr>";

		html[++h] = "<tr><td>Basic Premium</td><td>";
		html[++h] = lastClickedQuote.base_od;
		html[++h] = "</td><td>Basic Premium</td><td>";
		html[++h] =	lastClickedQuote.base_tp;
		html[++h] = "</td></tr><tr><td>Bi-fuel Kit premium</td><td>";
		html[++h] = lastClickedQuote.bi_fuel_od;	
		html[++h] = "</td><td>Liability for Bi-fuel Kit</td><td>";
		html[++h] = lastClickedQuote.bi_fuel_tp;	
		html[++h] = "</td></tr>";

		html[++h] = "<tr><td>Electrical Accessories Premium</td><td>";
		html[++h] = lastClickedQuote.elec_acc;
		html[++h] = "</td><td>PA for Unnamed Passenger</td><td>";
		html[++h] =	lastClickedQuote.passenger_pa;
		html[++h] = "</td></tr><tr><td>Non-electrical Accessories Premium</td><td>";
		html[++h] = lastClickedQuote.non_elec_acc;	
		html[++h] = "</td><td>Legal Liability To Paid Driver</td><td>";
		html[++h] = lastClickedQuote.pad_driver;	
		html[++h] = "</td></tr>";


		html[++h] = "<tr><td>Geographic Extension Premium</td><td>";
		html[++h] = "0";
		html[++h] = "</td><td>Compulsory PA Cover for Owner Driver</td><td>";
		html[++h] =	lastClickedQuote.owner_pa;
		html[++h] = "</td></tr><tr><td>Fiber Glass Tank Premium</td><td>";
		html[++h] =  "0";	
		html[++h] = "</td><td> 	Legal Liability to Paid Employee </td><td>";
		html[++h] = "0";	
		html[++h] = "</td></tr>";

		html[++h] = "<tr style='font-weight:bold;' class='success'><td>Sub Total (A)</td><td>";
		html[++h] = lastClickedQuote.net_od;
		html[++h] = "</td><td>Total (B)</td><td>";
		html[++h] =	lastClickedQuote.final_tp;
		html[++h] = "</td></tr>";

		html[++h] = "<tr><td>Anti-theft Discount</td><td>";
		html[++h] = lastClickedQuote.anti_theft_dis;
		html[++h] = "</td><td colspan='2'></td></tr>";

		html[++h] = "<tr><td>Automobile Membership Discount</td><td>";
		html[++h] = lastClickedQuote.aai_dis;
		html[++h] = "</td><td colspan='2'></td></tr>";

		html[++h] = "<tr><td>Deduct NCB</td><td>";
		html[++h] = lastClickedQuote.ncb_dis;
		html[++h] = "</td><td colspan='2'></td></tr>";

		html[++h] = "<tr style='font-weight:bold;' class='success'><td>Total Discount (C)</td><td>";
		html[++h] = lastClickedQuote.net_dis ;
		html[++h] = "</td><td colspan='2'></td></tr>";

		html[++h] = "<tr style='font-weight:bold;' class='success'><td>Total Own Damage Premium (D = A - C)</td><td>";
		html[++h] = lastClickedQuote.final_od;
		html[++h] = "</td><td colspan='2'></td></tr>";


		html[++h] = "<tr style='font-weight:bold;' class='success'><td>Total Premium (E = D + B)</td><td>";
		html[++h] = lastClickedQuote.total_premium ;
		html[++h] = "</td><td colspan='2'></td></tr>";

		html[++h] = "<tr style='font-weight:bold;' class='success'><td>Service Tax (F)</td><td>";
		html[++h] = lastClickedQuote.service_tax;
		html[++h] = "</td><td colspan='2'></td></tr>";

		html[++h] = "<tr style='font-weight:bold;' class='success'><td>Total Premium Payable (E+F)</td><td>";
		html[++h] = lastClickedQuote.final_premium;
		html[++h] = "</td><td colspan='2'></td></tr>";

		html[++h] = "</tbody>";
		html[++h] = "</table>";

		if(!modal){
			html[++h] = "</div>";
			return html.join('');
		}
		else{		
			$premiumBreakUPModalTable.innerHTML = html.join('');
			$premiumBreakUPModalLabel.innerHTML = "Car Insurance Premium Break-Up for - " + lastClickedQuote.company_name;
			return $premiumBreakUPModal;
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
