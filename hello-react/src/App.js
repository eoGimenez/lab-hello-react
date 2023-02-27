import "./AppNuevo.css";
import imageIron from "./images/ironHack.png";
import imageOption from "./images/opciones.png";
import imagePrim from "./images/primero.png";
import imageSegu from "./images/segundo.png";
import imageTerc from "./images/tercero.png";
import imageCuart from "./images/cuarto.png";

function App() {
  return (
    <div className="container">
      <div className="home">
        <div className="nav">
          <img src={imageIron} className="logo" alt="logo-ironhack" />
          <img src={imageOption} className="logo" alt="logo-opciones" />
        </div>
        <div className="text">
          <h1 className="white">Say Hello to ReactJS</h1>
          <p className="white">
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer
          </p>
          <button className="button">Awesome!</button>
        </div>
      </div>
      <div className="images">
        <div className="imageFoot">
          <img src={imagePrim} alt="primera-imagen" />
          <h2>Declarative</h2>
          <p>React make it painless to create interactive UIs.</p>
        </div>
        <div className="imageFoot">
          <img src={imageSegu} alt="segunda-imagen" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="imageFoot">
          <img src={imageTerc} alt="tercera-imagen" />
          <h2>Single-Way</h2>
          <a>A set of immutable values are passed to the component's.</a>
        </div>
        <div className="imageFoot">
          <img src={imageCuart} alt="cuarta-imagen" />
          <h2>JSX</h2>
          <p>Statically-typed,designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
