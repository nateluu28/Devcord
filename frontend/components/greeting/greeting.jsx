import React from 'react';
import { useHistory } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
  let history = useHistory();
  const sessionLinks = () => (
    <div className="header-container">
      <span>DEVCORD</span>
      <div className="header-links">
        <a href='#'>Download</a>
        <a href='#'>Nitro</a>
        <a href='#'>Safety</a>
        <a href='#'>Support</a>
      </div>
        <button 
          onClick={()=> history.push("/login")} 
          className="home-login-button">
          Login
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
