 /*Preston*/

 const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=0b991a27171c24f0a1099f22e88cd0eb';
      
        fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);


   const temp = document.getElementById('temp');
   const wind = document.getElementById('wind');
   const humid =  document.getElementById('humid');
   const current = document.getElementById('currently');

  current.textContent = jsObject.weather[0].description;
  temp.textContent = jsObject.main.temp;
  wind.textContent = jsObject.wind.speed;
  humid.textContent = jsObject.main.humidity + '%';
    
  });
  
 /*Windchill*/

 (function () {
  const temp = document.getElementById ('temp');
  const windspeed = document.getElementById('wind');
  let windchill = 35.74 + (0.6215 * temp) - (35.75 * (windspeed ** .16)) + (0.4275 * temp * (windspeed ** .16));
  
   
  if (temp <= 50 && windspeed > 3) {
     windchill = Math.round(windchill);
  } else {
     windchill = "N/A";
  }
  document.getElementById('windchill').innerHTML = windchill;
}());
  
/*5 day forecast*/

const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=0b991a27171c24f0a1099f22e88cd0eb';
    fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes ('18:00:00'));
      
      console.log(fivedayforecast)

      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

      let day = 0;
fivedayforecast.forEach(forecast => {
  
  let d= new Date(forecast.dt_txt);
  document.getElementById('data'+(data+1)).textContent = forecast.main.temp; 
  document.getElementById('col-head'+(data+1)).textContent = weekdays[d.getDay()];
  document.getElementById('wicon'+(data+1)).src = forecast.weather[0].icon;
  day++;
});

    
    
    });


