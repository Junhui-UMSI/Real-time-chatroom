import React, { Component } from 'react';
import './ChatBox.css';
import ChatPanel from '../ChatPanel/ChatPanel';


const io = require('socket.io-client');
const socket = io();

class ChatBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleMessageEvent = this.handleMessageEvent.bind(this);
  }

  componentDidMount(){
    this.handleMessageEvent();
  }

  handleOnChange(ev){
    console.log("target: ",ev.target.value);
    this.setState({
      input: ev.target.value
    })
  }

  handleMessageEvent(){
    console.log("income received");
    socket.on('income_message', (message) => {
      console.log(message);
      this.props.newmessage = message
    })
  }


  handleOnSubmit(ev){
    ev.preventDefault();
    socket.emit('message', { message: this.state.input });
    this.setState({
      input: ''
    })
  }

  render() {
    return(
      <div>
        <ChatPanel />
        <section>
          <textarea form="user_input" className="input-textarea" onChange={this.handleOnChange}>

          </textarea>
          <form id="user_input">
            <button onClick={this.handleOnSubmit}>Submit</button>
          </form>
        </section>
      </div>
    );
  }
}

export default ChatBox;
