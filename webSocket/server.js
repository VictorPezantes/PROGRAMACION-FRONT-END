const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
let vls=0;
wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
    });

    ws.send('Welcome to the WebSocket server!');

    const interval = setInterval(() => {
        ws.send('Mensaje desde el servidor' + String(vls));
        vls +=1;
    }, 5000); // Envia un mensaje cada 10 segundos


});


