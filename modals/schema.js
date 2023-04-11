const mongoose=require('mongoose');

// create schema which is contain name date and category
const todoshema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    }
});

const Todo=mongoose.model('Todo',todoshema);
module.exports=Todo;