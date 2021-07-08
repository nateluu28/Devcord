import React from 'react';
import { Link } from 'react-router-dom';
const DEMO_USER = {
  username: 'demo',
  email: 'demo@devcord.com',
  password: '123123'
};

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      demo: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setDemoLogin = this.setDemoLogin.bind(this);
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state.demo ? DEMO_USER : Object.assign({}, this.state);
    this.props.login(user);
  }

  setDemoLogin(e) {
    this.setState({
      demo: true
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.receiveErrors([]);
  }

  render (){
    return (
      <div className="session-background">
        <div className="session-container">
          <form onSubmit={this.handleSubmit} className="session-form">
            <span className='welcome-span'>Welcome back!</span>
            <span className='secondary-welcome-span'>We're so excited to see you again!</span>
            {this.renderErrors()}
            <label>EMAIL OR PHONE NUMBER
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                />
            </label>
            <label>PASSWORD
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <input className='session-button login-button' type="submit" value='Login' />
            <span>Need an account? <Link to="/signup">Register</Link> </span>
            <input className='session-button demo-button' type="submit" value='Demo Login' onClick={this.setDemoLogin} />
          </form>
        <div className="qr-container">
          <img src="https://i.imgur.com/BmSfNzx.png"></img>
          <h1>Log In with QR Code</h1>
        </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;
