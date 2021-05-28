const {getConnection} = require('../database');
const {v4} = require('uuid');



const getUsers = (req,res) => {
    const users = getConnection().get('users').value();
    res.json(users);
}

const getUser = (req,res) => {
    const user = getConnection().get('users').find({id: req.params.id}).value();
    res.json(user);
}

const createUsers = (req,res) => {
    usuarios =  getConnection().get('users');
    const { nombre, email, puesto,birthday} = req.body;
    console.log(req.body);
    if(nombre && email && puesto && birthday){
        console.log(req.body);
        const id =  v4();
        const newUsuario = {id,...req.body};
        
        usuarios.push(newUsuario).write();
        res.json(usuarios);
    }else{
        res.status(500).json({error:"ocurrio un error"});
    }
}

module.exports = {
    getUsers,
    getUser,
    createUsers
}