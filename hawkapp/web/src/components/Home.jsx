import React from "react";
import { Navigation } from "./index.js"
import CookieConsent from "react-cookie-consent";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "./Style.css"


const images = [
  {
    original: '/img/basketball.jpg',
    thumbnail: '/img/basketball.jpg',
  },
  {
    original: '/img/tenis.jpg',
    thumbnail: '/img/tenis.jpg',
  },
  {
    original: '/img/football.jpg',
    thumbnail: '/img/football.jpg',
  },
];

function Home() {
  return (
    <>
      <Navigation />
      <div className="home">
        <div className="row m-0 p-0">
          <div className="column col-50 text-center my-auto">
            <div className="pt-3 pb-5">
              <h2>Rent sport facility now!</h2>
            </div>    
            <div className="py-1">Looking for a football pitch to rent?</div>
            <div className="py-1">Your baseball pitch is empty and the phone is silent?</div>
            <div className="py-1">Wanna play tennis match 2 vs 2 with best friends?</div>
            <div className="py-1">Do you have basketball hall to rent?</div>
            <div className="pt-3 pb-4">Jastrzębik is here to help!</div>  
            <button className="butt butt-m mb-4">Register now</button>     
          </div>
          <div className="column col-50 py-5">
            <div>
              <ImageGallery
                items={images}
                showThumbnails={false}
                infinite={true}
                />
            </div>
          </div>
        </div>

        <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
      </div>
    </>
  );
}

export default Home;