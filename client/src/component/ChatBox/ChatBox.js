import React, { Component } from 'react';
import './ChatBox.css';

class ChatBox extends Component {
  render() {
    return(
      <section>
        <form id="user_input">
        </form>
        <textarea form="user_input">
          Enter text here...
        </textarea>
      </section>
    );
  }
}

export default ChatBox;
