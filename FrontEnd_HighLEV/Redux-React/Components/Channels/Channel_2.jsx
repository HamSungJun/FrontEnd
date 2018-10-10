import React from 'react';
import PropTypes from "prop-types";


class ChannelTwo extends React.Component{

    constructor(props){
        super(props)
    }

    render() {
        let channelTwoColor = {
            backgroundColor : this.props.BColor
        }
        return (
            <div className="Channel-Elements" style={channelTwoColor}>
                <div className="Channel-Two">
                    <h3>I am Channel Two</h3>
                </div>
            </div>
        );
    }
}

ChannelTwo.defaultProps = {
    BColor : undefined,
};

ChannelTwo.propTypes = {
    BColor : PropTypes.string,
};

export default ChannelTwo;