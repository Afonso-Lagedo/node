const express = require('express');//para usar o express

//Necessita de um servidor:
const server = express();

const cursos = ['Node JS', 'JavaScript', 'React', 'React Native'];//simulando dados salvos

server.get('/curso/:index', (req, res)=>{ // :index simulando id
    const {index} = req.params;
    return res.json(cursos[index]);
})

server.listen(3000);//definindo porta para servidor