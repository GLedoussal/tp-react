import io from 'socket.io-client'

const ws = io('http://lonestone.studio:3000');

ws.on('error', error => console.error("Error connecting to Websocket", error));

export default ws;
