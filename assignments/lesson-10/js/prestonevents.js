const requestURL = "https://nickthathasnotbeentakenyet.github.io/assignments/lesson-9/js/home.json";
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    const towndata = request.response;
    const towns = towndata['towns'];

    const output = document.getElementById('prestonevents');
    towns.forEach(town => {
        if (town.name == 'Preston') {
            // const head = document.createElement('h2');
            const para = document.createElement('p');
            const para2 = document.createElement('p');
            const para3 = document.createElement('p');

            // head.textContent = "Preston Town Events"
            para.textContent = town.events[0];
            para2.textContent = town.events[1];
            para3.textContent = town.events[2];
            // output.appendChild(head);
            output.appendChild(para);
            output.appendChild(para2);
            output.appendChild(para3);


        }

    });
};