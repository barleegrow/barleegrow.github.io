function toggleMenu() {
document.getElementByClassName("navigation")[0].classList.toggle("responsive");
 }
 document.getElementById("modified").innerHTML = todayDate();

 function todayDate() {
     var today = new Date();
     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
     const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
     var month = months[today.getMonth()];
     var day = days[today.getDay()];
     var dayDate = today.getDate();
     var year = today.getFullYear();
     return  day + ", " + dayDate + " " + month + " " + year;
 //document.getElementById("nav_main").classlist.toggle("nav_hidden");

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

//hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);