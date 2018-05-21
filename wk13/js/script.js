var el = document.getElementById("in1");
var el2 = document.getElementById("in2");
var el3 = document.getElementById("in3");
var el4 = document.getElementById("in4");
var username = document.getElementById("username");
var password = document.getElementById("password");
var conPass = document.getElementById("conPass");

function onClick() {
    
    if (this.id == "in1") {
        alert("Click Event");
    }
    
    else if (this.id == "in4") {
        
        alert("Similar to click event");
    }
}

function specCharDig (elem) {
    
    console.log("hello");
    console.log(elem.value);
    
    var errorMsg = document.getElementById("errorPassMsg");
    
    if (!/[$&*!0-9]/.test(elem.value)) {
        console.log("in");
        errorMsg.style.display = "block";
        errorMsg.style.color = "red";
        errorMsg.innerHTML = "Your " + elem.id + " needs to be made up of atleast one special character or digit";
    }
}

function onHover() {
    
    if(this.id == "in1") {
        this.style.color = "pink";
        this.value = "mouse is moving";
    }
    
    else if (this.id == "in2") {
        
        this.style.color = "blue";
        this.value = "mouse is over the text box!";
    }
    
    else if (this.id == "in3") {
        this.value = "this is focused";
    }
}

function onHoverOut() {
    
    this.value = "";
    this.style.color = "black";
}

function checkInput(minLength, elId, elem) {
    
    var error = false;
    var elemId = document.getElementById(elId);
    
    if (elem.value == "") {
        
        error = true;
        elemId.style.color = "red";
        elemId.style.display = "block";
        elemId.innerHTML = "Please fill in your " + elem.id;
    }
    
    else if (elem.value.length < minLength) {
        
        error = true;
        elemId.style.color = "red";
        elemId.style.display = "block";
        elemId.innerHTML =  "Your " + elem.id + " needs to be made up of at least " + minLength + " characters!";
    }
    
    return error;
}

function clearCredentials(elId) {
        
    document.getElementById(elId).style.display = "none";
    document.getElementById(elId).innerHTML = "";
}

function verifyPassword() {
    
    var password = document.getElementById("password").value;
    
    if (this.value != password) {
        
        document.getElementById("conPassError").style.color = "red";
        document.getElementById("conPassError").innerHTML = "Your password does not match";
    }
}

document.getElementById("errorMsg").style.display = "none";
document.getElementById("errorPassMsg").style.display = "none";

el.addEventListener("click", onClick);
el.addEventListener("mouseover", onHover);
el2.addEventListener("mouseenter", onHover);
el.addEventListener("mouseout", onHoverOut);
el2.addEventListener("mouseout", onHoverOut);
el3.addEventListener("focus", onHover);
el3.addEventListener("blur", onHoverOut);
el4.addEventListener("mousedown", onClick);

username.addEventListener("blur", function() {checkInput(5, "errorMsg", this)});

password.addEventListener("blur", function() {if(!checkInput(6, "errorPassMsg", this)){specCharDig(this)}});

username.addEventListener("focus", function() {clearCredentials("errorMsg")});
password.addEventListener("focus", function() {clearCredentials("errorPassMsg")});

conPass.addEventListener("blur", verifyPassword);