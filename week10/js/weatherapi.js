        const requestURL = 'http://api.openweathermap.org/data/2.5/forecast?id=' + id + '&units=imperial&APPID=0b991a27171c24f0a1099f22e88cd0eb';
        
        fetch(apiURL)
  .then((response) => response.json())
  .then((town) => {
    console.log(town);
    let description = town.weather[0].description;
    





  });
