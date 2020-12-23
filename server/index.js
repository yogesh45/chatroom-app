const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

let messageId = 0;

app.use(cors());
app.use(router);

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    console.log('user', user.id, user.name);

    if(error) return callback(error);

    socket.join(user.room);

    io.to(user.room).emit('message', { user: 'admin', room:user.room,text: `${user.name} has joined!` });
    socket.emit('message', { user: 'admin', room:user.room,text: `${user.name}, welcome to room ${user.room}.`});

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit('message', { user: user.name, text: message, room : user.room,message_id:++messageId });
    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);
    if(user) {
      io.to(user.room).emit('message', { user: 'admin', room:user.room, text: `${user.name} has left!` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })

  socket.on('edit_message', ({message, messageId}) => {
      const user = getUser(socket.id);
      console.log(socket.id)
      console.log(user)
      if(user){
        socket.broadcast.to(user.room).emit('edited_message', {  text: message, message_id:messageId });
        io.to(user.room).emit('edited_message', { text: message, message_id:messageId });
      }
  })
});

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));