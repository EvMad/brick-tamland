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
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
    // call the api
    getApi(queryURL)


    // save that city into local storage
    
    localStorage.setItem("city", city);
    
    var savedCities = JSON.parse( localStorage.getItem("Saved") ) || [];
    //savedCities should be an array of all the previously-saved cities; if nothing's in localStorage.Saved, it will be an empty array.
    
        console.log("savedCities: ", savedCities)
        savedCities.push(city);
        localStorage.setItem("Saved", JSON.stringify(savedCities));

          // create a button for that city
    return function makeButton() {
        savedCities = JSON.parse(localStorage.getItem("Saved"));
          
        for (var i = 0; i < savedCities.length; i++)
        {

            var cityButtons = document.getElementById("#citySearch").appendChild(document.createElement("li"));
            cityButtons.appendChild(document.createElement("button"));
            cityButtons.setAttribute = ("btn btn-outline-success");
            cityButtons.textContent = "Saved";
        }
          
        //   savedCity.textContent = "Saved";
         //var historyButton = document.querySelector("");
        // historyButton.innerHTML = city;
    
    }
        
    });


  
        
    // five day forecast    


    function fiveDay() {
        var forecast = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&cnt=6&units=imperial&appid=" + APIKey; 
       
        getApi(forecast) 
           
            fetch(forecast)
        .then(function (httpMetaDataResponse) {
            return httpMetaDataResponse.json();
        })

        .then(function (data) {
            console.log(data);
            if (data) {

            }
        })}
        
        
        

    
    
    
    
        
    //    // console.log(event);
    //     document.getElementById("form").appendChild(document.createElement("button"));

    // if the key you ask for is not in local storage
    // -- you get a null
    // else -- if it is in local storage
    // -- you get a STRING that looks like javascript
    // -- conver that string INTO JS. json.parse



// })





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

                var cityTemp = document.querySelector("#cityTempEl");
                cityTemp.textContent = data.main.temp;

                var cityWeather = document.querySelector("#cityConditionsEl");
                cityWeather.textContent = data.weather[0].description;

                var cityIcon = document.querySelector("#iconEl");
                cityIcon.textContent = data.weather[0].icon;

                //sanity check
                console.log(data.name);
                // grab all your data stick it on the screen
            }
        })

}