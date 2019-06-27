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


// --------------------------------------- 5 DAY FORECAST --------------------------------

let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=6e9bcf94156c7c5e7c11e06a172b2d8a"
let forecastRequest = new XMLHttpRequest();
forecastRequest.open('GET', forecastURL, true);
forecastRequest.send();

forecastRequest.onload = function (){
let forecastData = JSON.parse(forecastRequest.responseText);
console.log(forecastData);

let icon = "https://openweathermap.org/img/w/" + forecastData.list[2].weather[0].icon + ".png";
let desc = forecastData.list[2].weather[0].description;
document.getElementById('day1').setAttribute('src', icon);
document.getElementById('day1').setAttribute('alt', desc);

let icon2 = "https://openweathermap.org/img/w/" + forecastData.list[10].weather[0].icon + ".png";
let desc2 = forecastData.list[10].weather[0].description;
document.getElementById('day2').setAttribute('src', icon2);
document.getElementById('day2').setAttribute('alt', desc2);

let icon3 = "https://openweathermap.org/img/w/" + forecastData.list[18].weather[0].icon + ".png";
let desc3 = forecastData.list[18].weather[0].description;
document.getElementById('day3').setAttribute('src', icon3);
document.getElementById('day3').setAttribute('alt', desc3);

let icon4 = "https://openweathermap.org/img/w/" + forecastData.list[26].weather[0].icon + ".png";
let desc4 = forecastData.list[26].weather[0].description;
document.getElementById('day4').setAttribute('src', icon4);
document.getElementById('day4').setAttribute('alt', desc4);

let icon5 = "https://openweathermap.org/img/w/" + forecastData.list[34].weather[0].icon + ".png";
let desc5 = forecastData.list[34].weather[0].description;
document.getElementById('day5').setAttribute('src', icon5);
document.getElementById('day5').setAttribute('alt', desc5);

}

