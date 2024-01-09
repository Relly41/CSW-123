




/* eslint-disable no-unused-vars */
var document;
function changeColor(){
    
                        document.getElementById('p3').style.color='rgb(155,10,220)';
                         document.getElementById('p2').style.color='rgb(155,10,220)';
                        
                    }
function changeColorToOriginal(){
   
                        document.getElementById('p2').style.color='black';
                        document.getElementById('p3').style.color='black';
                    }
function globalChange(){
   
                        document.getElementById('p2').style.backgroundColor='rgb(50,50,50)';
                        document.getElementById('p2').style.color='rgb(150,150,150)';
                        document.getElementById('p2').style.textShadow='2px 1px gold';
                        document.getElementById('p2').style.fontStyle='italic';
                        document.getElementById('p2').style.fontSize='25px';
                        document.getElementById('p2').style.padding='15px'
                    }

function sumNumbers(){
   // var x;
   // var y;
   // var z;
    var x,y,z;
    x = 10;
    y = 15;
    z = x + y;
    document.getElementById('p4').innerHTML=z;
    
}

function sumAnyNumbers(x,y,z){
    
    document.getElementById('p5').innerHTML=x+y+z;
}

 function retrieveParagraph( paragraph, id){
     document.getElementById(id).innerHTML=paragraph;
     
 }
function FahrenheitToCelsius(fahrenheit,id){
    var celsius;
    celsius=(fahrenheit-32)*5/9;
    document.getElementById(id).innerHTML=celsius;
}
function celsiusToFahrenHeit(celsius, id){
    var fahrenheit;
    fahrenheit=9*celsius/5 + 32
    document.getElementById(id).innerHTML=fahrenheit;
}
function multiplyNumbers( num1, num2){
    return num1 * num2;
    
}
 function displayMultiplicationResult(){
     document.getElementById('p7').innerHTML='The multiplication of 124 and 6743 is: '+multiplyNumbers( 124, 6743);
 }
 function getCircleArea(radius){
     var area;
     area= radius*radius*3.14;
     return area;
 }
function getCirclePerimeter(radius){
    var perimeter;
    perimeter= 2*radius*3.14;
    return perimeter;
}

function getRectangleArea(width, height){
    var area;
    area= width *height;
    return area;
}

function getRectanglePerimeter(width, height){
    var perimeter;
    perimeter= 2 *(width + height);
    return perimeter;
}

function displayRectangleAndCircle(){
    
    document.getElementById("p7").innerHTML=" the circle area and perimeter are "+ getCircleArea(95.5)+" " + getCirclePerimeter(95.5)+ " respectively. The rectangle area and perimeter are " + getRectangleArea(10, 10) + " ,"+ getRectanglePerimeter(10,10)+ "respectively";
    
}
 function getGeometricAreaAndPerimeter(radius, width, height){
      var cirlceArea, circlePerimeter, rectangleArea, rectanglePerimeter;
     
     cirlceArea= radius*radius*3.14;
     circlePerimeter= 2*radius*3.14;
     
     rectangleArea= width* height;
     rectanglePerimeter= 2 * (width + height);
     
    // return " the circle area and perimeter is "+ circleArea + " and "+ circlePerimeter+ " and the rectanle are and perimeter "+ rectangleArea + " and "+ rectanglePerimeter;
     document.getElementById("p7").innerHTML= " the circle area and perimeter is "+ cirlceArea + " and "+ circlePerimeter+ " and the rectanle are and perimeter "+ rectangleArea + " and "+ rectanglePerimeter;
     
 }


/* eslint-disable no-unused-vars */