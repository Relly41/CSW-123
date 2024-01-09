var document;
function output() {
    var fName, lName, gender, cName, date, time;
    
    fName = document.getElementById("fName");
    lName = document.getElementById("lName");
    gender = document.getElementById("gender");
    cName = document.getElementById("courseName");
    date = document.getElementById("date");
    time = document.getElementById("time");
    document.getElementById("p1").innerHTML="Here is your information you entered:   Your first name:" + fName +
        "   Your last name: " + lName + "   Course Name: " + cName + "  Your gender: " + gender + "   Date: " + date +
        "   Time: " + time;
}

function calculate(height, width) {
    var perimeter, area;
    perimeter = 2 * (width + height);
    area = height * width;
    document.getElementById("pOutput").innerHTML=perimeter;
    document.getElementById("aOutput").innerHTML=area;
}