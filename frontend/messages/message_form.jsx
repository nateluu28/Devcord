import React from 'react'; 
import { withRouter } from 'react-router-dom';
class MessageForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: '',
      channelId: null
    };
  }

  update(field) {
    return e => 
      this.setState({ [field]: e.currentTarget.value})
  }

  handleSubmit(e){
    e.preventDefault();
    // console.log('submit')
    // console.log(App.cable.subscriptions)
    let currentChannelId = this.props.match.params.channelId;
    App.cable.subscriptions.subscriptions.forEach(currentSub => {
      let sub_obj = JSON.parse(currentSub.identifier);
      
      if (sub_obj.channelId === currentChannelId){
        let message = { 
            body: this.state.body,
            author_id: this.props.currentUser.id,
            messageable_type: 'Channel',
            messageable_id: currentChannelId
          }
        currentSub.speak({message});
        this.setState({ body: "" });
        }
      })
  }


  render(){
    return (
      <div className='message-form'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder={`Message in this Channel!`}
          />
          <input type="submit" type="hidden"/>
        </form>
      </div>
    );
  }
}

export default withRouter(MessageForm);