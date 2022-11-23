const express = require('express');//para usar o express

//Necessita de um servidor:
const server = express();

//Para enviar JSON
server.use(express.json());

const cursos = ['Node JS', 'JavaScript', 'React', 'React Native'];//simulando dados salvos

//Middlewares global
server.use((req, res, next)=>{ //next: continuidade de fluxo
    console.log(`URL CHAMADA: ${req.url}`);
    return next();//para não para a aplicação
});

//Middlewares em forma de função
function verificaCurso(req, res, next){
    if(!req.body.name){
        return res.status(400).json({error:"nome obrigatório"});
    }

    return next();
}

function verificaIndex(req, res, next){
    const curso = cursos[req.params.index];

    if(!curso){
        return res.status(400).json({error:"index não existe"});
    }

    req.curso = curso;

    return next();
}

//GET unidade
server.get('/cursos/:index',verificaIndex, (req, res)=>{ // :index simulando id
    /*const {index} = req.params;
    return res.json(cursos[index]);*/
    return res.json(req.curso);
})

//GET coletivo
server.get('/cursos', (req, res)=>{
    return res.json(cursos);
});

//POST
server.post('/cursos', verificaCurso ,(req, res)=>{
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

//PUT
server.put('/cursos/:index', verificaCurso, verificaIndex ,(req, res)=>{
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
})

//DELETE
server.delete('/cursos/:index', verificaIndex,(req, res)=>{
    const { index } = req.params;

    cursos.splice(index, 1);
    //return res.json(cursos);
    return res.json({message: "Deletado"});
})

server.listen(3000);//definindo porta para servidor