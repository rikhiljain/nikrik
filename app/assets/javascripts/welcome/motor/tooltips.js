function __motor__bindToolTips(){

	$("[id=basicDetails] [id=policyType]").tooltip({"title": "For newly purchased vehicle please select 'new' option else please select 'renew' option.", "placement":"right"});

	$("[id=basicDetails] > [id=registrationDetails] [id=city_icon]").tooltip({"html": true, "title": "<p>Please start typing the name of RTO city where your vehicle is registerted.</p><p>And then select the relevant city from the drop down list.</p>", "placement":"right"});
	$("[id=basicDetails] > [id=registrationDetails] [id=registerCity]").tooltip({"title": "Please start typing the name of RTO city and then select the relevant city from the drop down list.", "placement":"right"});


	$("[id=basicDetails] > [id=registrationDetails] [id=day_icon]").tooltip({"html":true, "title":"<p>Please refer to your vehicle's RC(registration certificate) to know the first purchase or registration date.</p><p>It will be available in your vehicle's RC book.</p>", "placement":"right"});
	$("[id=basicDetails] > [id=registrationDetails] [id=registerDate]").tooltip({"title":"Available in your vehicle's RC book.", "placement":"right"});

	$("[id=basicDetails] > [id=registrationDetails] [id=registrationType_icon]").tooltip({"html": true, "title":"<p>Please select 'Individual' in case vehicle is registered in the name of an Individual else please select 'Company'.</p>", "placement":"right"});
	
	$("[id=basicDetails] > [id=vehicleDetails] [id=make_icon]").tooltip({"title":"Please select the vehicle manufacturer and vehicle model", "placement":"right"});
	$("[id=basicDetails] > [id=vehicleDetails] [id=make]").tooltip({"title":"Please select the vehicle manufacturer", "placement":"right"});
	$("[id=basicDetails] > [id=vehicleDetails] [id=model]").tooltip({"title":"Please select the vehicle model", "placement":"right"});

	$("[id=basicDetails] > [id=vehicleDetails] [id=year_of_manufacture_icon]").tooltip({"title":"Please select the year in which the vehicle was manvehicle manufacturered.", "placement":"right"});
	$("[id=basicDetails] > [id=vehicleDetails] [id=year_of_manufacture]").tooltip({"title":"Please select the vehicle manufacturer year.", "placement":"right"});

	$("[id=basicDetails] > [id=vehicleDetails] [id=price_icon]").tooltip({"title":"please fill this", "placement":"right"});

	$("[id=previousPolicyDetails] [id=date]").tooltip({"title":"Available in your previous policy", "placement":"right"});

	$("[id=previousPolicyDetails] [id=ncb_icon]").tooltip({"title":"Available in your previous policy", "placement":"right"});

	$("[id=protectionForAccessories] [id=elecAccessories_icon]").tooltip({"title":"Provides cover for electrical accessories that are not factory fitted with the vehicle", "placement":"right"});
	$("[id=protectionForAccessories] [id=nonElecAccessories_icon]").tooltip({"title":"Provides cover for Non-electrical/Non-electronic equipments that are not factory fitted with the vehicle", "placement":"right"});
	$("[id=protectionForAccessories] [id=kit_icon]").tooltip({"title":"Provides cover for CNG/LPG kit that is not factory fitted with the vehicle", "placement":"right"});
	$("[id=protectionForAccessories] [id=kitPrice_icon]").tooltip({"title":"???", "placement":"right"});

	$("[id=additionalDiscount] [id=antiTheft_icon]").tooltip({"title":"Get a discount if you have installed an ARAI approved anti-theft device in your vehicle", "placement":"right"});
	$("[id=additionalDiscount] [id=automobileAssoc_icon]").tooltip({"title":"Get a discount if you are a memeber of any automobile association e.g. Western India Automobile Association", "placement":"right"});
}