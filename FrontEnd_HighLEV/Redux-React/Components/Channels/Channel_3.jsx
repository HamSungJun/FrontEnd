import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { TOGGLE__CHANNEL__WRAPPER__LEVEL } from '../Redux_Implements/Actions'

class ChannelThree extends React.Component{

    render() {
        let channelThreeStyle = {
            backgroundColor : this.props.channelThreeColor
        };
        return (
            <div className="Channel-Elements" style={channelThreeStyle}>
                <div className="Channel-Three">
                    <h3>I am Channel Three</h3>
                    <button onClick={this.props.toggleChannelWrapper} type="button">Toggle Channel-Wrapper Color</button>
                </div>
            </div>
        );
    }

}

ChannelThree.defaultProps = {
    channelThreeColor : undefined,
    toggleChannelWrapper : undefined
};

ChannelThree.propTypes = {
    channelThreeColor : PropTypes.string,
    toggleChannelWrapper : PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        channelThreeColor : state.ChannelThree
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        toggleChannelWrapper:()=>{
            dispatch(TOGGLE__CHANNEL__WRAPPER__LEVEL());
        }
    }
};

ChannelThree = connect(mapStateToProps , mapDispatchToProps)(ChannelThree);

export default ChannelThree;