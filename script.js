const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b13221e292msh8d88f3e25d6a5fdp1ca9bbjsne179c7181226',
		'X-RapidAPI-Host': ''
	}
};

const getWeather=(city)=>{

    cityname.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response =>{
        
        console.log(response)
        
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed 
        wind_speed2.innerHTML = response.wind_speed 
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    } )
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();//does not reload page
    getWeather(city.value)
})

getWeather("Mumbai")




getWeather2()
{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', options)
	.then(response => response.json())
	.then(response =>{
        
        console.log(response)
        
        cloud_pct_boston.innerHTML = response.cloud_pct
        temp_boston.innerHTML = response.temp
        feels_like_boston.innerHTML = response.feels_like
        humidity_boston.innerHTML = response.humidity
        min_temp_boston.innerHTML = response.min_temp
        max_temp_boston.innerHTML = response.max_temp
        wind_speed_boston.innerHTML = response.wind_speed 
        sunrise_boston.innerHTML = response.sunrise
        sunset_boston.innerHTML = response.sunset
    } )
	.catch(err => console.error(err));
}
getWeather2("Bostons")