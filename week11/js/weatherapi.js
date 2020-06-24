 /*Preston*/
 const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473' + id + '&units=imperial&APPID=0b991a27171c24f0a1099f22e88cd0eb'
      
        fetch(apiURL)
  .then((response) => response.json())
  .then((town) => {
    console.log(town);
    let description = town.weather[0].description;
    let current = discription.charAt(0).toUpperCase() + discription.slice(1);
   //const current = "<b> Currently: </b>" + current;
   // const temp = "<b> Temperature: </b>" + Math.round(town.main.temp) + " &#176;F";
   // const wind = "<b> Wind Speed: </b>" + Math.round(town.wind.speed) + "mph";
   // const humid = "<b> Humidity: </b>" + Math.round(town.main.humidity) + "%";

    document.getElementById('temp').innerHTML = Math.round(town.main.temp) + " &#176;F";
    document.getElementById('wind').innerHTML = Math.round(town.wind.speed) + "mph";
    document.getElementById('humid').innerHTML = Math.round(town.main.humidity) + "%";
    
/*5 day forecast*/
function buildForecast(id)
  url = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473' + id + '&units=imperial&APPID=0b991a27171c24f0a1099f22e88cd0eb'
    fetch(apiURL)
    .then((response) => response.json())
    .then((town) => {
      const townList = town.list;
      let daycount = 0;

      for (let i = 0, i <town.list.length; i++){}
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
 
/*Soda Springs

/*5 day forecast*/

/*Fish Haven


/*5 day forecast*/
