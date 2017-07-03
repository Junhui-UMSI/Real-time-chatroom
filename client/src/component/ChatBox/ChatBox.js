import React, { Component } from 'react';
import './ChatBox.css';

class ChatBox extends Component {
  render() {
    return(
      <section>
        <textarea form="user_input" className="input-textarea">

        </textarea>
        <form id="user_input">
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
}

export default ChatBox;
