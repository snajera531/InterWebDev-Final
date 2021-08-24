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

let Login = mongoose.model('Login_Collection', loginSchema);

exports.login = (req, res) => {
    res.render('login', {
        title: 'Log In'
    });
    res.redirect('edit');
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
    let user = new Login({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        age: req.body.age,
        questionOne: req.body.questionOne,
        questionTwo: req.body.questionTwo,
        questionThree: req.body.questionThree
    });
    user.save(err => {
        if(err) console.log(err);
        console.log("saved");
    });

    res.render('submitted', {
        title: 'Form Accepted',
        user
    });
};

exports.edit = (req, res) => {
    res.render('edit', {
        title: 'Edit Person',
        user
    });
};

exports.editLogin = (req, res) => {
    Login.findById(req.params.id, (err, login) => {
        if(err) return console.error(err);
        login.username=req.body.username;
        login.password=req.body.password;
        login.email=req.body.email;
        login.age=req.body.age;
        login.questionOne=req.body.questionOne;
        login.questionTwo=req.body.questionTwo;
        login.questionThree=req.body.questionThree;
        login.save((err, login) => {
            if(err) return console.error(err);
            console.log(req.body.name + ' updated');
        });
        res.redirect('/edit')
    });
};