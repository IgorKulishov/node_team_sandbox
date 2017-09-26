let LoginRepository = require('../repositories/login.repository');

let loginService = (req, res) => {
	new LoginRepository(req).pageResults
		.then((results) => {
			console.log(`Data in service from "login" collection: ${results}`);
			res.send(results);
		})
		.catch((err) => {
			console.error(`Error fetching in service from "login" collection: ${err}`);
		})
	
	// res.close();
}

module.exports = loginService;