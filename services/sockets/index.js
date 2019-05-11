const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 8000;

let count=0;

io.on('connection', client => {
    console.log(`a user is connected: ${client.id}`);
    
    count++;
    console.log(`users: ${count}`);
    io.emit('user count', count);
    
    client.on('subscribeToTimer', interval => {
        console.log('client is subscribing to timer with interval', interval);

        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });

    client.on('disconnect', function(){
        console.log(`user disconnected ${client.id}`);
        
        count--;
        console.log(`users: ${count}`);
        io.emit('user count', count);
    });

    client.on('chat message', msg => {
        io.emit('chat message', `${msg}`);
    });
});

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});