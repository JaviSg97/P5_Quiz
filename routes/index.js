var express = require('express');
var router = express.Router();
const path = require('path');
const {models} = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'P5_Quiz' });
});

router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'Credits' });
});

router.get('/quizzes', function(req, res, next) {
  models.quiz.findAll()
        .then(quizzes => {
            res.render('quizzes',{quizzes: quizzes});
        })
});

module.exports = router;
