import ChatBox from './component/ChatBox/ChatBox';
import ChatPanel from './component/ChatPanel/ChatPanel';

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const routes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Index</Link></li>
        <li><Link to="/panel">Panel</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={ChatBox}/>
      <Route path="/panel" component={ChatPanel}/>
    </div>
  </Router>
)


export default routes;
