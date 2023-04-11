const express=require('express');
const routes=express.Router();
const  controller=require('../controllers/control');
// home
// console.log("this is routes")
routes.get('/',controller.home);
// Create
routes.post('/create',controller.create);
//Delete
routes.post('/delete/:id',controller.delete);

module.exports=routes;