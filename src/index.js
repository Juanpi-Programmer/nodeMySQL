const express = require('express');
const morgan = require('morgan');
const crud = require('./route/crud');
const user = require('./route/user');

const app = express();

// settings
app.set('port', process.env.PORT || 5000);

// middlewars 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/crud', crud);
app.use('/user', user);



// Start
app.listen(app.get('port'), () => {
    console.log('server on port:', app.get('port'));
});