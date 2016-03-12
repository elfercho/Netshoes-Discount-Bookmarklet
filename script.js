javascript:(function(){
	var precio = document.getElementsByClassName('new-price');
	var cuotas = document.getElementsByClassName('parcel-price');
	for(var i=0; i<precio.length; i++){
		var price = precio[i].innerHTML.slice(1);
		var newPrice = price.replace('.','').replace(',','.');
		newPrice = (newPrice*0.68).toFixed(2);
		var total = "$"+newPrice;
		var cuotasFinal = (newPrice/3).toFixed(2);
		precio[i].innerHTML = total;
		cuotas[i].innerHTML = "o 3 cuotas de $"+cuotasFinal;
	}
})();