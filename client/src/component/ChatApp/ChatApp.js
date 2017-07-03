import React, { Component } from 'react';
import ChatBox from '../ChatBox/ChatBox';
import ChatPanel from '../ChatPanel/ChatPanel';
import './ChatApp.css';

class ChatApp extends Component {
  render() {
    return (
      <div>
        <ChatPanel />
        <ChatBox />
      </div>
    );
  }
}

export default ChatApp;
