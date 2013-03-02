function __motor__bindToolTips(){

	$("[id=basicDetails] > [id=registrationDetails] [id=city_icon]").tooltip({"title": "Please eneter first 3 letters of the RTO city", "placement":"right"});


	$("[id=basicDetails] > [id=registrationDetails] [id=day_icon]").tooltip({"title":"Available in your vehicle's RC book", "placement":"right"});
	$("[id=basicDetails] > [id=registrationDetails] [id=registrationType_icon]").tooltip({"title":"Select 'Individual' in case vehicle is registered in the name of an Individual", "placement":"right"});
	$("[id=basicDetails] > [id=vehicleDetails] [id=make_icon]").tooltip({"title":"Please select the vehicle manufacturer and vehicle model", "placement":"right"});
	$("[id=basicDetails] > [id=vehicleDetails] [id=price_icon]").tooltip({"title":"???", "placement":"right"});

	$("[id=previousPolicyDetails] [id=prevPolicyType_icon]").tooltip({"title":"Available in your previous policy", "placement":"right"});
	$("[id=previousPolicyDetails] [id=ncb_icon]").tooltip({"title":"Available in your previous policy", "placement":"right"});

	$("[id=protectionForAccessories] [id=elecAccessories_icon]").tooltip({"title":"Provides cover for electrical accessories that are not factory fitted with the vehicle", "placement":"right"});
	$("[id=protectionForAccessories] [id=nonElecAccessories_icon]").tooltip({"title":"Provides cover for Non-electrical/Non-electronic equipments that are not factory fitted with the vehicle", "placement":"right"});
	$("[id=protectionForAccessories] [id=kit_icon]").tooltip({"title":"Provides cover for CNG/LPG kit that is not factory fitted with the vehicle", "placement":"right"});
	$("[id=protectionForAccessories] [id=kitPrice_icon]").tooltip({"title":"???", "placement":"right"});

	$("[id=additionalDiscount] [id=antiTheft_icon]").tooltip({"title":"Get a discount if you have installed an ARAI approved anti-theft device in your vehicle", "placement":"right"});
	$("[id=additionalDiscount] [id=automobileAssoc_icon]").tooltip({"title":"Get a discount if you are a memeber of any automobile association e.g. Western India Automobile Association", "placement":"right"});
}