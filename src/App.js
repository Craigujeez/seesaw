import React from 'react';
import {useDispatch} from 'react-redux';
import axios from "axios";
import Routes from './config/routes';
import {signOut} from "./redux/actions/authActions"
import './styles/main.css';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.token;
  const logout = () => {
    signOut()(dispatch);
    return;
  }
  axios.defaults.baseURL = 'https://api-see-saw.herokuapp.com/v1';
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  
  const inactivityTime = () => {
    let time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function resetTimer() {
      clearTimeout(time);
      time = setTimeout(logout, 36000000);
      // 1000 milliseconds = 1 second
    }
  };
  window.onload = function () {
    inactivityTime();
  };
  return (
    <div className="App cairo">
      <Routes/>
    </div>
  );
}

export default App;
