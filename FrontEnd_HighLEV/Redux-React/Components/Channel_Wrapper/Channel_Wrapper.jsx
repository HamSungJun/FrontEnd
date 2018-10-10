import React from 'react';
import PropTypes from 'prop-types';

import ChannelOne from '../Channels/Channel_1.jsx';
import ChannelTwo from '../Channels/Channel_2.jsx';
import ChannelThree from '../Channels/Channel_3.jsx';

const ChannelWrapper = (props) => {

    return(

        <div className="Channel-Wrapper">
            <h2>Channel-Wrapper Level</h2>
            <ChannelOne BColor={props.ChannelOne} />
            <ChannelTwo BColor={props.ChannelTwo} />
            <ChannelThree BColor={props.ChannelThree} />

        </div>

    )
};

ChannelWrapper.defaultProps = {
    ChannelOne : "Channels.ChannelOne is Undefined",
    ChannelTwo : "Channels.ChannelTwo is Undefined",
    ChannelThree : "Channels.ChannelThree is Undefined"
};

ChannelWrapper.propTypes = {
    ChannelOne : PropTypes.string,
    ChannelTwo : PropTypes.string,
    ChannelThree : PropTypes.string
};

export default ChannelWrapper;