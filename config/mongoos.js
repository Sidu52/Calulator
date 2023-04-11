const mongoose=require('mongoose');
// Create url val for store localhost path
const url = 'mongodb://0.0.0.0:27017/todolistdata';
mongoose.set("strictQuery", false);
mongoose.connect(url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in mongooes!'));
db.once('open', () => {
    console.log('Database connected succ........');
});

module.exports=db;
