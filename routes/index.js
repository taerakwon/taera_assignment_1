/**
 *  Author: Taera Kwon (300755802)
 *  File Name: routes/index.js
 *  Description: This is where all routing gets done
 */

let express = require('express');
/* Rexpress Route */
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  /* To renter view */
  res.render('contents/index', { 
    greeting: "Hello My Name Is",
    title: "Home | Taera Kwon",
    name: 'Taera Kwon'
  });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  /* To renter view */
  res.render('contents/about', { title: 'About Me | Taera Kwon'});
});

/* GET projects page. */
router.get('/projects', (req, res, next) => {
  /* To renter view */
  res.render('contents/projects', { title: 'Projects | Taera Kwon'});
});

/* GET services page. */
router.get('/services', (req, res, next) => {
  /* To renter view */
  res.render('contents/services', { title: 'Services | Taera Kwon'});
});

/* GET contact me page. */
router.get('/contact', (req, res, next) => {
  /* To renter view */
  res.render('contents/contact', { title: 'Contact | Taera Kwon'});
});

// Exports router object
module.exports = router;