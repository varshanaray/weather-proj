import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
//import startPage from '../pages/startPage';
//import {ReactComponent as Rclouds} from './Cloudy.svg';
//import clouds from './cloudsImage.png';



function App() {
  //const { height, width } = useWindowDimensions();
  // React Hooks
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=bbc2ae2ce282db86732850134ea4a74c`
  //const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bbc2ae2ce282db86732850134ea4a74c`
  const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=bbc2ae2ce282db86732850134ea4a74c`

  const searchLocation = (event) => {
    if (event.key == 'Enter') {
      axios.get(url1).then((response1) => {
        setData(response1.data)
        console.log(response1.data)
      })
      setLocation('');
    }
  /*  if (event.key == '1') {
      axios.get(url2).then((response2) => {
      setData(response2.data)
      console.log(response2.data)
      })
      setLocation('');
    } */

  }
/*
  const currLocation = (event) => {
    //if (event.key)
    axios.get(url2).then((response2) => {
      setData(response2.data)
      console.log('Current Location!')
      console.log(response2.data)
    })
    setLat('');
    setLon('');
  } */


  var getPosition = function (options) {
    if (navigator.geolocation) {
       return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
    } else {
      return new Promise(
        resolve => resolve({})
      )
    }
   
  }
  
  getPosition()
    .then((position) => {
      console.log('POSITION!!!');
      console.log(position);
    })
    .catch((err) => {
      console.error(err.message);
    });

 /*   componentDidMount() {
      this.getPosition()
      .then((position) => {
         position.coords.latitude={lat}
         position.coords.longitude={lon}
       })
       .catch((err) => console.log(err.message));
      } */

  return (
  //  32.776665 lat
  //  -96.796989 long
    <div className="App">
      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='enter city'
        type="text" />
      </div>
      <div className="currLoc">
        <p>{getPosition}</p>
      </div> 
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
        
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
          {data.weather ? <p>{data.weather[0].description}</p> : null}
            
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? <p>feels like {data.main.feels_like.toFixed()}°F</p> : null}
          </div>
          <div className="humidity">
          {data.main ? <p>humidity: {data.main.humidity}%</p> : null}
          </div>
          <div className="wind">
            
            {data.wind ? <p>wind speed: {data.wind.speed} mph</p> : null}
          </div>
        </div>
        
      </div>
    </div>
    //width: {width} ~ height: {height}
  );
}

export default App;
