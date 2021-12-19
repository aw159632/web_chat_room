import  express, { Express, Request, Response } from 'express';
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { communicate_server_client } from "./unity/communicate";

const app: Express = express();
const http = createServer(app);
const io = new Server(http);
const port = process.env.PORT || 3000;

app.get('/', (request: Request, response: Response) => {
    response.sendFile(__dirname + '/index.html')
});

http.listen(port, () => {
    console.log(`server is running on http://localhost:3000`)
});

// when receiving events
io.on("connection", (socket) => {
    communicate_server_client(io, socket)
});
