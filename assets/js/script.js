var APIKey = "43b41adfbc829bdf2eaf3c0fb6c61426";

var city;

var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

// search input

var userSearchEl = document.querySelector("#cityName");

userSearchEl.addEventListener("submit", formSubmitHandler);

var responseText = document.querySelector("#current");

var getApi = function() {
    fetch (queryURL)
        .then(function (response) {
            console.log(response);
            if (response) {
            responseText.textContent = '';
            }

            return response.json();
        })
    }

.then(function (data) {
    console.log(data);

    for (var i = 0; i < data.length; i++) {

    var createCityBtn = document.createElement('tr');
        
    }

});

// local storage

let searches = [];

const addCity = (event)=>{
    event.preventDefault();
    let search = {
        id: Date.now(),
        title: document.getElementById("#cityName").Value,
    }

    searches.push(search);
    document.forms[0].reset();

    localStorage.setItem("citySearches", JSON.stringify(searches));
}
