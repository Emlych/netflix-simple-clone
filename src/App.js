import "./App.css";
import data from "./assets/data.json";
import Section from "./Components/Section";
import logo from "./assets/img/logo.png";

function App() {
  return (
    <div className="app">
      <img src={logo} alt="netflix logo" />
      {data.map((movie, index) => {
        return (
          <div key={index}>
            <Section category={movie.category} images={movie.images} />

            {/* <div className="list">
              {movie.images.map((image, index) => {
                return <img src={image} index={index} alt={index} />;
              })}
            </div> */}
          </div>
        );
      })}
    </div>
  );
}

export default App;
