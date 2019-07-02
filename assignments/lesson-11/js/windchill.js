let temp = parseFloat(document.getElementById('temperature').innerHTML);
let speed = parseFloat(document.getElementById('windspeed').innerHTML);
let chillF = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, .16)) + (.4275 * temp * Math.pow(speed, .16));

document.getElementById('windchill').innerHTML =  chillF.toFixed(1) + "&#8457;";
