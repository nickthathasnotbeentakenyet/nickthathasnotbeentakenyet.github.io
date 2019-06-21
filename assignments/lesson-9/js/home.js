const requestURL = "https://nickthathasnotbeentakenyet.github.io/assignments/lesson-9/js/home.json";
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  const towndata = request.response;
  const towns = towndata['towns'];
  
  const output = document.querySelector('section');
  towns.forEach(town => {
    if (town.name == 'Preston' || town.name == 'Fish Haven' || town.name == 'Soda Springs') {
      const myh3 = document.createElement('h3');
      const para = document.createElement('p');
      const para2 = document.createElement('p');
      const para3 = document.createElement('p');
      const para4 = document.createElement('p');
      const img = document.createElement("IMG");
      img.src = 'images/main-${town.name.replace(/\\s/g, "").toLowerCase()}.jpeg';      
 
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
      output.appendChild(img);

    }
    
  });
};