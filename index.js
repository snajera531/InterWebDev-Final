const express = require('express');
const pug = require('pug');
const routes = require('./routes/routes');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

let urlencodedParser = express.urlencoded({
    extended: false
});


app.get('/', routes.index);

app.get('/landing', routes.landing);
//app.get('/landing', routes.landing);
app.get('/login', routes.login);
app.get('/logout', routes.logout);


app.listen(3000);