import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router } from 'react-router-dom';

const router = (
  <Router>
    <App />
  </Router>
)

ReactDOM.render(router, document.getElementById('root'));

serviceWorker.unregister();
