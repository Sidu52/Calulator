const express=require('express');
const { Server } = require('http');
const app=express();
const port=4000;
const path=require('path')
const db=require('./config/mongoos')

const stacticpath=path.join(__dirname,'/assests');
const viewspath=path.join(__dirname,'./frontend');

// Set view Engine and path
app.set('view engine','ejs');
app.set ('views',viewspath);

app.use(express.urlencoded({extended:true}));
app.use(express.static(stacticpath));

// Set Route
app.use('/',require('./routes/web'));

// Add listen for Run Server
app.listen(port,(err)=>{
    if(err){console.log("Err",err)}
    console.log("Server is run for port number ",port);
})