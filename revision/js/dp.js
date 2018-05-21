var elName = document.getElementById("in1");
var locality = document.getElementById("in2");
var phone= document.getElementById("in3");

function checkInputs(elId, elem) {
    
    var locations = ["Birgu", "Bormla", "Isla"];
    
    var id = document.getElementById(elId);
    
    if (elem.id == "in1" && elem.value.length < 3) {
        
        id.style.color = "red";
        id.innerHTML = "There should be a minimum of 3 characters";
    }
    
    else if (elem.id == "in2") {
        
        if (elem.value != "") {
            
            check = false;
        
            for (var i = 0; i < locations.length; i++) {

                if (elem.value == locations[i]) {
                    check = true;
                    break;
                }
            }

            if (!check) {
                id.style.color = "red";
                id.innerHTML = "The locality does not exist";
            }
        }
        
        else {
            id.style.color = "red";
            id.innerHTML = "Must not be empty"
        }
    }
    
    else {
        
        if (elem.value == "") {
            
            id.style.color = "red";
            id.innerHTML = "Must not be empty";
        }
        
        else {
            
            if (elem.value.length != 8) {
                
                id.style.color = "red";
                id.innerHTML = "Must be 8 characters";
            }
        }
    }
}

elName.addEventListener("blur", function() {checkInputs("errorName", this)});
locality.addEventListener("blur", function() {checkInputs("errorLocality", this)});
phone.addEventListener("blur", function() {checkInputs("errorPhone", this)});