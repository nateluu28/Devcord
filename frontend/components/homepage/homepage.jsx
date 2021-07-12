import React from 'react';
import ChannelContainer from '../channel/channel_container';
import ServerContainer from '../server/server_container';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';

const HomePage = ({ currentUser}) => {
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
    <div>
      {/* <GreetingContainer /> */}
      <ChannelContainer />
      <ServerContainer />
    </div>
  )

  return currentUser ? loggedPage() : splashPage();
};


export default HomePage