import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Route, Switch } from 'react-router';
import HomePageContainer from './homepage/homepage_container';
import ServerItem from './server/server_item';
import ChannelItem from './channel/channel_item';
import NoMatch from './nomatch/nomatch';
import ServerContainer from './server/server_container';

const App = () => (
  <div className='app'>
    <Switch>
      <Route exact path='/' component={HomePageContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <ProtectedRoute path='/servers/:serverId/channels/:channelId' component={ChannelItem} />
      <ProtectedRoute path='/servers/:serverId' component={ServerItem} />
      <Route path='*' component={NoMatch} />
    </Switch>
  </div>
);

export default App;