let SignupRepository = require('../repositories/signup.repository');

let signupService = (req, res) => {
	new SignupRepository(req).pageResults
		.then((results) => {
			console.log(`Data in service from "signup" collection: ${results}`);
			res.send(results);
			// res.redirect('/home');
		})
		.catch((err) => {
			console.error(`Error fetching in service from "signup" collection: ${err}`);
		})
	
	// res.close();
}

module.exports = signupService;