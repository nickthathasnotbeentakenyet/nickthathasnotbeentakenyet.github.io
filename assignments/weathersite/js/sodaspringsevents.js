const requestURL = "https://nickthathasnotbeentakenyet.github.io/assignments/weathersite/js/home.json";
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    let myList = document.getElementById('eventssodasprings');
    let towns = request.response['towns'];
    towns.forEach(town => {
        if (town.name == 'Soda Springs') {
            for (let i = 0; i < town.events.length; i++) {
                let listItem = document.createElement('li');
                listItem.textContent = town.events[i];
                myList.appendChild(listItem);
            }
        }
    });
}