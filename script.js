var wrapperEle =document.body.querySelector(".wrapper");
var headOneEle =document.body.querySelector(".headOne");
var headTwoEle =document.body.querySelector(".headTwo");
var headThreeEle =document.body.querySelector(".headThree");
var headFourEle =document.body.querySelector(".headFour");
var buttonEle =document.body.querySelector(".repeatProcess");


function whack() {
  var yearMiles = Number(prompt("How many miles do you drive in a year?"));
  var galPrice = Number(prompt("Price for a gallon of gas?"));
  miles = yearMiles;
  price = galPrice;
  var mpg = 12;
  writerFunction(yearMiles,galPrice,mpg);
  var mpg2 = 17;
  writerFunction(yearMiles,galPrice,mpg);
  var mpg3 = 26;
  writerFunction(yearMiles,galPrice,mpg);
  var mpg4 = 29;
  writerFunction(yearMiles,galPrice,mpg);
}

function writerFunction(miles,price,mpg) {
  headOneEle.innerHTML="To drive a car that gets 12 mpg for "+miles+" at "+price+" per gallon will cost you "+(miles/mpg)*price;
  headTwoEle.innerHTML="To drive a car that gets 17 mpg for" +miles+" at "+price+" per gallon will cost you "+(miles/mpg2)*price;
  headThreeEle.innerHTML="To drive a car that gets 26 mpg for" +miles+" at "+price+" per gallon will cost you "+(miles/mpg3)*price;
  headFourEle.innerHTML="To drive a car that gets 29 mpg for" +miles+" at "+price+" per gallon will cost you "+(miles/mpg4)*price;
  
}

buttonEle.addEventListener("click", function(){
  whack();
})