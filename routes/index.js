//File: index.js
//Author : Nidhiben Paghadar 
//Student Id : 301220138

let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.home);

/* GET Project page. */
router.get('/projects', indexController.projects);

/* GET about page. */
router.get('/about', indexController.about);

/* GET services page. */
router.get('/services', indexController.services);

/* GET contact page. */
router.get('/contact', indexController.contact);



module.exports = router;
