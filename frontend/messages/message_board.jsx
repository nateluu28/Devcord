import React from 'react';
import MessageForm from './message_form';

class MessageBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
    this.bottom = React.createRef();
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          this.setState({
            messages: this.state.messages.concat(data.message)
          });
        },
        speak: function(data) {
          return this.perform("speak", data);
        }
      }
    )
  }

  render() {
    return (
      
    )
  }
}