import "./App.css";

const geoLocation = () => {};

function App() {
  const geo = navigator.geolocation;
  geo.getCurrentPosition(
    (location) => {
      console.log(location);
    },
    (err) => {
      console.log(err);
    }
  );
  return <div className="App">{}</div>;
}

export default App;
