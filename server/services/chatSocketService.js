module.exports = function(io){
  io.on('connection', (socket) => {

    socket.on('message', (message) => {
      console.log("I received a message from Client Side:  ", socket.id, " who says:  ", message);
      socket.broadcast.emit('income_message', message);
    })

    socket.on('leave_chat', (room) => {
      console.log("Someone just leave the chat: ", socket.id, " whose name is:  ", room);
    })

  });
}
