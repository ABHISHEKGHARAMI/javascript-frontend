function calFunc(){
    let charge = document.getElementById('charge').value;
    let chargeInt = parseInt(charge);
    let outputDiv = document.getElementById('output');
    if(chargeInt< 40){
        chargeInt += 10;
        outputDiv.innerHTML = "The total cost of this cart is : "+ chargeInt;
    }else{
        outputDiv.innerHTML = "The total cost of this cart is :  "+ chargeInt;
    }
}