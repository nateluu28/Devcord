import React from 'react';
import MessageFormContainer from './message_form_container';

class MessageBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      loading: true
    };
    this.bottom = React.createRef();
  }

  componentDidMount() {
    // creates a subscription to the specific action cable
    App.cable.subscriptions.create(
      { channel: "ChatChannel", channelId: this.props.channelId },
      {
        received: data => {
          console.log('receive')
          console.log(data);
          this.props.fetchMessages('Channel', this.props.channelId)
          
        },
        speak: function(data) {
          console.log('speak')
          return this.perform("speak", data);
        }
      }
      );
      // fetches messages data
      this.props.fetchMessages('Channel', this.props.channelId)
      .then(() => this.setState({loading: false}));
  }

  render() {
    let messageList;
    if (!this.props.loading) {
      let messages = Object.values(this.props.messages);
      messageList = messages.map(message => {
        return (
          <li key={message.id}>
            {message.body}
            {/* author_id {message.author_id} */}
            <div ref={this.bottom} />
          </li>
        )
      });
    }
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