 /*Preston*/
 const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473' + id + '&units=imperial&APPID=0b991a27171c24f0a1099f22e88cd0eb'
      
        fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let description = town.weather[0].description;
    let current = discription.charAt(0).toUpperCase() + discription.slice(1);


   const temp = document.getElementById('temp').innerHTML = Temperature;
   const wind = document.getElementById('wind').innerHTML = Windspeed;
   const humid =  document.getElementById('humid').innerHTML = Humidity;

  description.textContent = jsObject.main;
  current.textContent = jsObject.main.description;
  temp.textContent = jsObject.main.temp;
  wind.textContent = jsObject.main.wind;
  humid.textContent = jsObject.main.humidity;
    
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
  
/*5 day forecast
function buildForecast(id)*/
const apiURL = 'https:api.openweathermap.org/data/2.5/forecast?id=5604473' + id + '&units=imperial&APPID=0b991a27171c24f0a1099f22e88cd0eb'
    fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes ('18:00:00'));
      
      console.log(fivedayforecast)

      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

      let day = 0;
      let d= newDate(forecast.dt_txt);
    document.getElementById('fiveday${day+1}').textContent = forecast.main.temp; day++;
    document.getElementById('col-head${day+1}').textContent = weekdays[d.getDay()];
    day++;
    document.getElementById('wicon').textContent = weather.main.icon;
    
    
    });


