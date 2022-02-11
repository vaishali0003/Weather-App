import React from 'react'
import { useState, useEffect } from 'react'

function App() {

  const [city, setCity] = useState('')
  const [search, setSearch] = useState('Mumbai')

  const InputEvent = (e) => {
    setSearch(e.target.value);
  }


  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=18dab456c4ba66ed5c7207884d15386d`;
      const response = await fetch(url)
      // console.log(response);
      const resJson = await response.json();
      setCity(resJson.main);
      console.log(resJson.main);
    }
    fetchApi();
  }, [search])

  return (
    <>
      <div className="main">
        <div className="box">
          <div className="inputBox">
            <input type="search" placeholder='' className='inputField' onChange={InputEvent} value={search} />
          </div>
          <div className="info">
            {!city ?
              (<h1 className='no_data'>No data found</h1>) :
              (<>
                <div className="info-1">
                  <img src="images/street-view-solid.svg" alt="img" className='animation' />
                  <h1 className="cityName">{search}</h1>
                </div>
                <br />
                <div className="info-2">
                  <h1 className="temp">{city.temp} °C</h1>
                  <h3 className="min-max">Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>
                  <br />
                </div>
              </>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
