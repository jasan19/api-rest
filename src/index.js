const express = require('express');
const morgan = require('morgan');
const cors= require('cors');
const app = express();



//settings
app.use(cors());
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    req.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// app.use(require('./routes/index'));
app.use(require('./routes/usuarios'));


const {createConnection} = require('./database');
createConnection();

//starting server
app.listen(app.get('port'), () => {
    console.log(`Server port on ${app.get('port')}`);
});