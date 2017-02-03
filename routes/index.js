/**
 *  Author: Taera Kwon (300755802)
 *  File Name: index.js
 *  Description: This is where all routing gets done
 */

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDay();
  res.render('index', { 
    title: "Taera Kwon's Express Portfolio Site",
    date: currentYear + "-" + currentMonth + "-" + currentDay
  });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About Me'});
});

/* GET projects page. */
router.get('/projects', (req, res, next) => {
  res.render('projects', { title: 'Projects'});
});

// Exports router object
module.exports = router;