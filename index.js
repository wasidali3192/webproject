const fs = require('fs')
const mongoose= require('mongoose')
const express = require('express')
const Login=require('./models/login')

//connect to database mangodb
const dbURI='mongodb+srv://login:login123@cluster0.vjgy1.mongodb.net/login?retryWrites=true&w=majority'
mongoose.connect(dbURI).then(()=>{
    console.log('connected to mongodb!')
}).catch((err)=>{
    console.log(err)
});
const cors = require('cors')
const app  = express()
const path = require('path')
app.use(express.json())

app.use(cors())

//mongoose and mongo sandbox routes

    app.post('/add-login', (req, res)=>{
        const payload = req.body;
        console.log(payload)
          const data=new Login({
            username:payload.username,
            password:payload.password
          });
          
          data.save()   
          .then((result)=>{
            res.send(result)

          })
          .catch((err)=>{
            console.log(err);
          })
    })
    //username:'user2',
    //password:'wasid@123'


    

app.get('/Static/login.html',(req,res)=>{
    return res.sendFile(path.join(__dirname, '/Static/login.html'));
})

app.get('/Static/client.js',(req,res)=>{
    return res.sendFile(path.join(__dirname, '/Static/client.js'));
})


app.get('/Static/avatar6.png',(req,res)=>{
    return res.sendFile(path.join(__dirname, '/Static/avatar6.png'));
})


app.post('/save',(req,res)=>{
    console.log('request received!')
    console.log(req.body)
    fs.appendFile('test.txt',JSON.stringify(req.body),(err)=>{
        if(err) {return console.log(err)}
        // return res.json({status:'success',message:'saved succesfully!'})

    })
    return res.json({status:'success',message:'saved succesfully!'})
})

app.listen('5000',()=>{
    console.log('Server up on 5000');
})