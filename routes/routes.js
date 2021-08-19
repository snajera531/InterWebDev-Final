const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://admin:<AbC1234!>@cluster0.mo9pt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', true);

let mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error'));
mdb.once('open', callback => {});