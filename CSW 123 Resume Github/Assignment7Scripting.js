var document;
function getMonthlyPayment() {
    var loanAmount, monthlyInterest, numOfYears, t;
    
    loanAmount = 367500;
    monthlyInterest = 5.25/12;
    numOfYears = 30;
    
    t = (loanAmount/monthlyInterest) / (1-(1/(1+monthlyInterest)^(numOfYears*12)))
    
    document.getElementById("p1").innerHTML="The monthly payment is " + t;
}

function getTotalPayment() {
    var loanAmount, monthlyInterest, numOfYears, mp, t;
    
    loanAmount = 367500;
    monthlyInterest = 5.25/12;
    numOfYears = 30;
    
    mp = (loanAmount/monthlyInterest) / (1-(1/(1+monthlyInterest)^(numOfYears*12)))
    
    t = mp*numOfYears*12
    
    document.getElementById("p1").innerHTML="The total payment is " + t;
    
}

function displayMonthlyAndTotalPayment() {
    
    var loanAmount, monthlyInterest, numOfYears, mp, t;
    
    loanAmount = 367500;
    monthlyInterest = 5.25/12;
    numOfYears = 30;
    
    mp = (loanAmount/monthlyInterest) / (1-(1/(1+monthlyInterest)^(numOfYears*12)))
    
    t = mp*numOfYears*12
    
    document.getElementById("p2").innerHTML= "The monthly payment is " + 
    mp + " and the total payment is " + t;
}