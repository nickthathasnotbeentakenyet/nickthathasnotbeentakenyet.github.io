const requestURL = 'https://nickthathasnotbeentakenyet.github.io/assignments/lesson-9/js/home.json'
const request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()

function createTag (tagName, parentNode, text = null) {
  const el = document.createElement(tagName)
  if (text) {
    el.textContent = text
  }
  parentNode.appendChild(el)
  return el
}

request.onload = function () {
  const townFilter = ['Preston', 'Fish Haven', 'Soda Springs']
  const towns = request.response.towns
  const output = document.querySelector('section')

  towns.filter((town) => townFilter.includes(town.name)).forEach(town => {
    createTag('h3', output, town.name)
    createTag('p', output, town.motto)
    createTag('p', output, 'Year Founded: ' + town.yearFounded)
    createTag('p', output, 'Population: ' + town.currentPopulation)
    createTag('p', output, `Annual Rain Fall: '${town.averageRainfall}'`)

    const img = createTag('img', output)
    img.src = `images/main-${town.name.replace(/\s/g, '').toLowerCase()}.jpeg`
  })
}