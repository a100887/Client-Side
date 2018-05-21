function dateShow() {
    
    var dateTime  = new Date();
    var day = dateTime.getDate();
    var month = dateTime.getMonth();
    var year = dateTime.getFullYear();
    
    
    document.getElementById("show").innerHTML = "Day: " + day + " Month: " + monthName(month + 1) + " Year: " + year; 
}

function monthName(monthNo) {
    var month;
    switch (monthNo) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "Febuary";
            break
        case 3:
            month = "March";
            break
        case 4: 
            month = "April";
            break;
        case 5:
            month = "May"
            break;
        default:
            month = "none";
            break
    }
    
    return month;
}

function radioBtn(num) {
    switch (parseInt(num)) {
        case 1:
            alert("Like the sun");
            break;
        case 2:
            alert("Like fire");
            break;
        case 3:
            alert("Like the sky");
            break;
    }
}