import React, { Component }from 'react';
import './ChatPanel.css';

class ChatPanel extends Component {
  constructor(props){
    super();
  }

  render() {
    return(
      <div id="chat-result">
        <p>Display Results here.....</p>
      </div>
    );
  }
}
export default ChatPanel;
