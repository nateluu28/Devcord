import React from 'react';

class MemberBoard extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className="member-container">
        <h2>ONLINE - 4</h2>
        <ul>
          <li>          
            <img src="https://yt3.ggpht.com/ytc/AKedOLQc1OCf9gztVmcVnmI_41uN9axrRP8wd4a-GflFRQ=s900-c-k-c0x00ffffff-no-rj"></img>
            <span>supernate28</span>
          </li>
          <li>          
            <img src="https://yt3.ggpht.com/ytc/AKedOLQc1OCf9gztVmcVnmI_41uN9axrRP8wd4a-GflFRQ=s900-c-k-c0x00ffffff-no-rj"></img>
            <span>demo</span>
          </li>
          <li>          
            <img src="https://i.pinimg.com/originals/07/da/56/07da565a70d3e5a9bab6fbf4970aa599.png"></img>
            <span>Peppa the Pig</span>
          </li>
          <li>          
            <img src="https://yt3.ggpht.com/ytc/AKedOLQc1OCf9gztVmcVnmI_41uN9axrRP8wd4a-GflFRQ=s900-c-k-c0x00ffffff-no-rj"></img>
            <span>Devin Booker</span>
          </li>
        </ul>
      </div>
    )
  }

}

export default MemberBoard;