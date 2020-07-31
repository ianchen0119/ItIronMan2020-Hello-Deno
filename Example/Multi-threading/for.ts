import {MatrixC} from './index.ts';
let count = 0;
let start = new Date();
for (var i = 1; i<=35; i++) {
	for (var j = 1; j<=35; j++) {
	let result = MatrixC(i,j);
	console.log(`C[${i},${j}]:${result}`)
}
}
let end = new Date();
console.log(end.getTime()-start.getTime())