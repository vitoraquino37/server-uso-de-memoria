const http = require('http');
const host = 'http://localhost';
const port = 3000;
const status = require('./pcRamUsage');

const body = ('<body style="background-color:black;">');
const h1 = ('<h1 style="color:white;padding:30px;text-align:center">SEJA BEM VINDO</h1>');
const h3 = ('<h3 style="color:white;marginTop:50px;text-align:center">Adicione "/status" no final da url para visualizar o uso de mem&#243ria do computador</h3></body');

http.createServer((req, rest) => {
    let url = req.url;

    if(url === '/status'){
        rest.end(JSON.stringify(status, null, 2));
    } else {
        rest.end(body + h1 + h3);
    }
    
}).listen(port, () => console.log(`Server is running in ${host}:${port}`));

