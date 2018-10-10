import React from 'react';
import { connect } from 'react-redux';

import ChannelOne from '../Channels/Channel_1.jsx';
import ChannelTwo from '../Channels/Channel_2.jsx';
import ChannelThree from '../Channels/Channel_3.jsx';

let ChannelWrapper = (props) => {
    let WrapperStyle = {
        backgroundColor : props.channelWrapperColor
    };
    return(

        <div className="Channel-Wrapper" style={WrapperStyle}>
            <h2>Channel-Wrapper Level</h2>
            <ChannelOne  />
            <ChannelTwo  />
            <ChannelThree />

        </div>

    )
};

const mapStateToProps = (state) => {
    return {
        channelWrapperColor : state.ChannelWrapper
    }
};

ChannelWrapper = connect(mapStateToProps,undefined)(ChannelWrapper);

export default ChannelWrapper;