import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
//import startPage from '../pages/startPage';
//import {ReactComponent as Rclouds} from './Cloudy.svg';
import clouds from './cloudsImage.png';


import {useEffect } from 'react';
//console.log(clouds);
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
function App() {
  const { height, width } = useWindowDimensions();
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=albany&appid=bbc2ae2ce282db86732850134ea4a74c`
  return (
    <div className="App">

      <h1>Weather!!
      width: {width} ~ height: {height}
      </h1>
    
      <div className="Clouds">
    <img
    src={clouds} alt="Clouds"
    />;
    </div>
    </div>

    
  );
}

export default App;
