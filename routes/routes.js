const mongoose = require('mongoose');
const fs = require('fs');
const internal = require('stream');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://urmom:gay@snajera.rzt08.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', true);

let mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error'));
mdb.once('open', callback => {});

let loginSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    age: Number,
    questionOne: String,
    questionTwo: String,
    questionThree: String
});


exports.login = (req, res) => {
    res.render('login', {
        title: 'Log In'
    });
};

exports.landing = (req, res) => {
    res.render('landing', {
        title: 'New User'
    });
};

exports.logout = (req, res) => {
    res.render('logout', {
        title: 'Thank you for visiting!'
    });
    res.redirect('/login');
};

exports.index = (req, res) => {
    res.render('index', {
        title: 'Home'
    });
};
exports.index = (req, res) => {
    res.render('index', {
        title: 'Home'
    });
};

exports.submitted = (req, res) => {
    let person = {
        name: req.body.name,

    };
    
    let personData = `
    <p>
    name: ${person.name}<br />
   
    ----------------------------------------
    </p>
    `;

    fs.writeFile('public/mytext.html', personData, err => {
        if(err) throw err;
        console.log('Data saved!');
    });

    res.render('submitted', {
        title: 'Form Accepted',
        person
    });
};