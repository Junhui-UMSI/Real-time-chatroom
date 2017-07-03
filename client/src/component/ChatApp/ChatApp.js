import React, { Component } from 'react';
import ChatBox from '../ChatBox/ChatBox';
import './ChatApp.css';

class ChatApp extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <ChatBox />
      </div>
    );
  }
}

export default ChatApp;
