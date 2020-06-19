const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    //Create elements and content
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven"){
        let card = document.createElement('section');
        let photo = document.createElement('img');
        let name = document.createElement('h1');
        let motto = document.createElement('h4');
        let founded = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');

        //Create content
        photo.setAttribute('src', 'towns/' + towns[i].photo)
        photo.setAttribute('alt', towns[i].name)
        name.textContent = towns[i].name;
        motto.textContent = '\"' + towns[i].motto +'\"';
        founded.textContent = 'Founded: ' + towns[i].yearFounded;
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        founded.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
        

        //Put elements in each
        card.appendChild(photo);
        card.appendChild(name);
        card.appendChild(motto);
        card.appendChild(founded);
        card.appendChild(population);
        card.appendChild(rainfall);
        document.querySelector('.towns').appendChild(card);
    }
  });