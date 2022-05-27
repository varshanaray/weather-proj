import "./App.css";
import React, { useState } from "react";
import axios from "axios";
//import startPage from '../pages/startPage';
//import {ReactComponent as Rclouds} from './Cloudy.svg';
//import clouds from './cloudsImage.png';

function App() {
  //const { height, width } = useWindowDimensions();
  // React Hooks
  const [data, setData] = useState({});

  const [location, setLocation] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=bbc2ae2ce282db86732850134ea4a74c`;
  //const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bbc2ae2ce282db86732850134ea4a74c`
  const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=bbc2ae2ce282db86732850134ea4a74c`;

  const searchLocation = (event) => {
    if (event.key == "Enter") {
      axios.get(url2).then((response1) => {
        setData(response1.data);
        console.log(response1.data);
      });
      setLocation("");
    }
  };

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

  // Current location
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
    // index 0, index 8
    <div className="App">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="enter a city"
          type="text"
        />
      </div>
      <div className="currentLoc">
        <button>
          Current Location!
        </button>
      </div>
      <div className="welcome">
        welcome to myClimate!
      </div>
      <div className="boxes">
        <div className="container">
          <div className="left">
            <div className="date">
              {data.list ? <p>{data.list[0].dt_txt}</p> : null}
            </div>
            <div className="location">
              {data.city ? <p>{data.city.name}</p> : null}
            </div>

            <div className="temp">
              {data.list && data.list[0].main ? (
                <h1>{data.list[0].main.temp.toFixed()}°F</h1>
              ) : null}
            </div>
            <div className="description">
              {data.list && data.list[0].weather ? (
                <p>{data.list[0].weather[0].description}</p>
              ) : null}
            </div>
          </div>
          <div className="right">
            <div className="feels">
              {data.list && data.list[0].main ? (
                <p>{data.list[0].main.feels_like.toFixed()}°F</p>
              ) : null}
            </div>
            <div className="humidity">
              {data.list && data.list[0].main ? (
                <p>{data.list[0].main.humidity}%</p>
              ) : null}
            </div>
            <div className="wind">
              {data.list && data.list[0].wind ? (
                <p>{data.list[0].wind.speed} mph</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="left">
            <div className="date">
              {data.list ? <p>{data.list[8].dt_txt}</p> : null}
            </div>
            <div className="location">
              {data.city ? <p>{data.city.name}</p> : null}
            </div>

            <div className="temp">
              {data.list && data.list[8].main ? (
                <h1>{data.list[8].main.temp.toFixed()}°F</h1>
              ) : null}
            </div>
            <div className="description">
              {data.list && data.list[8].weather ? (
                <p>{data.list[8].weather[0].description}</p>
              ) : null}
            </div>
          </div>
          <div className="right">
            <div className="feels">
              {data.list && data.list[8].main ? (
                <p>{data.list[8].main.feels_like.toFixed()}°F</p>
              ) : null}
            </div>
            <div className="humidity">
              {data.list && data.list[8].main ? (
                <p>{data.list[8].main.humidity}%</p>
              ) : null}
            </div>
            <div className="wind">
              {data.list && data.list[8].wind ? (
                <p>{data.list[8].wind.speed} mph</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="container3">
          <div className="left">
            <div className="date">
              {data.list ? <p>{data.list[16].dt_txt}</p> : null}
            </div>
            <div className="location">
              {data.city ? <p>{data.city.name}</p> : null}
            </div>

            <div className="temp">
              {data.list && data.list[16].main ? (
                <h1>{data.list[16].main.temp.toFixed()}°F</h1>
              ) : null}
            </div>
            <div className="description">
              {data.list && data.list[16].weather ? (
                <p>{data.list[16].weather[0].description}</p>
              ) : null}
            </div>
          </div>
          <div className="right">
            <div className="feels">
              {data.list && data.list[16].main ? (
                <p>{data.list[16].main.feels_like.toFixed()}°F</p>
              ) : null}
            </div>
            <div className="humidity">
              {data.list && data.list[16].main ? (
                <p>{data.list[16].main.humidity}%</p>
              ) : null}
            </div>
            <div className="wind">
              {data.list && data.list[16].wind ? (
                <p>{data.list[16].wind.speed} mph</p>
              ) : null}
            </div>
          </div>
        </div>

        </div>

    </div>
    //width: {width} ~ height: {height}
  );
}

export default App;
