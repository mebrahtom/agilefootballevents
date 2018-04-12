import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render((
    <App />
), document.getElementById('root'));
registerServiceWorker();
