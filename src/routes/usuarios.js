const { Router } = require('express');
const router = Router();

const usuarios = require('../example.json');


router.get('/',(req,res) => {
    res.json(usuarios);
});

router.post('/',(req,res) => {
    const { nombre, email, puesto,fecha_nac} = req.body;
    
    if(nombre && email && puesto && fecha_nac){
        const id = usuarios.length +1;
        const newUsuario = {id,...req.body};
        usuarios.push(newUsuario);
        res.json(usuarios);
    }else{
        res.status(500).json({error:"ocurrio un error"});
    }
});

router.delete('/:id', (req,res) => {
    console.log(req.params);
    res.send('deleted');
})

module.exports = router;