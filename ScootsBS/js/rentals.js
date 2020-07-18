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

  //confirmation number
  function rand(maxLimit = 100) {
        let rand = Math.random() * maxLimit;
        return Math.floor(rand);
  }