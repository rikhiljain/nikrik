function __motor__bindToolTips(){

	$("[id=basicDetails] > [id=registrationDetails] [id=city_icon]").attr("title","Please eneter first 3 letters of the RTO city");

	$("[id=basicDetails] > [id=registrationDetails] [id=day_icon]").attr("title","Available in your vehicle's RC book");
	$("[id=basicDetails] > [id=registrationDetails] [id=registrationType_icon]").attr("title","Select 'Individual' in case vehicle is registered in the name of an Individual");
	$("[id=basicDetails] > [id=vehicleDetails] [id=make_icon]").attr("title","Please select the vehicle manufacturer and vehicle model");
	$("[id=basicDetails] > [id=vehicleDetails] [id=price_icon]").attr("title","???");

	$("[id=previousPolicyDetails] [id=prevPolicyType_icon]").attr("title","Available in your previous policy");
	$("[id=previousPolicyDetails] [id=ncb_icon]").attr("title","Available in your previous policy");

	$("[id=protectionForAccessories] [id=elecAccessories_icon]").attr("title","Provides cover for electrical accessories that are not factory fitted with the vehicle");
	$("[id=protectionForAccessories] [id=nonElecAccessories_icon]").attr("title","Provides cover for Non-electrical/Non-electronic equipments that are not factory fitted with the vehicle");
	$("[id=protectionForAccessories] [id=kit_icon]").attr("title","Provides cover for CNG/LPG kit that is not factory fitted with the vehicle");
	$("[id=protectionForAccessories] [id=kitPrice_icon]").attr("title","???");

	$("[id=additionalDiscount] [id=antiTheft_icon]").attr("title","Get a discount if you have installed an ARAI approved anti-theft device in your vehicle");
	$("[id=additionalDiscount] [id=automobileAssoc_icon]").attr("title","Get a discount if you are a memeber of any automobile association e.g. Western India Automobile Association");
}