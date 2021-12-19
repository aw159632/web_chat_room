"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.communicate_server_client = void 0;
let communicate_server_client = function (io, socket) {
    socket.on("chat_message", (msg) => {
        // broadcasting api
        io.emit("chat_message", msg);
    });
};
exports.communicate_server_client = communicate_server_client;
// export let communicate_server_client = function(io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>){
//     let ret_msg;
//     socket.on("chat_message", (msg: string)=>{
//         // broadcasting api
//         io.emit("chat_message", msg);
//         ret_msg = msg;
//     });
//     return ret_msg;
// }
