const express = require('express');//para usar o express

//Necessita de um servidor:
const server = express();

//GET JSON

/*Exemplo
Query Params = ?nome=NodeJS
Route Params = /curso/2
Request Body = { nomw: 'Nodejs', tipo: 'Backend' }
*/


/*
Exemplo 1

server.get('/curso', (req, res)=>{
    const nome = req.query.nome;
    
    return res.json({curso: `Aprendendo ${nome}`});
})

*/

server.get('/curso/:id', (req, res)=>{ // :id esperando um route params 
    const id = req.params.id;
    
    return res.json({curso: `Curso ID: ${id}`});
})


server.listen(3000);//definindo porta para servidor