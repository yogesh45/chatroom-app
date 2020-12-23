import { act } from 'react-dom/test-utils';
import * as types from '../constants/ActionTypes';

const messages = (state = [] , action) => {
    switch(action.type){
        case types.ADD_MESSAGE : 
        case types.MESSAGE_RECIEVED : 
            return (
                state.concat([
                    {
                        text : action.message.text,
                        id: action.id,
                        user : action.message.user,
                        room : action.message.room,
                        message_id : action.message.message_id
                    }
                ])
            )
        default : 
            return state;
    }
}

export default messages;