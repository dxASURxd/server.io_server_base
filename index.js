// Express server
const express = require('express');
const app = express();

// Create socket server
const server = require('http').createServer(app);

// Config socket server
const io = require('socket.io')(server);

// Deploy the public directory (client-side code)
app.use(express.static(__dirname + '/public'));

// Execute this when a client connects
// The 'socket' parameter represents the connected client
io.on('connection', (socket) => {
    // console.log(socket.id);

    // Emit a welcome message to the client along with the current date and time
    socket.emit('server-to-client', {
        msg: 'Hello world from the server',
        date: new Date(),
    });

    // Listen for messages sent by the client
    socket.on('client-to-server', (data) => {
        console.log(data);
    });

});

// Start the server and listen on port 8080
server.listen(8080, () => {
    console.log('server');
})