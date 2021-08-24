const express = require('express');
const pug = require('pug');
const routes = require('./routes/routes');
const path = require('path');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const expressSession = require('express-session');

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

app.use(expressSession({
    secret: 'wh4t3v3r',
    saveUninitialized: true,
    resave: true
}));

const checkAuth = (req, res, next) => {
    if(req.session.user && req.session.user.isAuthenticated) {
        next();
    } else {
        res.redirect('/');
    };
};

let urlencodedParser = express.urlencoded({
    extended: false
});

app.post('/', urlencodedParser, (req, res) => {
    console.log(req.body.username);
    if(req.body.username == 'user' && req.body.password == 'pass') {
        req.session.user = {
            isAuthenticated: true,
            username: req.body.username
        };
        res.redirect('/private');
    } else {
        res.redirect('/');
    }
});

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '/public')));




app.use(cookieParser());

let myString = 'Visited: ';

let visited = 0;

app.get((req, res) => {
    visited++;
    
    res.cookie('visited', visited, {maxAge: 99999999999999999999999999});    
    res.cookie('stuff', myString, {maxAge: 99999999999999999999999999});  

    if(req.cookies.beenToSiteBefore == 'yes'){
        res.send(`You have visited here ${req.cookies.visited} times`);
    }else{
        res.cookie('beenToSiteBefore', 'yes', {maxAge: 99999999999999999999999999});
        res.send('this is your first time here');
    };
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', routes.index);
app.get('/landing', routes.landing);
app.get('/login', routes.login);
app.get('/logout', routes.logout);
app.post('/submitted', urlencodedParser, routes.submitted);

app.listen(3000);