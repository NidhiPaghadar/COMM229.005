/*
File Name - index.js
Student Name - Nidhiben Paghadar
Student ID - 301220138
*/



exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
}

exports.projects = function(req, res, next) {
    res.render('index', { title: 'Projects' });
}

exports.about = function(req, res, next) {
    res.render('index', { title: 'About' });
}

exports.services = function(req, res, next) {
    res.render('index', { title: 'Services' });
}

exports.contact = function(req, res, next) {
    res.render('index', { title: 'Contact Me' });
}