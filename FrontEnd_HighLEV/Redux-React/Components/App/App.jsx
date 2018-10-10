import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import './SharedStyle.css';

import ChannelWrapper from '../Channel_Wrapper/Channel_Wrapper.jsx';

let root = document.getElementById('root');

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ChannelOne : 'red',
            ChannelTwo : 'green',
            ChannelThree : 'blue'
        }

        this.handleToggleChannelOne = this.handleToggleChannelOne.bind(this);
        this.handleToggleChannelThree = this.handleToggleChannelThree.bind(this);
    }

    handleToggleChannelOne(){
        if(this.state.ChannelOne === 'red'){
            this.setState({
                ChannelOne : 'tomato'
            })
        }
        else{
            this.setState({
                ChannelOne : 'red'
            })
        }

    }
    handleToggleChannelThree(){
        if(this.state.ChannelThree === 'blue'){
            this.setState({
                ChannelThree : 'cornflowerblue'
            })
        }
        else{
            this.setState({
                ChannelThree : 'blue'
            })
        }
    }
    render(){
        return(
            <div className="App">
                <div className="App-Header">
                    <div className="App-Header__H1">
                        <h1>App-Level</h1>
                    </div>
                    <div className="App-Header__Btn">
                        <button onClick={this.handleToggleChannelOne} type="button">Toggle ChannelOne Color</button>
                    </div>
                    <div className="App-Header__Btn">
                        <button onClick={this.handleToggleChannelThree} type="button">Toggle ChannelThree Color</button>
                    </div>
                </div>

                <ChannelWrapper
                    ChannelOne={this.state.ChannelOne}
                    ChannelTwo={this.state.ChannelTwo}
                    ChannelThree={this.state.ChannelThree}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />,root);