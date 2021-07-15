import React from 'react';
import ServerContainer from '../server/server_container';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';
import SettingBarContainer from '../setting_bar/setting_bar_container';

const HomePage = ({ currentUser }) => {
  const splashPage = () => (
    <div className='homepage'>
        <GreetingContainer />
        <div className='header-message'>
          <h1>
          IMAGINE A PLACE...
          </h1>
          <br></br>
          <span>
            ...where you can belong to a school club, a gaming group, 
            or a worldwide art community. Where just you and a handful 
            of friends can spend time together. A place that makes it 
            easy to talk every day and hang out more often.
          </span>
          <div className='header-buttons'>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up Today!</Link>
          </div>
        </div>
    </div>
  );

  const loggedPage = () => (
    <div className="home-page">
      <ServerContainer />
      <div className="home-list">
        <div className="home-container">
          <h3>Home</h3>
        </div>
        <SettingBarContainer />
      </div>
      <div className="welcome-container">
        <p>
          Welcome to Devcord! This is a place where you can connect and message 
          with other developers with simliar tastes! Feel free to join other servers
          and message through the channels within the Devcord community!
        </p>
      </div>
      {/* This is where the direct messages will be  */}
    </div>
  )

  return currentUser ? loggedPage() : splashPage();
};


export default HomePage