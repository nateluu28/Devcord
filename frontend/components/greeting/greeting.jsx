import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
  let history = useHistory();
  const sessionLinks = () => (
    <div className="header-container">
      <div className="left-container">
        <img src="https://logos-world.net/wp-content/uploads/2020/11/Discord-Emblem.png"></img>
        <span>DEVCORD</span>
      </div>
      <div className="header-links">
        <a href='https://github.com/nateluu28/Devcord/' target="_blank">Github</a>
        <a href='https://www.linkedin.com/in/nathan-luu/' target="_blank">LinkedIn</a>
        <a href='https://angel.co/u/nathan-luu-1' target="_blank">Angelist</a>
        {/* <a href='#' target="_blank">TODOResume</a> */}
      </div>
        <button 
          onClick={()=> history.push("/login")} 
          className="home-login-button">
          Open Devcord
        </button>
    </div>
  );
  const personalGreeting = () => (
    <div>
      <h2>Hi, {currentUser.username}!</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
