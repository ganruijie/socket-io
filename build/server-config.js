let socketIo = require("socket.io");
let express = require("express");
let cxt = require("../src/service-server");


let httpPort = 9001;
let channelId = 1;
let app = express();

app.get("/", (req, res) => {
  res.send("start success:" + httpPort);
});

let server = require("http").createServer(app);
let io = socketIo(server);

io.on("connection", (socket) => {
  console.log("has client conniute....");
  cxt.createChannel(channelId++, socket);
});

server.listen(httpPort);
console.log("io listen success!!" + httpPort);