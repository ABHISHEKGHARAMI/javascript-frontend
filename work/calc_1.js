function myDateFunc(){
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    console.log(name);
    console.log(dob);
    
    let age = calculateDate(new Date(dob));

    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML="<p>Your submitted details are as follows : </p>"+
                        "<p>hello there ! </p>"+ name +
                        "<p>Your age is : </p>" + age;
    
}

function calculateDate(dob){
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    let monthDiff = today.getMonth() - dob.getMonth();
    let dayDiff = today.getDay() - dob.getDay();

    if(monthDiff < 0 || monthDiff === 0 && dayDiff < 0){
        age --;
    }
    return age;
}