import React from 'react';
import PropTypes from "prop-types";

class ChannelThree extends React.Component{

    constructor(props){
        super(props)
    }

    render() {
        let channelThreeColor = {
            backgroundColor : this.props.BColor
        }
        return (
            <div className="Channel-Elements" style={channelThreeColor}>
                <div className="Channel-Three">
                    <h3>I am Channel Three</h3>
                    <button type="button">Toggle Channel-Wrapper Color</button>
                </div>
            </div>
        );
    }
}

ChannelThree.defaultProps = {
    BColor : undefined,
};

ChannelThree.propTypes = {
    BColor : PropTypes.string,
};

export default ChannelThree;