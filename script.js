
// // const options = {
// // 	method: 'GET',
// // 	headers: {
// // 		'x-rapidapi-key': 'f16417c394mshcebb2c23f626a89p104a74jsnd214139db919',
// // 		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
// // 	}
// // };
// // fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f',options)

// //     .then(response =>response.json())
// //     .then(response => console.log(response))
// //     .catch(err => console.error(err));
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'f16417c394mshcebb2c23f626a89p104a74jsnd214139db919',
// 		'x-rapidapi-host': 'foreca-weather.p.rapidapi.com'
// 	}
// };

// fetch('https://foreca-weather.p.rapidapi.com/forecast/15minutely/102643743?alt=0&tempunit=C&windunit=MS&tz=India%Indore&periods=8&dataset=full',options)

//     .then(response =>response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

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
    // const Api = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}'
    // const city = document.getElementById('city').value;
    // if(!city){
    //     alert("Enter city")
    //     return
    // }
