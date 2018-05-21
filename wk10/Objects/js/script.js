var counter = 0;

function Car (make, model, year, colour) {
    
    this.make = make;
    this.model = model;
    this.year = year;
    this.colour = colour;
    this.started = false;
    
    this.start = function () {
        this.started = true;
        alert("Car on!");
    };
    
    this.drive = function() {
        if (this.started) {
            alert("Car On!");
        }
        
        else {
            alert("You need to start the car first!");
        }
    };
    
    this.brake = function() {
        if (this.started) {
            alert("Car On!");
        }
        
        else {
            alert("You need to start the car first!");
        }
    };
    
    this.stop = function() {
        if (this.started) {
            this.started = false;
            alert("Car Stopped!");
        }
        
        else {
            alert("You need to start the car first!");
        }
    };
}

function Person (fullName, email, age, id) {
    
    this.fullName = fullName;
    this.email = email;
    this.age = age;
    this.id = id;
}


var car = new Car("Fiat", "Cinquecento", 2017, "White")

function whenReady() {
    document.getElementById("make").innerHTML += car.make;
    document.getElementById("model").innerHTML += car.model;
    document.getElementById("colour").innerHTML += car.colour;
    document.getElementById("year").innerHTML += car.year;
}

var personAr = [];

function getDetails() {
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var id = document.getElementById("id").value;
    
    
    var check = false;
    
    if (!(name == "" || email == "" || age == "" || id == "")) {
        
        if (personAr.length > 0) {
            
            for (var i = 0; i < personAr.length; i++) {
            
                if (personAr[i].id == id) {
                    check = true;
                    alert("A person with you id has already registered")
                    break;
                }
            }
            
            if (!check) {
                personAr.push(new Person(name, email, age, id));
                console.log("added");
                console.log(personAr);
                
                document.getElementById("showDetails").innerHTML += "Person: " + (++counter) + "<br>Full Name: " + name + "<br>Email: " + email + "<br>Age: " + age + "<br>ID: " + id + "<br><br>";
                console.log(personAr);
            }
        }
        
        else {
            personAr.push(new Person(name, email, age, id));
            document.getElementById("showDetails").innerHTML += "Person: " + (++counter) + "<br>Full Name: " + name + "<br>Email: " + email + "<br>Age: " + age + "<br>ID: " + id + "<br><br>";
            console.log(personAr);
        }
    }
    
    else {
        alert("Not filled")
    }
    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("id").value = "";
}

function start() {
    car.start();
}

function drive() {
    car.drive();
}

function brake() {
    car.brake();
}

function stop() {
    car.stop();
}