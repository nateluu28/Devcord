import React from 'react';
import MessageBoard from '../../messages/message_board';

class ChannelItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>channel item {this.props.match.params.channelId}</h1>
        <MessageBoard />
      </div>
    )
  }
}

export default ChannelItem;