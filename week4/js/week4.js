function toggle_menu() {
    document.getElementById("main_nav").classList.toggle("nav_hidden");
 }
 const date = new Date();
 const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 const MonthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 const dayName = days[date.getDay()];
 const monthName = monthName [date.getMonth()];
 const year = date.getFullYear();
 document.getElementById("today").innerHTML = dayName +', ' + date.getDate() + ' ' + monthName + ' ' + year;
 document.getElementById("year").innerHTML = year;
 document.getElementById("nav_main").classlist.toggle("nav_hidden");