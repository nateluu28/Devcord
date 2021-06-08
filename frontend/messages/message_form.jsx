import React from 'react'; 

class MessageForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: ''
    };
  }

  update(field) {
    return e => 
      this.setState({ [field]: e.currentTarget.value})
  }

  handleSubmit(e){
    e.preventDefault();
    // look for a way to iterate through subscriptions 
    // Psuedo Code
    // App.cable.subscriptions.forEach(subs => {
      //   if (subs.identifier === currentChannel){
        //   }
        // })
    console.log(this.props);
    App.cable.subscriptions.subscriptions[0]
      .speak({ 
        body: this.state.body,
        author_id: this.props.currentUser.id,
        channel_id: this.props.channelId
      });
    this.setState({ body: "" });
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder="Type message here"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default MessageForm;