/*
File Name - local.js
Student Name - Nidhiben Paghadar
Student ID - 301220138
*/

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = function() {
    console.log('---> LocalStrategy function')
    
    passport.use(new LocalStrategy(authLocal));
};

async function authLocal(username, password, done){
    console.log('---> authLocal function');
    
    User.findOne({username: username}, (err, user)=>{
        console.log(username);
        if (err) {
            return done(err);
        }
        
        if (!user) {
            return done(null, false, { message: 'Unknown user' });
        }

        if (!user.authenticate(password)) {
            return done(null, false, { message: 'Invalid password'});
        }
        
        return done(null, user);
    });
}