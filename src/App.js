import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Employee from "./pages/employee";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyJumbotron from "./components/Jumbotron";

function App() {
  return (
    <div>
      <MyJumbotron/>
      <Employee/>
    </div>
  );
}

export default App;
