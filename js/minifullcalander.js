//how many days in the month
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

// July
console.log(daysInMonth(10,2021)) // 31
// February
console.log(daysInMonth(11,2021)) // 28
console.log(daysInMonth(12,2021))


//Get the starting of a week in a month
var year = "2021";
var month = "10";
var day = new Date(year + "-" + month + "-26").getDay();
// 6 - Saturday
console.log(day);


Get Server and local date & time
var xmlHttp;
function srvTime(){
    try {
        //FF, Opera, Safari, Chrome
        xmlHttp = new XMLHttpRequest();
    }
    catch (err1) {
        //IE
        try {
            xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
        }
        catch (err2) {
            try {
                xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch (eerr3) {
                //AJAX not supported, use CPU time.
                alert("AJAX not supported");
            }
        }
    }
    xmlHttp.open('HEAD',window.location.href.toString(),false);
    xmlHttp.setRequestHeader("Content-Type", "text/html");
    xmlHttp.send('');
    return xmlHttp.getResponseHeader("Date");
}

var st = srvTime();
var date = new Date(st);
var localTime = new Date();
console.log("Server Date: " + date+", Local Timing: "+ localTime);