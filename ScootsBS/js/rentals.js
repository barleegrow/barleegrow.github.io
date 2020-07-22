/*const requestURL = 'https://barleegrow.github.io/ScootsBS/data/rentals.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const rentals = jsonObject['rentals'];

//Create elements and content 
    for (let i = 0; i < rentals.length; i++ ) {
        if (rentals[i].name == "Honda Metro Scooter" || rentals[i].name == "Honda Dio Scooter" || rentals[i].name == "Honda PCX150 Scooter"
        || rentals[i].name == "Honda Pioneer ATV" || rentals[i].name == "Jeep Wrangler - 4 door with a/c" || rentals[i].name == "Jeep Wrangler - 2 door"){
 //Create section image
        let card = document.createElement('section');
        let photo = document.createElement('img');
//create text section 
        let text = document.createElement('div');
        let type = document.createElement('h4');
        let max = document.createElement('p');
        let halfR = document.createElement('p');       
        let fullR = document.createElement('p');
        let halfW = document.createElement('p');
        let fullW = document.createElement('p');

//Create content
        photo.setAttribute('src', 'rentals/' + rentals[i].picture)
        photo.setAttribute('alt', rentals[i].name)
        type.textContent = rentals[i].type;
        max.textContent = rentals[i].max;
        halfR.textContent = 'Half Day' + rentals[i].halfR;
        fullR.textContent = 'Full Day ' + rentals[i].fullR;
        halfW.textContent = 'Walk-in Half Day: ' + rentals[i].halfW;
        fullW.textContent = 'Walk-n Full Day: ' + rentals[i].fullW;       

 //Put elements in image section
        card.appendChild(photo);
//put elements in text section
        text.appendChild(type);
        text.appendChild(max);
        text.appendChild(halfR);
        text.appendChild(fullR);
        text.appendChild(halfW);
        card.appendChild(fullW)
        document.querySelector('div.cards').appendChild(card);
        }
    }
  });

  const requestURL = '/ScootsBS/data/rentals.json';*/
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
        let rentalType = document.createElement('h2');
        let max = document.createElement('p');
        let HalfR = document.createElement('p');
        let FullR = document.createElement('p');
        let HalfW = document.createElement('p');
        let FullW = document.createElement('p');
        let photo = document.createElement('img');

        //Create content
        rentalType.textContent = 'Rental Type: ' + rentals[i].max;
        max.textContent = 'Max Persons: ' + rentals[i].max;
        HalfR.textContent = 'Half Day Reserved' + rentals[i].halfR;
        FullR.textContent = 'Full Day Reserved' + rentals[i].fullR;
        HalfW.textContent = 'Half Day Walk-in' + rentals[i].halfW;
        FullW.textContent = 'Full Day Walk-in' + rentals[i].fullW;
        photo.setAttribute('src', rentals[i].imageurl);
        photo.setAttribute('alt', rentals[i].picture );
        rentalType.textContent = rentals[i].picture ;

        //Put elements in each
        card.appendChild(rentalType);
        card.appendChild(max);
        card.appendChild(HalfR);
        card.appendChild(FullR);
        card.appendChild(HalfW);
        card.appendChild(FullW);
        card.appendChild(photo);
        document.querySelector('div.cards').appendChild(card);
    }
  });

