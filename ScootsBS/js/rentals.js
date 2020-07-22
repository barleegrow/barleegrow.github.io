  /*const requestURL = '/ScootsBS/data/rentals.json';*/
  const requestURL = 'https://barleegrow.github.io/ScootsBS/data/rentals.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const rentals = jsonObject['rentals'];

    //Create elements and content
    for (let i = 0; i < rentals.length; i++ ) {
        let card = document.createElement('section');
        let type = document.createElement('h2');
        let max = document.createElement('p');
        let HalfR = document.createElement('p');
        let FullR = document.createElement('p');
        let HalfW = document.createElement('p');
        let FullW = document.createElement('p');
        let photo = document.createElement('img');

        //Create content
        type.textContent = 'Rental Type: ' + rentals[i].type;
        max.textContent = 'Max Persons: ' + rentals[i].max;
        HalfR.textContent = 'Half Day Reserved: ' + rentals[i].halfR;
        FullR.textContent = 'Full Day Reserved: ' + rentals[i].fullR;
        HalfW.textContent = 'Half Day Walk-in: ' + rentals[i].halfW;
        FullW.textContent = 'Full Day Walk-in: ' + rentals[i].fullW;
        photo.setAttribute('src', rentals[i].picture);
        photo.setAttribute('alt', rentals[i].picture );
        type.textContent = rentals[i].type ;

        //Put elements in each
        card.appendChild(type);
        card.appendChild(max);
        card.appendChild(HalfR);
        card.appendChild(FullR);
        card.appendChild(HalfW);
        card.appendChild(FullW);
        card.appendChild(photo);
        document.querySelector('div.cards').appendChild(card);
    }
  });

