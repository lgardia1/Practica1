//Importo las variables de entorno
import dotenv from 'dotenv';
dotenv.config();
//Importo express
import app from './src/express/app.js';
//Importo servidor http de la libreia  de node
import http from 'node:http';
//Importo socket io
import { Server }  from 'socket.io';
//Controlador de socket
import IoController from '/src/socket/IoController.js';

//Aqui le implemento a servidor http el express para trabajar mejor con express
const server = http.createServer(app);

//Aqui le paso la referencia de nuestro servidor a socket io para poder controlar 
//las conexiones con socket
const io = new Server(server);

ioContrller = new IoController(io);

//Eschamos por el servidor
const PORT = process.env.PORT ?? 3000;
server.listen(PORT , ()=> {
    console.log(`Servidor disponible en: ${PORT}`)
})
