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
        if (towns[i].name == "Preston"){ //|| towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven"){
 //Create section image
        let card = document.createElement('section');
        let photo = document.createElement('img');
//create text section 

        let event1= document.createElement('p');
        let event2 = document.createElement('p');
        let event3 = document.createElement('p');

//Create content
       event1.textContent = towns[i].events[0];
       event2.textContent = towns[i].events[1];
       event3.textContent = towns[i].events[2];
        


//put elements in text section
        text.appendChild(event1);
        text.appendChild(event2);
        text.appendChild(event3);
        document.querySelector('.towns').appendChild(card);
        }
    }
  });