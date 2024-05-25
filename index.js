// Express server
const express = require('express');
const app = express();

// Create socket server
const server = require('http').createServer(app);

// Config socket server
const io = require('socket.io')(server);

// Deploy public directory (client)
app.use(express.static(__dirname + '/public'));

// When a client connect execute this log
// The 'socket' (could be 'clinet') parameter is understood as the client connected
io.on('connection', (socket) => {
    // console.log(socket.id);

    // emit is an event that is fired
    // the second argument is a palyload, an argument send at client
    socket.emit('server-to-client', {
        msg: 'Hello world from the server',
        date: new Date(),
    });

    socket.on('client-to-server', (data) => {
        console.log(data);
    });

});

server.listen(8080, () => {
    console.log('server');
})