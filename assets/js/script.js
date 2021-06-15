var APIKey = "43b41adfbc829bdf2eaf3c0fb6c61426";

var city;

var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

// search input

fetch (queryURL, {
    method: 'GET',
    credentials: 'same-origin',
    cache: 
})


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
