var list = ["Banana", "Cereal", "Eggs", "Milk", "Potatoes"];

function onStart() {
    var userIn = prompt("Enter 1 for alphabetic order, and -1 for reverse order", 1);
    
    if (userIn == "1") {
        document.getElementById("showList").innerHTML = list.sort().join("<br>");
    }
    
    else if (userIn == "-1") {
        document.getElementById("showList").innerHTML = list.reverse().join("<br>");
    }
    
    else {
        document.getElementById("showList").innerHTML = "That is not a valid input";
    }
}

function extract() {
    
    var item = document.getElementById("item").value;
    item = item.charAt(0).toUpperCase() + item.substring(1).toLowerCase();
    var check = false;
    
    for (var i = 0; i < list.length; i++) {
        if (item == list[i]) {
            document.getElementById("msg").innerHTML = item + " was found at index " + i;
            break;
        }
        
        else {
            document.getElementById("msg").innerHTML = "The word you are searching for was not found";
        }
    }
}

function splitAndReverseTxt(param1) {
    
    var splitted = param1.split(",");
    alert(splitted.reverse().join(", "));
    
    for (var i = 0; i < splitted.length; i++) {
        
        splitted[i] = splitted[i].trim();
        
        document.getElementById("generateIn").innerHTML += "<br><input type='text' value='" + splitted[i]+ "'>";
    }
    
    alert(splitted.join(", "));
}

function getValues() {
    
    var values = document.getElementById("in2").value;
    splitAndReverseTxt(values);
}

function multipleNine() {
    
    for (var i = 1; i <= 10; i++) {
        
        document.getElementById("multi").innerHTML += "<br>Multiple " + i + ": " + i * 9;
    }
}