const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const port = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

server.listen(port, () => console.log(`Server has started on port ${port}`));
