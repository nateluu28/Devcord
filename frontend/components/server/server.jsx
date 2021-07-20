import React from 'react';
import { Link } from 'react-router-dom';
import { FaDiscord } from 'react-icons/fa'

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
  }



  render() {
    let serverNames;
    if (!this.props.loading) {
      let servers = Object.values(this.props.servers);
      serverNames = servers.map((server,i) => (
        <li key={i}>
          <Link to={`/servers/${server.id}/channels/${server.firstChannelId}`}>
            {server.name.slice(0,2)}
          </Link>
        </li>
      ));
    }


    return (
      <div className='server-list'>
        <ul>
          <li><Link to="/" className="home-button"><FaDiscord /></Link></li>
          <hr></hr>
          {serverNames}
        </ul>
      </div>
    )
  }
}

export default Server;