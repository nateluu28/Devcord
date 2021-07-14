// import React from 'react';
// import ChannelContainer from '../channel/channel_container';
// class ServerItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = ({
//       id: null
//     })
//   }

//   componentDidMount() {
//     const id = this.props.match.params.serverId;
//     this.setState({ id: id });
//   }

//   render() {
//     let serverId = this.state.id;
//     return ( 
//       <div> 
//         <h1>Server Item {serverId}</h1>
//         <ChannelContainer serverId={serverId} />
//       </div>
//     )
//   }
// }

// export default ServerItem;