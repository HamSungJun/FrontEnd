import React from 'react';
import PropTypes from "prop-types";

class ChannelOne extends React.Component{

    constructor(props){
        super(props)
    }

    render() {
        let channelOneColor = {
            backgroundColor : this.props.BColor
        }
        return (
            <div className="Channel-Elements" style={channelOneColor}>
                <div className="Channel-One">
                    <h3>I am Channel One</h3>
                    <button type="button">Toggle App-Level Color</button>
                </div>
            </div>
        );
    }
}

ChannelOne.defaultProps = {
    BColor : undefined,
};

ChannelOne.propTypes = {
    BColor : PropTypes.string,
};


export default ChannelOne;