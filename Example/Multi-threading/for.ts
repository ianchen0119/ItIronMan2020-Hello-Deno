import { MatrixC } from './index.ts';
let count = 0;
let start = new Date();
async function run(){
	for (var i = 1; i<=35; i++) {
		for (var j = 1; j<=35; j++) {
		let result = MatrixC(i,j);
		console.log(`C[${i},${j}]:${result}`)
	}
	}
	return new Date();
}

let end = await run()
console.log(end.getTime()-start.getTime())