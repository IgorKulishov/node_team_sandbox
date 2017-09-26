let express = require('express'),
	router = express.Router(),
	homeService   = require('../services/home.service'  ),
	loginService  = require('../services/login.service' ),
	signupService = require('../services/signup.service');

router.get('/home',  homeService);
router.get('/login', loginService);
router.get('/signup', signupService);

module.exports = router;
