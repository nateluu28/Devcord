import React from 'react';

class ChannelItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return (
      <div>
        <h1>channel item {this.props.match.params.channelId}</h1>
      </div>
    )
  }
}

export default ChannelItem;