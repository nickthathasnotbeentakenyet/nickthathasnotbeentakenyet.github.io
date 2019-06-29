// // --------------------------------------- 5 forecast FORECAST --------------------------------

// let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=6e9bcf94156c7c5e7c11e06a172b2d8a"
// let forecastRequest = new XMLHttpRequest();
// forecastRequest.open('GET', forecastURL, true);
// forecastRequest.send();

// forecastRequest.onload = function(){
// let forecastData = JSON.parse(forecastRequest.responseText);
// console.log(forecastData);

// let forecast = [];
// let forecast = 1;

// forecastData.list.forEach(hour => {
//     if (hour.dt_txt.includes("18:00:00")){
//     forecast[forecast] = hour.weather[0].description;
//     forecast++;
//     }
// });
// for (let i = 1; i <= 5 ; i++){
//     document.getElementById('forecast' + i).innerHTML = forecast[i];
// }



// }


// --------------------------------------- 5 forecast FORECAST --------------------------------

let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=6e9bcf94156c7c5e7c11e06a172b2d8a"
let forecastRequest = new XMLHttpRequest();
forecastRequest.open('GET', forecastURL, true);
forecastRequest.send();

forecastRequest.onload = function (){
let forecastData = JSON.parse(forecastRequest.responseText);
console.log(forecastData);

let icon = "https://openweathermap.org/img/w/" + forecastData.list[0].weather[0].icon + ".png";
let desc = forecastData.list[0].weather[0].description;
document.getElementById('forecast1').setAttribute('src', icon);
document.getElementById('forecast1').setAttribute('alt', desc);

let icon2 = "https://openweathermap.org/img/w/" + forecastData.list[1].weather[0].icon + ".png";
let desc2 = forecastData.list[1].weather[0].description;
document.getElementById('forecast2').setAttribute('src', icon2);
document.getElementById('forecast2').setAttribute('alt', desc2);

let icon3 = "https://openweathermap.org/img/w/" + forecastData.list[2].weather[0].icon + ".png";
let desc3 = forecastData.list[2].weather[0].description;
document.getElementById('forecast3').setAttribute('src', icon3);
document.getElementById('forecast3').setAttribute('alt', desc3);

let icon4 = "https://openweathermap.org/img/w/" + forecastData.list[3].weather[0].icon + ".png";
let desc4 = forecastData.list[3].weather[0].description;
document.getElementById('forecast4').setAttribute('src', icon4);
document.getElementById('forecast4').setAttribute('alt', desc4);

let icon5 = "https://openweathermap.org/img/w/" + forecastData.list[4].weather[0].icon + ".png";
let desc5 = forecastData.list[4].weather[0].description;
document.getElementById('forecast5').setAttribute('src', icon5);
document.getElementById('forecast5').setAttribute('alt', desc5);
}
