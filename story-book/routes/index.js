const { Router } = require('express');
const router = Router();

router.route('/').get(async (req, res, next) => {
  res.render('login');
});

router.route('/dashboard').get(async (req, res, next) => {
  res.render('dashboard');
});

module.exports = router;
