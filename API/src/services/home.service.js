let HomeRepository = require('../repositories/home.repository');

let homeService = (req, res) => {
	new HomeRepository().pageResults
		.then((results) => {
			console.log(`Data from connectiong DB: ${results}`);
			res.send(results);
		})
		.catch((err) => {
			console.error(`Error fetching data from DB in serivce: ${err}`);
		})
	
	// res.close();
}

module.exports = homeService;