import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import ServerContainer from '../server/server_container';

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
            <a href='#'>Download for Mac</a>
            <a href='#'>Open Discord in your Browser</a>
          </div>
        </div>
    </div>
  );

  const loggedPage = () => (
    <div>
      <GreetingContainer />
      <h1>WELCOME YOU ARE LOGGED IN !</h1>
      {/* server container etc.... */}
      <ServerContainer />
    </div>
  )

  return currentUser ? loggedPage() : splashPage();
};


export default HomePage