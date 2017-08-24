import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


setInterval(() => {
    render(
        <h1>Date: {Date()}</h1>,
        document.getElementById('root')
    ), 1000
});

setInterval(() => {
    render(
        <h1>Date: {Date()}</h1>,
        document.getElementById('root2')
    ), 1000
});