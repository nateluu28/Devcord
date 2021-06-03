import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Switch } from 'react-router';

const App = () => (
  <div className='app'>
    <h1>Devcord</h1>
    <GreetingContainer />
    <Switch>
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      {/* <ProtectedRoute path='/any-serversormessages' component={SignupFormContainer} /> */}
    </Switch>
  </div>
);

export default App;