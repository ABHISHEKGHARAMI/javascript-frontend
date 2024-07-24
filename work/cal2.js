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


// changing the subscribe and unsubscribe button
function myFunc(){
    let button = document.getElementById('subscribe-button');
    if(button.textContent.toLowerCase()==='subscribe'){
        button.textContent = "subscribed";
        button.classList.remove('subscribe');
        button.classList.add('subscribed');
    }else{
        button.textContent = "subscribe";
        button.classList.remove('subscribed');
        button.classList.add('subscribe');
    }
}