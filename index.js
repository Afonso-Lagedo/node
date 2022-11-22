const express = require('express');//para usar o express

//Necessita de um servidor:
const server = express();

//Parâmetros(requisição, resposta)(1º: rota, 2º: função)

/*GET exemplo simples

server.get('/curso', () => {
    console.log('Acessou a rota!');
})

*/

/*GET res

server.get('/curso', (req, res)=>{
    return res.send('Olá mundo.');
})

*/

//GET JSON

server.get('/curso', (req, res)=>{
    return res.json({
        curso: 'Node JS'
    });
})


server.listen(3000);//definindo porta para servidor