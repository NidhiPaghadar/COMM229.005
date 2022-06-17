/*
File Name - db.js
Student Name - Nidhiben Paghadar
Student ID - 301220138
*/


let DB_CONNECTION = "mongodb+srv://dbadmin:admin123@cluster001.ee4r7.mongodb.net/portfolioDB"

const { Console } = require('console');
//database setup
let mongoose = require('mongoose');



module.exports = function(){
    
    //connect to DB
    mongoose.connect(DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log("inside database");
    let mongoDB = mongoose.connection;
    mongoDB.on('error', console.error.bind(console,'connection error :  '));
    mongoDB.once('open',()=>{
        console.log('conected to MongoDB...');
    }) 

    return mongoDB;
}

