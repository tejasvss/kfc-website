const express=require('express');
const path=require('path');
const hbs=require('hbs');
const teja=express();

//Defining path for Express Config

const viewsPath=path.join(__dirname,'../templates/views');
const partialsPath=path.join(__dirname,'../templates/partials');
const stylesPath=path.join(__dirname,'../styles');


//Setting up Handlebars and Views locations
teja.set('view engine','hbs');
teja.set('views',viewsPath);
hbs.registerPartials(partialsPath);

//

teja.use(express.static(stylesPath))

teja.listen(3333,()=>{
    console.log("Server is started");
})
teja.get('',(req,res)=>{
    res.send("Welcome");
})
teja.get('/home',(req,res)=>{
    res.render('home',{
        
    })
})
teja.get('/contact',(req,res)=>{
    res.render('contact',{})
})
teja.get('/about',(req,res)=>{
    res.render('about',{})
})
teja.get('/tc',(req,res)=>{
    res.render('tc',{})
})
teja.get('*',(req,res)=>{
    res.render("404");
})
