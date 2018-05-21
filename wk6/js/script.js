var num1 = parseInt(prompt("Enter num1: "));
var num2 = parseInt(prompt("Enter num2: "));
var userIn = prompt("Enter a fractional number");
var sentence = "Many of life's failures are people who did not relize how close they were to success when they gave up";

document.getElementById("string").innerHTML += sentence; 

console.log(typeof(num1));

function addition() {
    var result = num1 + num2;
    document.getElementById("addAns").innerHTML = result;
}

function subtract() {
    document.getElementById("subAns").innerHTML = (num1 - num2);
}

function multiplication() {
    document.getElementById("mulAns").innerHTML = (num1 * num2);
}

function division() {
    document.getElementById("divAns").innerHTML = Math.round((num1 / num2) * 100) / 100;
}

function pow() {
    var result = Math.pow(num1, num2);
    document.getElementById("pwrAns").innerHTML = result;
}

function mod() {
   
    document.getElementById("modAns").innerHTML = (num1 % num2);
}


function area() {
   
    document.getElementById("areaAns").innerHTML = (num1 * num2);
}


function perimeter() {
   
    document.getElementById("sqrAns").innerHTML = (num1 + num2) * 2;
}

function findIndex(word) {
    var indexPos = sentence.indexOf(word);
    document.getElementById("indexOfAns").innerHTML = "Substring position: " + indexPos;
}

function getWord() {
    var searchWord = document.getElementById("stringIn").value;
    
    findIndex(searchWord);
    
}

var wholeDateDetails = "";

var dateTime = new Date();
var getYear = dateTime.getFullYear();
var getMonth = dateTime.getMonth();
var getDay = dateTime.getDate();
var timeNow = dateTime.getTime();

    var dateNowFormat1 = new Date().toLocaleString();
    var dateNowFormat2 = new Date().toLocaleDateString();
    var timeNowFormat1 = new Date().toLocaleTimeString();
    var timeNowFormat2 = new Date().toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric"});
    
    wholeDateDetails += "<br><br>Date Format 1: " + dateNowFormat1;
    
    wholeDateDetails += "<br><br>Date Format 2: " + dateNowFormat2;
    
    wholeDateDetails += "<br><br>Time Format 1: " + timeNowFormat1;
    
    wholeDateDetails += "<br><br>Time Format 2: " + timeNowFormat2;

document.getElementById("date").innerHTML = "Day: " + getDay + " Month: " + (getMonth + 1) + " Year: " + getYear + "<br><br>" + wholeDateDetails;


document.getElementById("int").innerHTML = parseInt(userIn);
document.getElementById("ceil").innerHTML = Math.ceil(userIn);
document.getElementById("floor").innerHTML = Math.floor(userIn);
document.getElementById("round").innerHTML = Math.round(userIn);
