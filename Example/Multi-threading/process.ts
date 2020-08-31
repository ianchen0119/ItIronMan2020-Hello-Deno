// import { MatrixC } from './index';
// parentPort.once('message', (i) => {
// 	for (var j = 1; j<=35; j++) {
// 	let result = MatrixC(i,j);
// 	// console.log(`C[${i},${j}]:${result}`)
// 	}
// });
// self.onmessage = async (e) => {
// 	console.log(e)
// 	self.close();
//   };
self.onmessage = (e: MessageEvent) => { 
	console.log(`Worker: Received from main - ${e.data}`);
self.postMessage("Hello Semlinker");};