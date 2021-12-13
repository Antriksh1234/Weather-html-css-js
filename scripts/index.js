var date = document.getElementById("date");
var temperatureText = document.getElementById("temperature");
var descriptionText = document.getElementById("weather_description");
var city = "Bhopal";
date.innerHTML = city + ", " + dateString;

var searchBar = document.getElementById("searchBar");
var searchButton = document.getElementById("btn_search");

fetchWeather(city);

function chnageTemperatureText(temp) {
    temperatureText.innerHTML = temp + "°C";
}

function changeDescriptionText(desc) {
    descriptionText.innerHTML = desc;
}

searchButton.onclick = () => {
    var enteredCity = searchBar.value;
    console.log(enteredCity);
    searchBar.value = "";
    fetchWeather(enteredCity);
}

function fetchWeather (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey)
    .then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        if (data.message != undefined) {
            alert("Wrong city");
        } else {
            var desc = data.weather[0].main;
            var currTemp = data.main.temp-272.15;
            currTemp = currTemp.toFixed(1);

            date.innerHTML = city + ", " + dateString;
            chnageTemperatureText(currTemp);
            changeDescriptionText(desc);
        }       
    });
}