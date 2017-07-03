import React, { Component } from 'react';
import ChatBox from '../ChatBox/ChatBox';
import ChatPanel from '../ChatPanel/ChatPanel';
import io from 'socket.io-client';
import './ChatApp.css';
const socket = io('http:localhost:3000');
class ChatApp extends Component {
  render() {
    console.log("Socket from Client: ", socket);

    return (
      <div>
        <ChatPanel />
        <ChatBox />
      </div>
    );
  }
}

export default ChatApp;
