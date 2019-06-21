const requestURL = "https://nickthathasnotbeentakenyet.github.io/assignments/lesson-9/js/home.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  let towndata = request.response;
  let towns = towndata['towns'];
  
  let output = document.querySelector('section');
  towns.forEach(town => {
    if (town.name == 'Preston' || town.name == 'Fish Haven' || town.name == 'Soda Springs') {
      let myh3 = document.createElement('h3');
      let para = document.createElement('p');
      let para2 = document.createElement('p');
      let para3 = document.createElement('p');
      let para4 = document.createElement('p');
      myh3.textContent = town.name;
      para.textContent = town.motto;
      para2.textContent = "Year Founded: " + town.yearFounded;
      para3.textContent = "Population: " + town.currentPopulation;
      para4.textContent = "Annual Rain Fall: " + town.averageRainfall + "''";
      
      output.appendChild(myh3);
      output.appendChild(para);
      output.appendChild(para2);
      output.appendChild(para3);
      output.appendChild(para4);

    }
    
  });
};