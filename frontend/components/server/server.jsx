import React from 'react';
import { Link } from 'react-router-dom';


class Server extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.fetchServers()
      .then(() => this.setState({loading: false}));
    console.log(this.state);
  }

  render() {
    let serverNames;
    if (!this.props.loading) {
      let servers = Object.values(this.props.servers);
      serverNames = servers.map((server,i) => (

        // Create server index item in the future 
        // make it clickable

        <li>{server.name}</li>
      ));
    }


    return (
      <div>
        <span>
          servers!
        </span>
        {serverNames}
      </div>

    )
  }
}

export default Server;