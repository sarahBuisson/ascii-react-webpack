
import Mower from './components/Mower.jsx';
import React from "react";
import ReactDOM from "react-dom";

console.log("hello web")
const wrapper = document.getElementById("my-app");
wrapper ? ReactDOM.render(<Mower />, wrapper) : false;
