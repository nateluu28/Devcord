import React from 'react';
import MessageFormContainer from './message_form_container';
import {
  withRouter
} from 'react-router-dom';

class MessageBoard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        messages: [],
        loading: true
      };
      this.bottom = React.createRef();
    }

    componentDidMount() {
      // creates a subscription to the specific action cable
      App.cable.subscriptions.create({
        channel: "ChatChannel",
        channelId: this.props.channelId
      }, {
        received: data => {
          this.props.fetchMessages('Channel', this.props.channelId)

        },
        speak: function (data) {
          return this.perform("speak", data);
        }
      });
      // fetches messages data
      this.props.fetchMessages('Channel', this.props.match.params.channelId)
        .then(() => this.setState({
          loading: false
        }))

    }

    componentDidUpdate(prevProps) {
      if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
        const identifier = App.cable.subscriptions.subscriptions.map(subs => JSON.parse(subs.identifier));
        let channelIds = identifier.map(data => data.channelId);
        if (channelIds.indexOf(this.props.match.params.channelId) === -1){
          App.cable.subscriptions.create({
            channel: "ChatChannel",
            channelId: this.props.channelId
          }, {
            received: data => {
              this.props.fetchMessages('Channel', this.props.channelId)
  
            },
            speak: function (data) {
              return this.perform("speak", data);
            }
          });
          // fetches messages data
          this.props.fetchMessages('Channel', this.props.match.params.channelId)
            .then(() => this.setState({
              loading: false
            }))
        }

        this.props.fetchMessages('Channel', this.props.match.params.channelId)
      }
      if (this.bottom.current) {
        this.bottom.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
    }

  render() {
    let messageList;
    if (!this.props.loading) {
      let messages = Object.values(this.props.messages);
      messageList = messages.map(message => {
        return (
          <li key={message.id}>
            <b>user{message.author_id}</b>
            <br/>
            {message.body}
            <div ref={this.bottom} />
          </li>
        )
      });
    }

    return (
      <div className='message-board-container'>
        <div className="message-list">
          {messageList}
        </div>
        <MessageFormContainer  />
      </div>
    )
  }
}
  export default withRouter(MessageBoard);