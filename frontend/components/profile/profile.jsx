import React from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';
import {
  withRouter
} from 'react-router-dom';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack(){
    this.props.history.goBack();
  }

  render() {
    let randomId = Math.round(Math.random() * (999 - 100) + 100);
    return (
      <div className="profile-page">
        <div className="profile-container">
        <div className="exit-button" onClick={this.goBack}>
          <div>
            <FaRegTimesCircle size={36} />
          </div>
          <div>
            <h4>ESC</h4>
          </div>
        </div>
          <div className="profile-banner"></div>
          <div className="profile-img-banner">
            <img src="https://yt3.ggpht.com/ytc/AKedOLQc1OCf9gztVmcVnmI_41uN9axrRP8wd4a-GflFRQ=s900-c-k-c0x00ffffff-no-rj"></img>
            <div className="profile-main">
              <h3>
                {this.props.currentUser.username}
                <span>
                  #{this.props.currentUser.id}{randomId}
                </span>
              </h3>
              <button onClick={this.props.logout}>Log Out</button>
            </div>
          </div>
          <div className="profile-info">
            <div>
              <h4>USERNAME</h4>
              <h5>
                {this.props.currentUser.username}
                <span>
                  #{this.props.currentUser.id}{randomId}
                </span>
              </h5>                
            </div>
            <div>
              <h4>EMAIL</h4>
              <h5>{this.props.currentUser.email}</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;