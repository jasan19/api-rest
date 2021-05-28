const { Router } = require('express');
const router = Router();

const { getUsers, createUsers, getUser} = require('../controllers/user.controller');
router.get('/usuarios',getUsers);
router.get('/usuarios/:id',getUser);
router.post('/usuarios',createUsers);

// router.post('/',(req,res) => {
//     const { nombre, email, puesto,birthday} = req.body;
    
//     if(nombre && email && puesto && birthday){
//         const id = usuarios.length +1;
//         const newUsuario = {id,...req.body};
//         usuarios.push(newUsuario);
//         res.json(usuarios);
//     }else{
//         res.status(500).json({error:"ocurrio un error"});
//     }
// });

router.delete('/:id', (req,res) => {
    console.log(req.params);
    res.send('deleted');
})

module.exports = router;