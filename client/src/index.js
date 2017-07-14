import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import routes from './routes';
import './index.css';
import ChatBox from './component/ChatBox/ChatBox';
import ChatPanel from './component/ChatPanel/ChatPanel';

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/panel">Panel</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={ChatBox}/>
      <Route path="/panel" component={ChatPanel}/>
    </div>
  </Router>,
  document.getElementById('root')
);
