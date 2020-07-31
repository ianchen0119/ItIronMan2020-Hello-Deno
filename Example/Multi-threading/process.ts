const { parentPort } = require('worker_threads');
let setting = require('./index.js')
let { a,b,MatrixC } = setting;
parentPort.once('message', (i) => {
	for (var j = 1; j<=35; j++) {
	let result = MatrixC(i,j);
	// console.log(`C[${i},${j}]:${result}`)
	}
});