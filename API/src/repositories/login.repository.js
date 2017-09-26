let mongoClient = require('mongodb').MongoClient;

let loginRepository = class HomeRepository {

	constructor(req) {
		this.loginQuery = req.query;
	}

	get pageResults() {
		return new Promise((resolve, reject) => {
			mongoClient.connect(process.env.mongodburl, (err, db) => {
				if(err) {
					console.error(`Error connectiong to "login" collection : ${err}`);
					reject(err);
				} else {
					db.collection('login').find({name: this.loginQuery.name, password: this.loginQuery.password}).toArray((err, results) => {
						if(err) {
							console.error(`Error fetching from "login" collection: ${err}`);
							reject(err);
						} else {
							console.log(`Data in repository from "login" collection: ${results}`);
							resolve(results);
						}
					});
				}
				db.close();
			})
		});
	}

}

module.exports = loginRepository;