import React from 'react';
import { connect } from 'react-redux';

import ChannelWrapper from '../Channel_Wrapper/Channel_Wrapper.jsx';

import {TOGGLE__CHANNEL__ONE, TOGGLE__CHANNEL__THREE} from "../Redux_Implements/Actions";

class App extends React.Component{

    render(){
        let AppStyle = {
            backgroundColor : this.props.channelAppColor
        };
        return(
            <div className="App" style={AppStyle}>
                <div className="App-Header">
                    <div className="App-Header__H1">
                        <h1>App-Level</h1>
                    </div>
                    <div className="App-Header__Btn">
                        <button onClick={this.props.toggleChannelOne} type="button">Toggle ChannelOne Color</button>
                    </div>
                    <div className="App-Header__Btn">
                        <button onClick={this.props.toggleChannelThree} type="button">Toggle ChannelThree Color</button>
                    </div>
                </div>

                <ChannelWrapper />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        channelAppColor : state.ChannelApp
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleChannelOne :() => {
            dispatch(TOGGLE__CHANNEL__ONE());
        },
        toggleChannelThree :() => {
            dispatch(TOGGLE__CHANNEL__THREE());
        }
    }
};

App = connect(mapStateToProps , mapDispatchToProps)(App);

export default App;