
exports.init = function(io) {
  io.sockets.on('connection', function (socket) {
    try {
     // insert here your event
      socket.on('create or join', function (room, userId) {
        socket.join(room);
        chat.to(room).emit('joined', room, userId);
      });

    } catch (e) {
    }
  });
}
