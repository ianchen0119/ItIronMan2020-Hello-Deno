const { Worker } = require('worker_threads');
let finaltime = 0;
async function run(){
	for (var i = 1; i<=35; i++) {
	const worker = new Worker('./process.js');
	worker.postMessage(i); 
}
}
async function count(){
let start = new Date();
await run();
let end = new Date();
console.log(end.getTime()-start.getTime())
}
count();