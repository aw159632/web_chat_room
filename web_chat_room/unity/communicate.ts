import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
 
export let communicate_server_client = function (io: { emit: (arg0: string, arg1: any) => void; }, socket: { on: (arg0: string, arg1: (msg: any) => void) => void; }) {
    socket.on("chat_message", (msg: any)=>{
        // broadcasting api
        io.emit("chat_message", msg);
    });
}

// export let communicate_server_client = function(io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>){
//     let ret_msg;
//     socket.on("chat_message", (msg: string)=>{
//         // broadcasting api
//         io.emit("chat_message", msg);
//         ret_msg = msg;
//     });
//     return ret_msg;
// }