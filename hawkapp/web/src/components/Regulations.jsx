import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { LoggedNavigation } from "./index.js";
import "./Style.css";

function Regulations() {

  return (
    <>
      <LoggedNavigation />
      <div className="defaultWrapper">
        <div className="searchable-small-objects">
          <div className="mb-5">
            <h4 className="text-center ">Regulations:</h4>
          </div>
          <div className="column">
            <img className="mx-3" src={"/img/pdf.png"} alt="pdf symbol" style={{ height: 22, paddingBottom: 4}}/>
            <a href="localhost:3000/404">Jastrzębik Regulations - System</a>
          </div>
          <div className="column">
            <img className="mx-3" src={"/img/pdf.png"} alt="pdf symbol" style={{ height: 22, paddingBottom: 4}}/>
            <a href="localhost:3000/404">Jastrzębik Regulations - Creating and managing facilities</a>
          </div>
          <div className="column">
            <img className="mx-3" src={"/img/pdf.png"} alt="pdf symbol" style={{ height: 22, paddingBottom: 4}}/>
            <a href="localhost:3000/404">Jastrzębik Regulations - Renting facility</a>
          </div>

          <div className="my-5 pt-5">
            <h4 className="text-center ">Regulations templates for animators:</h4>
          </div>
          <div className="column">
            <img className="mx-3" src={"/img/word.png"} alt="word symbol" style={{ height: 22, paddingBottom: 4}}/>
            <a href="localhost:3000/404">Sport object regulations template #1 - MS Word format</a>
          </div>
          <div className="column">
            <img className="mx-3" src={"/img/writer.png"} alt="word symbol" style={{ height: 22, paddingBottom: 4}}/>
            <a href="localhost:3000/404">Sport object regulations template #1 - LibreOffice Writer format</a>
          </div>
          <div className="column">
            <img className="mx-3" src={"/img/word.png"} alt="word symbol" style={{ height: 22, paddingBottom: 4}}/>
            <a href="localhost:3000/404">Sport object regulations template #2 - MS Word format</a>
          </div>
          <div className="column">
            <img className="mx-3" src={"/img/writer.png"} alt="word symbol" style={{ height: 22, paddingBottom: 4}}/>
            <a href="localhost:3000/404">Sport object regulations template #2 - LibreOffice Writer format</a>
          </div>
        </div>
      </div>
    </>
  )
}
  
export default withRouter(Regulations);