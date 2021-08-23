const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://urmom:gay@cluster0.mo9pt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', true);

let mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error'));
mdb.once('open', callback => {});

exports.login = (req, res) => {
    res.render('login', {
        title: 'Log In'
    });
};

exports.landing = (req, res) => {
    res.render('landing', {
        title: 'Welcome!'
    });
};

exports.logout = (req, res) => {
    res.render('logout', {
        title: 'Thank you for visiting!'
    });
    res.redirect('/login');
};