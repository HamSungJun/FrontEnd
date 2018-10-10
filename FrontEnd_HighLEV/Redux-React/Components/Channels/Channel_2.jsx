import React from 'react';

class ChannelTwo extends React.Component{

    render() {
        let channelTwoColor = {
            backgroundColor : 'green'
        };
        return (
            <div className="Channel-Elements" style={channelTwoColor}>
                <div className="Channel-Two">
                    <h3>I am Channel Two</h3>
                </div>
            </div>
        );
    }
}

export default ChannelTwo;