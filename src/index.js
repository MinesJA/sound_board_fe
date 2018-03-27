import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import 'react-rangeslider/lib/index.css'
import 'rc-slider/assets/index.css';
import './Styling/Inputs.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
