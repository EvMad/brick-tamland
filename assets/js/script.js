var APIKey = "43b41adfbc829bdf2eaf3c0fb6c61426";

var city;


// search input

// get form that holds city name from html
var citySearchFormElement = document.querySelector("#searchForm");
console.log(citySearchFormElement)

citySearchFormElement.addEventListener("submit", function(event) {
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
     getApi(queryURL);

//     fetch(queryURL)
//         .then(function(response) {
//             console.log(response);
//             if (response) {

              
//                 currentWeatherEl.textcontent=response.status;
//             }

//             return response.json();

//         }
        

// );

    })





function getApi(URL) {
    fetch(URL)
        .then(function (response) {
           console.log(response);
           if (response) {
            var currentWeatherEl = document.querySelector("#current");
                currentWeatherEl.textContent = '';
            }

            return response.json();
        })
        .then(function (data) {
             //show me the real data
            console.log(data);
             for (var i = 0; i < data.length; i++) {

                var createCityBtn = document.createElement('tr');

             }
       })
}
