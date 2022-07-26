import express from 'express';
import __dirname from './utils.js';
const app = express();
const server = app.listen(8080,()=>console.log("Servidor corriendo en el puerto 8080"));

app.set('views',__dirname+'/views');
app.set('view engine','pug');

let users = [ 
    {name:'Juan',age:20},
    {name:'Pedro',age:30},
    {name:'Maria',age:40}
];



app.get('/',(req,res)=>{
   
    res.render('form.pug',{
        
    })
})