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
                var tempLi = document.createElement('li')
                var tempIcon = document.createElement('img')
                var tempDataDisplay = document.createElement('span')
                var weatherData = data.list[i].weather[0].icon
                var tempData = data.list[i].main.temp
                var humidData = data.list[i].main.humidity
                var windData = data.list[i].wind.speed
                var dateData = data.list[i].dt_txt
                tempIcon.setAttribute('src', 'https://openweathermap.org/img/wn/'+weatherData+'@2x.png')
                tempDataDisplay.textContent =  "   Temperature: " + tempData + "   Humidity:" + humidData + " Wind Speed:"
                + windData + " Date:  " + dateData
                // a little tailwind styling
                tempLi.setAttribute('class', 'flex align-items-center z-1 border-2 text-xl')
                // append to html
                tempLi.appendChild(tempIcon)
                tempLi.appendChild(tempDataDisplay)
                weatherDisplay.appendChild(tempLi)
            }
        })
    }    