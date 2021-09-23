import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [lat, setLat] = useState(null); //latitude
  const [long, setLong] = useState(null); //longitude
  const [err, setErr] = useState(null); //error

  //componentDidMount
  useEffect(() => {
    //getting the users location and storing it in the state variables
    const geo = navigator.geolocation;
    geo.getCurrentPosition(
      (location) => {
        console.log(location);
        setLat(location.coords.latitude);
        setLong(location.coords.longitude);
      },
      (err) => {
        setErr(err);
      }
    );
  }, []);

  if (err) {
    return <div className="container">Error :- {err}</div>;
  } else if (!err && lat) {
    return (
      <div className="container">
        <h1>
          {lat} - {long}
        </h1>

        {err}
      </div>
    );
  }
  return <h1>Loading....</h1>;
}

export default App;
