const requestURL = '/week12/data/rentals.json';

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
 //Create section image
        let card = document.createElement('section');
        let photo = document.createElement('img');
//create text section 
        let text = document.createElement('div');
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
        rainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
        

 //Put elements in image section
        card.appendChild(photo);
//put elements in text section
        text.appendChild(name);
        text.appendChild(motto);
        text.appendChild(founded);
        text.appendChild(population);
        text.appendChild(rainfall);
        card.appendChild(text)
        document.querySelector('.towns').appendChild(card);
        }
    }
  });