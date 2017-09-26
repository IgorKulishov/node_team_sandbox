let express = require('express'),
	app = express(),
	router = require('./src/controllers/routes');

process.env = {PORT: process.env.PORT || 3000};

app.use('/', router).listen(process.env.PORT, (err) => {
	if(err) {
		console.log('Error: ', err);
	} else {
		console.log('Running on port ', process.env.PORT);
	}
});


// console.log('<============================>');

// const fs = require('fs');
// const cache = {};
// function inconsistentRead(filename, callback) {
//     if(cache[filename]) {

//         callback(cache[filename]);
//     } else {
//         //asynchronous function
//           cache[filename] = fs.readFileSync(filename, 'utf8');
//           callback(cache[filename]);
//     }
// }

// function createFileReader(filename) {
//     const listeners = [];
//     inconsistentRead(filename, value => {
//         listeners.forEach(listener => listener(value));
//     });

//     return {
//         onDataReady: listener => listeners.push(listener)
//     };
// }

// const fileName="data.txt";
// const reader1 = createFileReader(fileName);
// reader1.onDataReady(data => {
//     console.log('First call data: ' + data);
//     //...sometime later we try to read again from
//     //the same file
//     const reader2 = createFileReader(fileName);
//     reader2.onDataReady( data => {
//         console.log('Second call data: ' + data);
//     });
// });

const EventEmitter = require('events');
const myEmitter = new EventEmitter();
console.log(myEmitter)

// console.log('<============================>');