var date = new Date();
var dayOfMonth = date.getDate();
var year = date.getFullYear();
var month = getCorrespondingMonth(date.getMonth());

var dateString = dayOfMonth + " " + month + " " + year;

function getCorrespondingMonth(month) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
}