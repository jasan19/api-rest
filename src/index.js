const express = require('express');
const morgan = require('morgan');
const app = express();



//settings
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


// app.use(require('./routes/index'));
app.use(require('./routes/usuarios'));


const {createConnection} = require('./database');
createConnection();

//starting server
app.listen(app.get('port'), () => {
    console.log(`Server port on ${app.get('port')}`);
});