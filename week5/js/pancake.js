const date = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = days[date.getDay()];

if(dayName == 'Friday') {
   document.getElementById("alert").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
   document.getElementById("alert").classList.add("show");
}