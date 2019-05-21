import openSocket from 'socket.io-client';
export const socket = openSocket('https://study-live.herokuapp.com');

function subscribeToTimer(cb) {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer', 1000);
}

export { subscribeToTimer }