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
document.getElementById('data'+(day+1)).textContent = forecast.main.temp; 
document.getElementById('col-head'+(day+1)).textContent = weekdays[d.getDay()];
document.getElementById('wicon'+(day+1)).src = "https://openweathermap.org/img/wn/" + forecast.weather[0].icon + "@2x.png";
day++;
document.getElementById('wicon'+(day+1)).alt = forecast.weather[0].description;
});



});
