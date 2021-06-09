import React from 'react';
import MessageFormContainer from './message_form_container';

class MessageBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
    this.bottom = React.createRef();
  }

  componentDidMount() {
    // creates a subscription to the specific action cable
    App.cable.subscriptions.create(
      { channel: "ChatChannel", channelId: this.props.channelId },
      {
        received: data => {
          this.setState({
            // change this later for redux
            messages: this.state.messages.concat(data['body'])
          });
        },
        speak: function(data) {
          return this.perform("speak", data);
        }
      }
    );
    // fetches messages data
  }


  render() {
    const messageList = this.state.messages.map(message => {
      return (
        <li key={message.id}>
          {message}
          <div ref={this.bottom} />
        </li>
      )
    });
    return (
      <div>
        <div>MessageBoard</div>
        <div>{messageList}</div>
        <MessageFormContainer  />
      </div>
    )
  }
}

export default MessageBoard;