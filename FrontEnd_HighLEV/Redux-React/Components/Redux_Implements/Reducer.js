import { TOGGLE_CHANNEL_ONE , TOGGLE_CHANNEL_THREE , TOGGLE_APP_LEVEL , TOGGLE_CHANNEL_WRAPPER_LEVEL } from "./Actions";

const initialState = {

    ChannelApp : 'palegreen',
    ChannelWrapper : 'white',
    ChannelOne : 'red',
    ChannelThree : 'blue'

};

const toggleColorReducer = (state = initialState , action) => {

    switch (action.type) {

        case TOGGLE_CHANNEL_ONE :
            return Object.assign({},state,{
                ChannelOne: (state.ChannelOne === 'red' ? 'tomato' : 'red')
            });

        case TOGGLE_CHANNEL_THREE :
            return Object.assign({},state,{
                ChannelThree: (state.ChannelThree === 'blue' ? 'cornflowerblue' : 'blue')
            });

        case TOGGLE_APP_LEVEL :
            return Object.assign({},state,{
                ChannelApp: (state.ChannelApp === 'palegreen' ? 'white' : 'palegreen')
            });

        case TOGGLE_CHANNEL_WRAPPER_LEVEL :
            return Object.assign({},state,{
                ChannelWrapper: (state.ChannelWrapper === 'white' ? 'palegreen' : 'white')
            });

        default :
            return state;
    }

};

const toggleApp = toggleColorReducer;

export default toggleApp;

