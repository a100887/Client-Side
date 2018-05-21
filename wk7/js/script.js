function changeDivColor(elDiv) {
    
    if (elDiv.id == "div1") {
        
        if (document.getElementById("div1").style.backgroundColor == "red") {
            
            document.getElementById("div1").style.backgroundColor = "blue";
        }
        
        else {
            document.getElementById("div1").style.backgroundColor = "red";
        }
    }
    
    if (elDiv.id == "div2") {
        
        if (document.getElementById("div2").style.backgroundColor == "red") {
            
            document.getElementById("div2").style.backgroundColor = "blue";
        }
        
        else {
            document.getElementById("div2").style.backgroundColor = "red";
        }
    }
}

function hideList() {
    document.getElementById("itemList").style.display = "none";
}

var i = 0;

function showHide() {
    
    if (document.getElementById("itemList").style.display == "none") {
        
        document.getElementById("itemList").style.display = "block";
        document.getElementById("btnTitle").innerHTML = "Hide";
    }
    else {
        document.getElementById("itemList").style.display = "none";
        document.getElementById("btnTitle").innerHTML = "Show";
    }
    
    document.getElementById("counter").innerHTML = ++i;
    
    if (i > 5 && i < 16) {
        document.getElementById("counterMsg").innerHTML = "You seem to like this button!";
    }
    
    if (i > 15) {
        document.getElementById("counterMsg").innerHTML = "Stop clicking me";
    }
}

//second part

var name = prompt("Please enter your name");

if (name == "") {
    alert("Hello valued customer");
}

else {
    alert("Hello " + name);
}

var userIn;

function regExpValid(text) {
    return (/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/.test(text));
}

function checkInput() {
    var getInput = document.getElementById("userIn").value;
    
    if(regExpValid(getInput)) {
        alert("Your passphrase contains valid characters");
    }
    
    else {
        alert("Your passphrase contains invalid characters");
    }
}

























