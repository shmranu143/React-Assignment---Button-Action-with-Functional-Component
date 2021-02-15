import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [isClicked,setClick]=useState(false);
  const handleClick=()=>{
    setClick({isClicked:true})
  }
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <button id="click" onClick={handleClick}>click me</button>
      {isClicked && <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    </div>
  );
}


export default App;
