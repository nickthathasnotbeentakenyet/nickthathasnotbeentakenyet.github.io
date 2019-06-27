var d = new Date();
var day = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var month = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
document.getElementById('currentdate').innerHTML=(day[d.getDay()] + ", " + d.getDate() + " of " + month[d.getMonth()] + ", " + d.getFullYear());
