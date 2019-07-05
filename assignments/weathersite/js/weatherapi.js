let weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=6e9bcf94156c7c5e7c11e06a172b2d8a"
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', weatherURL, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById('temperature').innerHTML = weatherData.main.temp + ' &#8457;';
    document.getElementById('current').innerHTML = weatherData.weather[0].description;
    document.getElementById('windspeed').innerHTML = weatherData.wind.speed + ' mph';
    document.getElementById('humid').innerHTML = weatherData.main.humidity + ' &percnt;';
//  ------------------------------------ Wind Chill Factor ------------------------------- 

    let temp = weatherData.main.temp;
    let speed = weatherData.wind.speed;
    let chillF = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, .16)) + (.4275 * temp * Math.pow(speed, .16));
    document.getElementById('windchill').innerHTML =  chillF.toFixed(1) + " &#8457;";


}
