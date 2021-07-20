import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }  
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
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
      <div className="signup-background">
        <div className="signup-container">
          <form onSubmit={this.handleSubmit} className="signup-form">
            <h2>Create an account</h2>
            {this.renderErrors()}
            <label>Email:
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                />
            </label>
              <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
              <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <br></br>
            <input type="submit" className="session-button" value={this.props.formType} />
            <br></br>
            <Link to='/login'>Already have an account?</Link>
          </form>
        </div>
      </div>
    )
  }
}

export default SignupForm;
