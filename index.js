const express = require('express');
const pug = require('pug');
const routes = require('./routes/routes');
const path = require('path');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

let salt = bcrypt.genSaltSync(10);

const makeHash = the_str => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(the_str, salt, (err, my_hash) => {
            console.log(my_hash);
            hashComplete(my_hash);
        });
    });
};

const hashComplete = the_hash => {
    bcrypt.compare('', the_hash, (err, res) => {
        console.log(res);
    });
    bcrypt.compare('', the_hash, (err, res) => {
        console.log(res);
    });
};

// app.set('view engine', 'pug');
// app.set('views', __dirname + '/views');
// app.use(express.static(path.join(__dirname, '/public')));

// let urlencodedParser = express.urlencoded({
//     extended: false
// });

app.use(cookieParser());

let myString = 'Bob';

let visited = 0;

app.get((req, res) => {
    visited++;
    
    res.cookie('visited', visited, {maxAge: 99999999999999999999999999});    
    res.cookie('stuff', myString, {maxAge: 99999999999999999999999999});  

    if(req.cookies.beenToSiteBefore == 'yes'){
        res.send(`You have visited here ${req.cookies.visited} times`)
    }else{
        res.cookie('beenToSiteBefore', 'yes', {maxAge: 99999999999999999999999999});  
        res.send('this is your first time here')
    }
});

app.get('/', routes.index);
app.get('/landing', routes.landing);
app.get('/login', routes.login);
app.get('/logout', routes.logout);


app.listen(3000);