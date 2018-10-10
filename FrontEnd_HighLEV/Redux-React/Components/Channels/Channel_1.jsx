import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { TOGGLE__APP__LEVEL } from "../Redux_Implements/Actions";

class ChannelOne extends React.Component{

    render() {
        let channelOneStyle = {
            backgroundColor : this.props.ChannelOneColor
        };
        return (
            <div className="Channel-Elements" style={channelOneStyle}>
                <div className="Channel-One">
                    <h3>I am Channel One</h3>
                    <button onClick={this.props.toggleChannelApp} type="button">Toggle App-Level Color</button>
                </div>
            </div>
        );
    }
}

ChannelOne.defaultProps = {
    ChannelOneColor : undefined,
    toggleChannelApp : undefined
};

ChannelOne.propTypes = {
    ChannelOneColor : PropTypes.string,
    toggleChannelApp : PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        ChannelOneColor : state.ChannelOne
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleChannelApp(){
            dispatch(TOGGLE__APP__LEVEL())
        }
    }

};

ChannelOne = connect(mapStateToProps,mapDispatchToProps)(ChannelOne);

export default ChannelOne;