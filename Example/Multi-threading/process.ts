import {MatrixC} from './index.ts';
// parentPort.once('message', (i) => {
// 	for (var j = 1; j<=35; j++) {
// 	let result = MatrixC(i,j);
// 	// console.log(`C[${i},${j}]:${result}`)
// 	}
// });
self.onmessage = async (e) => {
	console.log(e)
	self.close();
  };