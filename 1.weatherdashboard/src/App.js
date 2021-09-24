import React, { useState, useEffect } from "react";
import { getWeather } from "./utils/getWeather";

function App() {
  const [lat, setLat] = useState(null); //latitude
  const [err, setErr] = useState(null); //error

  //componentDidMount
  useEffect(() => {
    //getting the users location and storing it in the state variables
    const geo = navigator.geolocation;
    geo.getCurrentPosition(
      (location) => {
        setLat(location.coords.latitude);
      },
      (err) => {
        setErr(err);
      }
    );
  }, []);
  console.log(getWeather(lat));

  if (err) {
    return <div className="container">Error :- {err}</div>;
  } else if (!err && lat) {
    return (
      <div className="container">
        <h1>{lat} </h1>

        {err}
      </div>
    );
  }
  return <h1>Loading....</h1>;
}

export default App;
