let mongoClient = require('mongodb').MongoClient;

let signupRepository = class HomeRepository {

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
					db.collection('login').insert(
						{name: this.loginQuery.name, password: this.loginQuery.password},
						{upsert: true},
						(err, results) => {
							if(err) {
								console.error(`Error fetching from "login" collection during signup: ${err}`);
								reject(err);
							} else {
								resolve(results.ops);
							}
					});
				}
				db.close();
			});
		});
	}

}

module.exports = signupRepository;