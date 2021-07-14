import React from "react";
import { MdHome, MdSettings } from 'react-icons/md';
class SettingBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="setting-bar">
        <h3>{this.props.currentUser.username}</h3>
        <div className="setting-icons-container">
          <MdHome className="setting-icons"  size={22}/>
          <MdSettings className="setting-icons" size={22}/>
        </div>
      </div>
    )
  }
}

export default SettingBar;