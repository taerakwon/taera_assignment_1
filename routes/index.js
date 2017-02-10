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
    title: "Home | Taera Kwon",
    name: 'Taera Kwon'
  });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  /* To renter view */
  res.render('contents/about', { 
    title: 'About Me | Taera Kwon'
  });
});

/* GET projects page. */
router.get('/projects', (req, res, next) => {
  /* To renter view */
  res.render('contents/projects', { 
    title: 'Projects | Taera Kwon',
    project_progress_1: "Currently under Iteration #2 (Implementation stage)",
    project_progress_2: "Dynamic form has been created.  Need to create a servlet that connects to MySQL DB",
    project_progress_3: "This portfolio is the project!",
    project_completed_1:"VBA compared raw data from legacy SQL Server and compared to new SQL Server raw data.  VBA reduced approximately 30 Hours of working hours for analysts ",
    project_completed_2:"Click to view screenshot"
  });
});

/* GET services page. */
router.get('/services', (req, res, next) => {
  /* To renter view */
  res.render('contents/services', { 
    title: 'Services | Taera Kwon',
    service_1: "Unity 2D/3D",
    service_2: "Android and Windows Phone Development",
    service_3: "HTML 5 and CSS, AJAX, and MEAN",
    service_4: "Excel and Access VBA Macro",
    service_5: "C#, Java",    
    service_6: "HP UFT Automation",
    service_7: "HPQC"
  });
});

/* GET contact me page. */
router.get('/contact', (req, res, next) => {
  /* To renter view */
  res.render('contents/contact', { 
    title: 'Contact | Taera Kwon',
    email: "taerakwon@gmail.com"
  });
});

// Exports router object
module.exports = router;

