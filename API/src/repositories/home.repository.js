let mongoClient = require('mongodb').MongoClient;

let homeRepository = class HomeRepository {

	constructor(pageInfo) {
		this.homeResults = pageInfo;
	}

	get pageResults() {
		let pageResults = {page: 'default page'};
		return new Promise((resolve, reject) => {
			mongoClient.connect(process.env.mongodburl, (err, db) => {
				if(err) {
					console.error(`Error connectiong DB: ${err}`);
					reject(err);
				} else {
					db.collection('homepage').find({}).toArray((err, results) => {
						if(err) {
							console.error(`Error fetching data from DB: ${err}`);
							reject(err);
						} else {
							console.log(`Data from DB: ${results}`);
							resolve(results);
						}
					});
				}
				db.close();
			})
		});
	}

}

module.exports = homeRepository;