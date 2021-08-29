import React from 'react';
import axios from "axios";
import Routes from './config/routes';
import './styles/main.css';
import './App.css';

function App() {
  axios.defaults.baseURL = 'https://api-see-saw.herokuapp.com/v1';
  return (
    <div className="App cairo">
      <Routes/>
    </div>
  );
}

export default App;
