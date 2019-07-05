// --------------------------------------- 5 forecast FORECAST --------------------------------

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=6e9bcf94156c7c5e7c11e06a172b2d8a";
const forecast = new XMLHttpRequest();
forecast.open('GET', forecastURL, true);
forecast.send();

forecast.onload = function () {
    const forecastData = JSON.parse(forecast.responseText);
    console.log(forecastData);

    let weekday = new Array(7);
    weekday[0] = "Monday";
    weekday[1] = "Tuesday";
    weekday[2] = "Wednesday";
    weekday[3] = "Thursday";
    weekday[4] = "Friday";
    weekday[5] = "Saturday";
    weekday[6] = "Sunday";
    let count = 1;
    for (let i = 0; i < forecastData.list.length; i++) {
        if (forecastData.list[i].dt_txt.includes("18:00:00")) {
            document.getElementById('forecasttemp'+count).innerHTML=forecastData.list[i].main.temp + ' &#8457;';
            document.getElementById('forecasticon' + count).setAttribute('src', "https://openweathermap.org/img/w/" + forecastData.list[i].weather[0].icon + ".png");
            document.getElementById('forecasticon' + count).setAttribute('alt', forecastData.list[i].weather[0].description);
            document.getElementById('dayforecast' + count).innerHTML = weekday[(new Date().getDay() + count - 1) % 7];
            count++;
        }
        if (count == 6) {
            break;
        }
    }
}