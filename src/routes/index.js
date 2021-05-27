const { Router } = require('express');
const router = Router();

const usuarios = require('../example.json');

router.get('/', (req,res) => {
    res.json(usuarios);
});



module.exports = router;