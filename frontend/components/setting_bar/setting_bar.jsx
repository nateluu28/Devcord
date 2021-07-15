import React from "react";
import { MdHome, MdSettings } from 'react-icons/md';
import { Link } from 'react-router-dom';
class SettingBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="setting-bar">
        <h3>{this.props.currentUser.username}</h3>
        <div className="setting-icons-container">
          <Link to="/">
            <MdHome className="setting-icons"  size={22}/>
          </Link>
          <Link to="/profile">
            <MdSettings className="setting-icons" size={22}/>
          </Link>
        </div>
      </div>
    )
  }
}

export default SettingBar;