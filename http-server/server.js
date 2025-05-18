// import * as net from "node:net";
const net = require("node:net");

const newConn = (socket) => {
  console.info("socket new", socket.remoteAddress);
  socket.on("end", () => {
    // FIN received. The connection will be closed automatically.
    console.log("EOF.");
  });
  socket.on("data", (data) => {
    // data: Buffer
    console.log("data:", data);
    socket.write(data); // echo back the data.

    // actively closed the connection if the data contains 'q'
    if (data.includes("q")) {
      console.log("closing.");
      socket.end(); // this will send FIN and close the connection.
    }
  });
};

const server = net.createServer();

server.on("error", (e) => {
  console.error("e", e.cause);
});

server.on("connection", newConn);

server.listen({ port: 50, hostname: "127.0.0.1" });
