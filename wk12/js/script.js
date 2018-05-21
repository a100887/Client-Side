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

function checkUsername() {
    
    if (this.value == "") {
        
        document.getElementById("errorMsg").style.color = "red";
        document.getElementById("errorMsg").style.display = "block";
        document.getElementById("errorMsg").innerHTML = "Please fill in your username";
    }
    
    else if (this.value.length < 5) {
        
        document.getElementById("errorMsg").style.color = "red";
        document.getElementById("errorMsg").style.display = "block";
        document.getElementById("errorMsg").innerHTML = "Your username needs to be made up of at least 5 characters!";
    }
}

function checkPassword() {
    
    if (this.value == "") {
        
        document.getElementById("errorPassMsg").style.color = "red";
        document.getElementById("errorPassMsg").style.display = "block";
        document.getElementById("errorPassMsg").innerHTML = "Please fill in your password";
    }
    
    else if (this.value.length < 6) {
        
        document.getElementById("errorPassMsg").style.color = "red";
        document.getElementById("errorPassMsg").style.display = "block";
        document.getElementById("errorPassMsg").innerHTML = "Your password needs to be made up of at least 6 characters!";
    }
    
    else if (!/[$*!£0-9]/.test(this.value)) {
        
        document.getElementById("errorPassMsg").style.color = "red";
        document.getElementById("errorPassMsg").style.display = "block";
        document.getElementById("errorPassMsg").innerHTML = "Your password needs to be made up of at least one special character or a digit!";
    }
}

function clearCredentials() {
    
    if (this.id == "username") {
        
        document.getElementById("errorMsg").style.display = "none";
        document.getElementById("errorMsg").innerHTML = "";
    }
    
    else {
        
        document.getElementById("errorPassMsg").style.display = "none";
        document.getElementById("errorPassMsg").innerHTML = "";
    }
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
username.addEventListener("blur", checkUsername);
password.addEventListener("blur", checkPassword);
username.addEventListener("focus", clearCredentials);
password.addEventListener("focus", clearCredentials);
conPass.addEventListener("blur", verifyPassword);