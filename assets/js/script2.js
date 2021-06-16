let iconEl = $(".cityWeatherIconName");
let cityNameEl = $(".cityName");
let cityTempEl = $(".cityTemp");
let cityHumidityEl = $(".cityHumidity");
let cityWindSpeedEl = $(".cityWindSpeed");


function cityWeather() {
    $.ajax({
        url: queryUrl,
        method: 'GET'
    })
        .then(function(weatherData){
            let weatherObj = {
                cityName: weatherDate.name,
                cityTemp: weatherData.main.temp,
                cityHumidity: weatherData.main.humidity,
                cityWindSpeed: weatherData.wind.speed,
                cityUVIndex: weatherData.coord,
                cityWeatherIconName: weatherData.weather[0].icon
            }
        })
        }

          // function getApi(queryURL) {
    //     fetch(URL)
    //         .then(function (response) {
    //            console.log(response);
    //            if (response) {
    
    //             document.querySelector("#cityNameEl").innerHTML=response.object.main.name;
    //             document.querySelector("#cityTempEl").innerHTML=response.object.main[0];
    //             document.querySelector("#citySunsetEl").innerHTML=response.object.sys[4];
    //             document.querySelector("#cityConditionsEl").innerHTML=response.object.weather[2];
    //             document.querySelector("#iconEl").innerHTML=response.object.weather[3];
    //             }
    
    //             return response.json();
    
                
    //         });
    //     }



