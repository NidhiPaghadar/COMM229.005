/*
File Name - inventory.js
Student Name - Nidhiben Paghadar
Student ID - 301220138
*/

let mongoose = require('mongoose');

//create a model class

let inventoryModel = mongoose.Schema(
    {
        name :{
            type : String,
            require : true
        },
        number : {
            type : Number,
            require : true
        },
        email : {
            type : String,
            require : true
        }  
    
    },
    {
        collection: "inventory" 
    }
);

module.exports = mongoose.model('inventory',inventoryModel);