import React from "react";
import { Navigation } from "./index.js"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Home() {
  return (
    <>
      <Navigation />
      <div className="home">
        <AwesomeSlider bullets={false} > 
          <div data-src="./img/football.jpg">
            <p>I want to see what you got.</p>
          </div>
          <div data-src="./img/basketball.jpg" >
            <p>I want to see what you got.</p>
          </div>
          <div data-src="./img/tenis.jpg" >
            <p>I want to see what you got.</p>
          </div>
        </AwesomeSlider>
      </div>
    </>
  );
}

export default Home;