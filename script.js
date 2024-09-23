

    const Api_Key = '9b9683265a74b12b2fd9022fd8b4613e'
    const form = document.querySelector("form")
    const search = document.querySelector("#search")
    const weather = document.querySelector("#weather")
    const getWeather = async(city)=>{
         weather.innerHTML = `<h3>Loading..!</h3>`
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=metric`
        const response = await fetch(url)
     const data = await response.json()
     return ShowWeather(data)
    }
    const ShowWeather = (data) => {
       if(data.cod==404){
        weather.innerHTML = `<h3>City Not found..!</h3>`
        return  
       }
        
        weather.innerHTML = `<div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"> 
                <h4> Temperature : ${data.main.temp} &deg;C </h4>
                <h4> Weather     : ${data.weather[0].main} </h4>
                <h4> speed       : ${data.wind.speed}kmh </h4>
                </div>`
    }

    form.addEventListener(
        "submit",        
        function(event){
            getWeather(search.value)
            event.preventDefault();
        }
    )
   
