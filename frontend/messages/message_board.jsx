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
      console.log('mounted')
      // console.log(App.cable.subscriptions)
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
        // .then(this.bottom.current.scrollIntoView());
    }

    componentDidUpdate(prevProps) {
      if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
        console.log(App.cable.subscriptions.subscriptions.indentfiers);
        const identifier = App.cable.subscriptions.subscriptions.map(subs => JSON.parse(subs.identifier));
        console.log(identifier.channelId)

        // App.cable.subscriptions.create(
        // { channel: "ChatChannel", channelId: this.props.channelId },
        // {
        //   received: data => {
        //     this.props.fetchMessages('Channel', this.props.channelId)

        //   },
        //   speak: function(data) {
        //     return this.perform("speak", data);
        //   }
        // }
        // );
        this.props.fetchMessages('Channel', this.props.match.params.channelId)
        // .then(this.bottom.current.scrollIntoView());
      }
    }

    // componentWillUnmount() {
    //   if (App.room) {
    //     App.cable.subscriptions.remove(this.props.match.params.channelId);
      
    // }


  render() {
    console.log(this.props.match.params.channelId);
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
        // const firstMessage = messages[0];
        // messageList = messages.slice(1).reduce((acc, currMessage) => {
        //   let lastMessages = acc[acc.length - 1];
        //   let lastMessage = lastMessages[lastMessages.length - 1];
        //   if (lastMessage.author_id === currMessage.author_id) {
        //     lastMessages.push(currMessage);
        //     acc[acc.length - 1] = lastMessages;
        //   } else {
        //     acc.push([currMessage]);
        //   }
        //   return acc;
        // }, [
        //   [firstMessage]
        // ]);
        // // console.log(messageList);

        // let messageRender = messageList.map((group) => {
        //   return (
        //     <div>
        //       {this.renderMessages}
        //     </div>
        //   );
        // });

        // return ( 
        // <div>{messageRender}</div>
        // )
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