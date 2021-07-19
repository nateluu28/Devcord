import React from 'react';
import { isEmpty } from "lodash";
import { FaLinkedin,FaAngellist, FaGithub } from 'react-icons/fa';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

class ChannelBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      channelId: null
    }
  }

  componentDidMount(){
    this.props.fetchChannels(this.props.match.params.serverId)
        .then(() => this.setState({loading: false}));
  }

  componentDidUpdate(prevProps){
    // console.log("outside")
    // // debugger;
    
    // console.log(this.state.channelId)
    // console.log(this.props.match.params.channelId)
    if (this.state.channelId !== this.props.match.params.channelId){
      
      console.log("called")
      console.log(this.props.match.params.serverId);
      this.props.fetchChannels(this.props.match.params.serverId)
        .then(this.setState({ channelId: this.props.match.params.channelId }));
    }
  }

  render() {
    let channelName;
    if (!this.state.loading && this.state.channelId === this.props.match.params.channelId) {
      let channelObj = Object.values(this.props.channels).find(x=> x.id === parseInt(this.props.match.params.channelId));
      if (channelObj) channelName = channelObj.name;
    }
      
    return (
      <div className="channel-name"> 
        <div>
          <h1>
            {channelName}
          </h1>
        </div>
        <div className="social-links">
          <Tooltip TransitionComponent={Zoom}  title="LinkedIn">
            <a href="https://www.linkedin.com/in/nathan-luu/" target="_blank">
              <FaLinkedin size={30} className="social-links-items"/>
            </a>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="AngelList">
          <a href="https://angel.co/u/nathan-luu-1" target="_blank">
            <FaAngellist size={25} className="social-links-items"/>
          </a>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Github">
          <a href="https://github.com/nateluu28/Devcord/" target="_blank">
            <FaGithub size={25} className="social-links-items"/>
          </a>
          </Tooltip>
          {/* IoPersonCircle size={30} className="social-links-items"/> */}
        </div>
      </div>
    )
  }
}

export default ChannelBar;