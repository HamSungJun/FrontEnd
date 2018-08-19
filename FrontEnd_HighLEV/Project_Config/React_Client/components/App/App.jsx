import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import TopBar from './Topbar.jsx'
import TextField from './TextField.jsx'

const App = () => {
    return(
        <div className="App-Block">
            <div className="App-Block__TopBar">
                <TopBar />
            </div>
            <div className="App-Block__TextField">
                <TextField />
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
