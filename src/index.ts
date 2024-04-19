import express  from 'express';
import http from 'http';
import { Server } from 'socket.io';



const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('new connection');
});

const listen = () => server.listen(3500, () => console.log(`Server listening on port 3500`));
 
server.on('error', (e: any) => {
    console.log('Error starting server:', e);
});

listen();
