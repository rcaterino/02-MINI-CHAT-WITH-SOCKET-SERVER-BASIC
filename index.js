//Servidor de Express
const express = require("express");
const { addAbortSignal } = require("stream");
const app = express();

//Servidor de Socket
const server = require("http").createServer(app);

//Configuración del Socket Server
const io = require("socket.io")(server);

//Desplegar el directorio público
app.use(express.static(__dirname + "/public"));

//A continuación, con el método on, el servidor escucha lo que recibe del front-end
io.on("connection", (socket) => {
  /* … */
  console.log(socket.id);

  //A continuación, con el métido emit, emitimos información desde el servidor hacia el front-end
  //"mensaje-bienvenida" es el nombre del evento que queremos emitir.
  //el siguiente parametro es un objeto, lo hacemos con este ejemplo porque por lo general siempre queremos emitir desde el servidor mucha información

//   socket.emit("mensaje-bienvenida", {
//     msg: "Bienvenido al server",
//     fecha: new Date(),
//   });

  //escuchamos evento en el servidor
  socket.on("mensaje-cliente", (data) => {
    console.log(data);
  });
});

server.listen(8080, () => {
  console.log("Server corriendo en puerto :8080");
});
