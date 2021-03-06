const mongoose = require('mongoose');
const fs = require('fs');
const internal = require('stream');
const bcrypt = require('bcryptjs');

const makeHash = (the_str, salt) => {
    let hash = bcrypt.hashSync(the_str, salt, (err, my_hash) => {return my_hash;});
    return hash;
};

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
    salt: String,
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
    res.cookie('beenToSiteBefore', new Date(), 99999);
    
    let timeLastVisited = new Date(req.cookies.beenToSiteBefore).toLocaleTimeString();
    let dateLastVisited = new Date(req.cookies.beenToSiteBefore).toLocaleDateString();

    res.render('index', {
        title: 'Home',
        lastTimeVisited: timeLastVisited,
        lastDateVisited: dateLastVisited
    });
};

exports.submitted = (req, res) => {
    let salt = bcrypt.genSaltSync(10, (err, salts) => {return salts;});
    let user = new Login({
        username: req.body.username,
        password: makeHash(req.body.password, salt),
        salt: salt,
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
    Login.findOne({'username': req.body.username}, (err, login) => {
        if(!login){
            res.redirect('/login');
        } else {
            if(login.password == makeHash(req.body.password, login.salt)) {
                res.render('edit', {
                    title: 'Edit Person',
                    username: req.body.username
                });
            } else {
                res.redirect('/login');
            }
        }
    }); 
};

exports.editPage = (req, res) => {
    res.redirect('/');
}

exports.editLogin = (req, res) => {
    Login.findOne({'username': req.body.username}, (err, login) => {
        if(err) return console.error(err);
        login.username=req.body.username;
        login.email=req.body.email;
        login.age=req.body.age;
        login.questionOne=req.body.questionOne;
        login.questionTwo=req.body.questionTwo;
        login.questionThree=req.body.questionThree;
        login.save((err, login) => {
            if(err) return console.error(err);
            console.log(req.body.username + ' updated');
        });
        res.render('edit', {
            title: 'Edit Person',
            username: req.body.username
        });
    });
};

exports.api = (req, res) => {
    Login.find((err, person) => {
        res.json(person);
    });
};

exports.graph = (req, res) => {
    res.render('graph', {
        title: 'Question Statistics'
    });
};