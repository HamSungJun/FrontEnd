import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import toggleApp from '../Redux_Implements/Reducer.js'

import './SharedStyle.css';
import App from './App.jsx';

let store = createStore(toggleApp);
let root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,root);

    