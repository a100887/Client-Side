
function toFarenheit() {
    
    var y = document.getElementById("deg").value;
    var x = document.getElementById("fh").value;
    
    console.log(y);
    console.log(x);
    
    if (y == "" && x == "") {
        
        alert("One field must be filled");
        document.getElementById("deg").value = "";
        document.getElementById("fh").value = "";
    }
    
    else if (y !="" && x !="") {
        alert("Error u have 2 fields");
        document.getElementById("deg").value = "";
        document.getElementById("fh").value = "";
    }
    
    else if (isNaN(y)) {
        alert("Only numeric inputs are accepted");
    }
    
    else {
        
        y = document.getElementById("deg").value * 9 / 5 + 32;
        document.getElementById("fh").value = Math.round(y);
    }
}

function toDegrees() {
    var y = document.getElementById("deg").value;
    var x = document.getElementById("fh").value;
    
    console.log(y);
    console.log(x);
    
    if (y == "" && x == "") {
        
        alert("One field must be field");
        document.getElementById("deg").value = "";
        document.getElementById("fh").value = "";
    }
    
     else if (isNaN(x)) {
        alert("Only numeric inputs are accepted");
    }
    
    else if (y !="" && x !="") {
        
        alert("Error u have 2 fields");
        document.getElementById("deg").value = "";
        document.getElementById("fh").value = "";
    }
    
    else {
        
        x = (document.getElementById("fh").value -32) * 5 / 9;
        document.getElementById("deg").value = Math.round(x);
    } 
}


var p1 = "99 bottles of beer on the wall, 99 bottles of beer.";
var p2 = "There are many people who are taking the bottles off the wall";
var p3 = "3.50 Eur is the price of each beer";
var p4 = "There ate 26 bottles left on the wall. These bottles are from 3 different types of brands.";

document.getElementById("s1").innerHTML += " " + p1;
document.getElementById("s2").innerHTML += " " + p2;
document.getElementById("s3").innerHTML += " " + p3;
document.getElementById("s4").innerHTML += " " + p4;

function convertP1() {
    document.getElementById("p1").innerHTML = parseInt(p1);
}

function convertP2() {
    document.getElementById("p2").innerHTML = parseInt(p2);
}

function convertP3() {
    document.getElementById("p3").innerHTML = parseInt(p3);
}

function convertP3F() {
    document.getElementById("p3").innerHTML = parseFloat(p3);
}

function convertP4() {
    document.getElementById("p4").innerHTML = parseInt(p4);
}

var name = prompt("Please enter your name");
var userId = parseInt(prompt("Please enter yor User ID"));

alert("Your User ID is " + userId + " and the type of data is "+ typeof(userId));

document.getElementById("msg").innerHTML = "Welcome to our page " + name + " (" + userId + ")";