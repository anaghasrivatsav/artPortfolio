import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends Component{
  render()
  {
    return(
      <Router>
        <div>
          <Routes>
          <Route path="/landingpage" element={<LandingPage/>}/>
          </Routes>
        </div>
      </Router>
    );
  }
}


export default App;
