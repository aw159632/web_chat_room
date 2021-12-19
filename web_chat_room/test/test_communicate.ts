import  express, { Express, Request, Response } from 'express';
import { createServer } from "http";
import { io as Client, io } from "socket.io-client";
import { Server, Socket } from "socket.io";
import { assert } from "chai";
import { communicate_server_client } from "../unity/communicate";

describe("my awesome project", () => {
  const http = createServer();
  const io = new Server(http);

  it("testsetestetset", (done) => {
    // 建立 server
    const port = 3000;
    http.listen(port, () => {
      // 建立 client
      let client_socket_1 = Client(`http://localhost:${port}`);
      let client_socket_2 = Client(`http://localhost:${port}`);

      // server to client
      io.on("connection", (socket) => {
        communicate_server_client(io, socket);
        // socket.on('chat_message', (msg: string) => {
        //   io.emit('chat_message', msg);
        // });
      });
      // client to server
      client_socket_1.emit('chat_message', "hola");    
      client_socket_2.on('chat_message', (msg: string) => {
        assert.equal(msg, "hola");
        io.close();
        client_socket_1.close();
        client_socket_2.close();
        done();
      });
    });
  });
});