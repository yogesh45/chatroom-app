import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import { connect } from "react-redux";
import Messages from '../Messages/Messages';
import {addMessage} from '../../actions/index';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import UsersList from '../UsersList/UsersList'

import './Chat.css';

const ENDPOINT = 'https://mychat-room-app.herokuapp.com/';

let socket;

const Chat = (props) => {
  console.log(props)
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [messageActionType, setMessageActionType] = useState('new');

  useEffect(() => {
    const { name, room } = queryString.parse(props.location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
      else if(room){
        if(props.messages){
          let tempMessages = []
          tempMessages =  messages.concat(props.messages);
          setMessages(tempMessages);
        }
      }
    });
  }, [ENDPOINT, props.location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
      if(message.user != 'admin'){
        props.addMessage(message);
      }
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    socket.on('edited_message',message => {
      if(message){
        let tempMessage = [...props.messages];
        let index = tempMessage.findIndex((msg) => msg.message_id == message.message_id);
        if(index){
          tempMessage[index].text = message.text;
          setMessages(tempMessage)
        }
        console.log(index);
      }
    })

    
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  const editMessage = (event, message, messageId) => {
    event.preventDefault();
    if(message) {
      socket.emit('edit_message', {message,messageId});
    }
  }
  
  return (
    <div className="outerContainer">
      <UsersList  users={users}/>
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} room={room} messageEdit={editMessage} />
          <Input message={message} actionType={messageActionType} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

const  mapDispatchToProps = (dispatch) => {
  return {
    addMessage: message => dispatch(addMessage(message))
  };
}

const mapStateToProps = (state) => {
  console.log(state)
  return {messages : state.messages}
}


export default connect(mapStateToProps, mapDispatchToProps)(Chat);