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
    App.cable.subscriptions.create(
      { channel: "ChatChannel", channelId: this.props.channelId },
      {
        received: data => {
          this.setState({
            messages: this.state.messages.concat(data['body'])
          });
        },
        speak: function(data) {
          return this.perform("speak", data);
        }
      }
    );
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
        <MessageFormContainer channelId={this.props.channelId} />
      </div>
    )
  }
}

export default MessageBoard;