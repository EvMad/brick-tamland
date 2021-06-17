var APIKey = "43b41adfbc829bdf2eaf3c0fb6c61426";

var city;

// go get all saved scitys and make buttons out of them

// search input

// get form that holds city name from html
var citySearchFormElement = document.querySelector("#searchForm");
console.log(citySearchFormElement)

citySearchFormElement.addEventListener("submit", function (event) {
    // this is where your steps go
    event.preventDefault()

    // sanity check
    console.log(event);
    // get the input from the user
    city = event.srcElement[0].value;
    console.dir(city);



    // add it to the query URL
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    // call the api
    getApi(queryURL)


    // save that city into local storage
    // create a button for that city


    // if the key you ask for is not in local storage
    // -- you get a null
    // else -- if it is in local storage
    // -- you get a STRING that looks like javascript
    // -- conver that string INTO JS. json.parse



})





function getApi(url) {
    fetch(url)
        .then(function (httpMetaDataResponse) {
            return httpMetaDataResponse.json();
        })
        .then(function (data) {
            console.log(data);
            if (data) {
                var cityName = document.querySelector("#cityNameEl");
                cityName.textContent = data.name;

                

                //sanity check
                console.log(data.name);
                // grab all you data stick it on the screen
            }
        })

}