import * as types from '../constants/ActionTypes';  

let nextMessageID = 0;
let nextUserID = 0;

export const addMessage = (message, author) => ({
    type : types.ADD_MESSAGE,
    message
})

export const recieveMessage = (message, author) => ({
    type : types.MESSAGE_RECIEVED,
    id:nextMessageID++,
    message,
    author
})
