/*document.getElementById("date").innerhtml = "Last Updated" + document.lastModified;
var date = new Date ();
document.getElementById("year").innerhtml = date.getFullYear();*/
    newFunction();
function newFunction() {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    document.getElementById("date")
        .textContent = new Date().toLocaleDateString("en-US", options);
}
