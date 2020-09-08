import { MatrixC } from './index.ts';

self.onmessage = async (e) => {
	for (var j = 1; j<=35; j++) {
			let result = MatrixC(e.data,j);
			console.log(`C[${e.data},${j}]:${result}`)
		}
	self.close();
  };
 