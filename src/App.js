import './App.css';
import rocket from './assets/rocket.jpeg';
import mortarboard from './assets/mkps_icon.png';
import Lottie from "lottie-react";
import meteor from "./assets/videos/Falling Meteor.json";
import laurel from "./assets/laurel.png";

function App() {
  return (
    <>
      <div className="overlay">
        <div className="main-container">
          <img
            className="background-image"
            src={rocket}
            alt="Background"
          />

          <Lottie
            loop
            autoplay
            className="meteor-animation"
            animationData={meteor}
            loop={true}
          />

          <div className="card">
            <div className="card-top"></div>
            <img
              className="icon-image"
              src={mortarboard}
              alt="Card Pattern"
            />
            <div className="card-body">                  

                  <h2 className="school-title">Miracle Kids Pre School</h2>
                  
                
                  <p>Welcome! Click below to enter our school website.</p>
            </div>
            

                  <button
                    className="btn"
                    id="button_school_site"
                  >
                    Enter Site
                  </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;