import express  from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';



const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});

io.on('connection', (socket) => {
    console.log('new connection');
    socket.on("send_msg", (data) => {
        console.log(data); 
    });
    
});

const listen = () => server.listen(3500, () => console.log(`Server listening on port 3500`));
 
server.on('error', (e: any) => {
    console.log('Error starting server:', e);
});

listen();
