//Variables
var input = document.getElementById("myInput")
var button = document.getElementById("myButton")
var fillableUl = document.getElementById("fillThisUl")
var weatherDisplay = document.getElementById("weatherdisplay")
var localArray = []
var weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat='
// function for city location fetch
function cityConverter(lat, lon) {
    var apiUrl1 = weatherUrl + lat + '&lon=' + lon + '&units=imperial&appid=0f0f1cfbe3b125e774d9bc3e67107d8f'
    fetch(apiUrl1)
        .then(function(response) {
            return response.json()})
        .then(function(data){
            while(weatherDisplay.firstChild){
                weatherDisplay.removeChild(weatherDisplay.firstChild)
            }
            // apply data from fetch
            for(i=0;i<5; i++){
                
            }
        })
    }    