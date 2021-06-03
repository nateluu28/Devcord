import React from 'react';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
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
    this.props.login(user);
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

  render (){
    return (
      <div className="session-container">
        <form onSubmit={this.handleSubmit}>
          <span className='welcome-span'>Welcome back!</span><br></br>
          <span className='secondary-welcome-span'>We're so excited to see you again!</span>
          {this.renderErrors()}
          <label>EMAIL OR PHONE NUMBER<br></br>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
              />
          </label>
            <br/>
          <label>PASSWORD<br></br>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <br></br>
          <input className='session-button' type="submit" value={this.props.formType} />
        </form>
      </div>
    )
  }
}

export default LoginForm;
