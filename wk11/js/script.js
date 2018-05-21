var el = document.getElementById("block");

function changeText() {
    
    document.getElementById("text").innerHTML = "Click me!"
}

function changeColor() {
    this.style.backgroundColor = "red";
}

function normalText() {
    
    document.getElementById("text").innerHTML = "My Block";
}

function doubleClick() {
    
    this.style.backgroundColor = "blue";
}

el.addEventListener("mouseover", changeText);
el.addEventListener("click", changeColor);
el.addEventListener("mouseout", normalText);
el.addEventListener("dblclick", doubleClick);