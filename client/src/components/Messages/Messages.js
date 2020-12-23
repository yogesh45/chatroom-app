import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import './Messages.css';

const Messages = ({ messages, name, room, messageEdit }) => {
  console.log(messages)
  return(
  <ScrollToBottom className="messages">
    {messages.map((message, i) => <div key={i}><Message message={message} name={name} room={room} editMessage={messageEdit} /></div>)}
  </ScrollToBottom>
);
}

export default Messages;