const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const UserModel = require("./models/User");

const app = express();


app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    method: ['GET', 'POST'],
    credentials:true
}));
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/employees');


app.post('/register',(req, res)=>{
    const {name, email, password}=req.body;
    bcrypt.hash(password, 10)
    .then(hash =>{
        UserModel.create({name, email, password:hash})
        .then(user => {res.json("Success")
           console.log("Register Successfully!")})
        .catch(err => res.json(err))
    }).catch(error => res.json(error))
});


const verifyUser=(req, res, next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.json("Token is missing");
    }else{
        jwt.verify(token, 'jwt-secret-key', (err, decoded)=>{
            if(err){
                return res.json("Error with token")
            }else{
                if(decoded.role === 'admin'){
                    next();
                }else{
                    return res.json("Not Admin");
                }
            }
        })
    }
}


app.get("/dashboard", verifyUser, (req, res)=>{
    res.json("Success");
})



app.post("/login", (req, res)=>{
    const {email, password}=req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, (err, response)=>{
                if(response){
                    const token = jwt.sign({email: user.email, role: user.role}, "jwt-secret-key", {expiresIn:'1d'})
                    res.cookie('token', token);
                    return res.json({Status:"Success", role : user.role});
                }else{
                    return res.json({message:"The Password is incorrect"})
                }
            })
        }else {
            return res.json({message:"No Record Existed!"})
        }
    })
})


app.listen(4000, ()=>{
    console.log("Server is Running");
})