const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
require('dotenv').config();

app.get('/',(req,res)=>{
 res.json({message:"Hello from the nodemon server!"});
})

app.listen(3001,'localhost', () => {
    console.log(`Server is running on http://localhost:3001`);
});

mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log("connected to mongoDB"))
    .catch((err)=>console.error('could not connect to mongoDB',err));
