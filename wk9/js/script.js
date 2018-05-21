var myArray = ["Chasing cars", "Human", "Mr. Brightside", "Super Massive Black Hole", "Yellow"];

function start() {
    
    document.getElementById("arrayLen").innerHTML = myArray.length;
}

function getIndex() {
    
    var index = document.getElementById("userIndex").value;
    
    if (document.getElementById("from1").checked) {
        
        if (index > myArray.length) {
        
            document.getElementById("showItem").style.color = "red";
            document.getElementById("showItem").innerHTML = "The item you are looking for is not in the list";
        }
    
        else {
            document.getElementById("showItem").style.color = "black";
            document.getElementById("showItem").innerHTML = myArray[index - 1];
        }
    }
    
    else {
        
        if (index >= myArray.length) {
        
            document.getElementById("showItem").style.color = "red";
            document.getElementById("showItem").innerHTML = "The item you are looking for is not in the list";
        }
    
        else {
            document.getElementById("showItem").style.color = "black";
            document.getElementById("showItem").innerHTML = myArray[index];
        } 
    }  
}

function getArtists() {
    
    var input1 = document.getElementById("in1").value;
    var input2 = document.getElementById("in2").value;
    var input3 = document.getElementById("in3").value;
    
    var artists = [input1, input2, input3];
    document.getElementById("showItem").innerHTML = "You entered the following artists in the following order: " + artists.join(" and ");
    
    document.getElementById("showItemSorted").innerHTML = "This is your sorted list: " + artists.sort().join(" and ");
}