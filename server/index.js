const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const { mongoose } = require('./database');
 
//Settings:
app.set('port', process.env.PORT || 3000);
 

// //Middlewares:
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

// //Rputes:
app.use('/api/minimo',require('./routes/routes'));

//Start:
app.listen(3000, () =>{

    // console.log('escuchamos en el 3000 jijiji');
});