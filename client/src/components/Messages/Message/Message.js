import React, { useState } from 'react';
import EditIcon from './Assests/editIcon.png';
import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message, name , room, editMessage}) => {
  let isSentByCurrentUser = false;

  const[showEdit, setShowEdit] = useState(false);
  const [editText, setEditText] = useState('');

  const trimmedName = name.trim().toLowerCase();

  if(message.user === trimmedName) {
    isSentByCurrentUser = true;
  }

  const onMessageEdit = (e) => {
    setEditText(e.target.value);
  }
  return (
    isSentByCurrentUser
      ? message.room && message.room.toLowerCase() == room.toLowerCase() ?(
        
        <div className="messageContainer justifyEnd">
          {
            !showEdit ? 
              <>
                <p className="sentText pr-10">{trimmedName}</p>
                <div className="messageBox backgroundBlue">
                  <p className="messageText colorWhite">{ReactEmoji.emojify(message.text)}</p>
                </div>
                  { /* <img className='edit-icon' src={EditIcon} onClick={() => {
                    setEditText(message.text);
                    setShowEdit(true)
                  }}/> */}
              </> : <div className='edit-message'>
                      <input type='text' value={editText} placeholder='Type a message..' onChange={(e) => onMessageEdit(e)} />
                      <button className='cancel-edit' onClick={() => setShowEdit(false)}>Cancel</button>
                      <button className='save-message' onClick={ (e) => {
                        setShowEdit(false)
                        editMessage(e,editText, message.message_id)}
                      }>Save</button>
                    </div>
                      }
          
          
        </div>
        ) : (
          ''
        )
        : message.room && message.room.toLowerCase() == room.toLowerCase() ? (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(message.text)}</p>
            </div>
            <p className="sentText pl-10 ">{message.user}</p>
          </div>
        ) : (
          ''
        )
  );
}

export default Message;