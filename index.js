const express = require('express');//para usar o express

//Necessita de um servidor:
const server = express();

//Para enviar JSON
server.use(express.json());

const cursos = ['Node JS', 'JavaScript', 'React', 'React Native'];//simulando dados salvos

//GET unidade
server.get('/cursos/:index', (req, res)=>{ // :index simulando id
    const {index} = req.params;
    return res.json(cursos[index]);
})

//GET coletivo
server.get('/cursos', (req, res)=>{
    return res.json(cursos);
});

//POST
server.post('/cursos', (req, res)=>{
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

//PUT
server.put('/cursos/:index', (req, res)=>{
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
})

//DELETE
server.delete('/cursos/:index', (req, res)=>{
    const { index } = req.params;

    cursos.splice(index, 1);
    //return res.json(cursos);
    return res.json({message: "Deletado"});
})

server.listen(3000);//definindo porta para servidor