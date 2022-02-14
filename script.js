// JavaScript Document

// (function() {
// "use strict";

// var state = document.getElementById("id_state");

document.addEventListener('DOMContentLoaded', function(){

 	document.getElementById('cart_custom').addEventListener('submit', estimateTotal);

	var v_btn_estimate = document.getElementById('btn_estimate');

	// v_btn_estimate.disabled = true;

	// state.addEventListener('change', function(){

	// 	if(state.value === ''){
	// 		v_btn_estimate.disabled = true;
	// 		console.log("True");
	// 	}
	// 	else{
	// 		v_btn_estimate.disabled = false;
	// 		console.log("False");
	// 	}

	// });

});



function estimateTotal(event) {
	event.preventDefault();
	
	// if( state.value === ''){
	// 	alert('Please select the state you want to send your shipment');
	// 	state.focus();
	// }

	var bs0 = parseInt(document.getElementById("bs0").value, 10 )|| 0;
	var bs1 = parseInt(document.getElementById("bs1").value, 10 )|| 0;
	var cer = 180;
	
	// console.log(water);

	// var state_index = state.value;

	var shipping = document.querySelector('input[name=ship]:checked'); 
	// .value || '';
	var support = document.querySelector('input[name=sup]:checked')
	// .value || '';

	if (shipping === null) {
		shipping = '';
	}
	else {
		shipping = shipping.value;
	}

	if (support === null) {
		support = '';
	}
	else {
		support = support.value;
	}

	// var special_gift = document.getElementById("gift").checked;
	// var special_mailing = document.getElementById("mailing").checked;
	// var special_recipes = document.getElementById("recipes").checked;

	// var t_message = document.getElementById("message").value;
	
	// var shippingCostPer,
	// 	totalShippingCost, 
	// 	taxFactor = 1,
	// 	totalItemPrice, 
	// 	estimate;
	
	// var t_quantity = cer + bs0 + bs1 + bs2 + bs3;
	var totalItemPrice = cer + (bs0 * 10 ) + (bs1 * 30);

	// if (state.value === 'CA'){
	// 	taxFactor = 1.075;
	// }
	// else if(state.value ==='WA'){
	// 	taxFactor = 1.065;	
	// }

	switch(shipping){
		// case 'us':
		// 	shippingCostPer = 1.5 + 15; 
		// 	break;
		case 'fedex':
			shippingCostPer = 110 + 15;	
			break;
		case 'fedex2':
			shippingCostPer = 220 + 30;	
			break;
		default :
			shippingCostPer = 0;
			break;
	}

	var supportFixAd = 0;

	switch(support){
		case 'supmin':
			supportCostPer = 2;
			supportFixAd = 0;
			break;
		case 'supmax':
			supportCostPer = 2;
			supportFixAd = 14600;	
			break;
		default :
			supportCostPer = 1;
			break;
	}

	var totalShippingCost = shippingCostPer;
	
	// var estimate = '$' + ((totalItemPrice + totalShippingCost) * supportCostPer + supportFixAd).toFixed(2);
	var estimaterub = ((totalItemPrice + totalShippingCost) * supportCostPer * 85 + supportFixAd).toFixed(0) + ' ₽';
	
	if (shipping == 0) {
		document.getElementById('total_estimate').value= 'введите больше информации';
	}
		document.getElementById('total_estimate').value=estimaterub;
		// document.getElementById('total_estimate').value=estimate + ' = ' + estimaterub;

	// var result_html = document.getElementById('results');

	// result_html.innerHTML +='Итого: $' + totalShippingCost.toFixed(2) + '<br>';	

};
// })();