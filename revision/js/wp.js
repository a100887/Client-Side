var imgArray = ["https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426", "https://www.w3schools.com/w3css/img_lights.jpg", "https://images.pexels.com/photos/658687/pexels-photo-658687.jpeg?auto=compress&cs=tinysrgb&h=350"];

var elImg = document.getElementById("display");
var counter = 0;

function nextImage() {
    
    ++counter;
    
    if (imgArray.length != counter) {
        
        document.getElementById("display").innerHTML = '<img src="'+imgArray[counter]+'">';
    }
    
    else {
        counter = 0;
        document.getElementById("display").innerHTML = '<img src="'+imgArray[counter]+'">'
    }
}

function whenReady() {
    
    document.getElementById("display").innerHTML = '<img src="'+imgArray[0]+'">';
}

elImg.addEventListener("click", nextImage);