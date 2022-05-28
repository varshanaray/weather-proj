import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  const [location, setLocation] = useState("");
  const [lat, setLat] = React.useState("");
  const [long, setLong] = React.useState("");
  let url1 = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=1c5733f1ce2831841ae00b13723c2f2f`;
  let url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&appid=1c5733f1ce2831841ae00b13723c2f2f`;

  const currLocation = () => {
    axios.get(url2).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    setLat("");
    setLong("");
  };
  // Checking if geolocation is supported on browser
  if (navigator.geolocation) {
    // Requests the current position if user accepts to provide geolocation information
    navigator.geolocation.getCurrentPosition(updatePos);
  } else {
    // Not supported
    alert("geolocation is not available");
  }

  // Gets the longitude and latitude
  function updatePos(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  }

  const searchLocation = (event) => {
    // When user presses the Enter key, the data is fetched
    if (event.key == "Enter") {
      axios.get(url1).then((response1) => {
        setData(response1.data);
        console.log(response1.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="App">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter a city"
          type="text"
        />
      </div>
      <div className="currentLoc">
        <button className="currButton" onClick={currLocation}>
          Current Location
        </button>
      </div>
      <div className="welcome">Welcome to MyWeather!</div>
      <div className="boxes">
        <div className="container1">
          <div className="bottomPart">
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
          <div className="topPart">
            <div className="feels">
              {data.list && data.list[0].main ? (
                <p>Feels like {data.list[0].main.feels_like.toFixed()}°F</p>
              ) : null}
            </div>
            <div className="humidity">
              {data.list && data.list[0].main ? (
                <p>Humidity: {data.list[0].main.humidity}%</p>
              ) : null}
            </div>
            <div className="wind">
              {data.list && data.list[0].wind ? (
                <p>Wind: {data.list[0].wind.speed} mph</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="bottomPart">
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
          <div className="topPart">
            <div className="feels">
              {data.list && data.list[8].main ? (
                <p>Feels like {data.list[8].main.feels_like.toFixed()}°F</p>
              ) : null}
            </div>
            <div className="humidity">
              {data.list && data.list[8].main ? (
                <p>Humidity: {data.list[8].main.humidity}%</p>
              ) : null}
            </div>
            <div className="wind">
              {data.list && data.list[8].wind ? (
                <p>Wind: {data.list[8].wind.speed} mph</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="container3">
          <div className="bottomPart">
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
          <div className="topPart">
            <div className="feels">
              {data.list && data.list[16].main ? (
                <p>Feels like {data.list[16].main.feels_like.toFixed()}°F</p>
              ) : null}
            </div>
            <div className="humidity">
              {data.list && data.list[16].main ? (
                <p>Humidity: {data.list[16].main.humidity}%</p>
              ) : null}
            </div>
            <div className="wind">
              {data.list && data.list[16].wind ? (
                <p>Wind: {data.list[16].wind.speed} mph</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
