import React from 'react'

const Home = () => {
     
    const api = {
        key: '', //your openweathermap.org api key (need to sign up an account)
        base: 'http://api.openweathermap.org/data/2.5/'
    };
    const [search, setSearch] = React.useState('')
    const [weather, setWeather] =React.useState({})
    
    const searchPressed = () =>{
        fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`) //fetching api
        .then((res) => res.json()) //get restult and turn it into json object
        .then((result) => {
         console.log(result);
         setWeather(result); //set weather by result
       });
    };

  return (

    <div className='text-black'>
        <header className='max-w-[800px] w-[100%] mx-auto px-4 py-1'>
            {/* header */} 
            <div className='bg-[#ededed] p-6 text-center space-y-2'>
            <h1 className='text-[40px]'>Simple Weather App</h1>

            {/* search */}
             
             <div>
            <input type="text" placeholder='Enter City'
              
              onChange={(e) => setSearch(e.target.value)}
              className='border-2 border-solid border-black px-2'/>

            <button onClick={searchPressed}
            className='bg-gray-500 py-[2.2px] px-2 text-[#ededed]'
            >Search</button>
            </div>
             

             {/* check if weather.main is exist */}
            {typeof weather.main != "undefined" ? (

            <div>
            {/* location name */}
            <p>{weather.name}</p>

            {/* temp in celcius */}
            <p>{weather.main.temp} °C</p>

            {/* sunny or not */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
           </div>
            )
              :(
                ""
              )
             }
            </div> 
        </header>
    </div>
  )
}

export default Home