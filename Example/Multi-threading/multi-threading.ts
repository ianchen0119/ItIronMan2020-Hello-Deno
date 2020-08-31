//待處理，Worker不支援本地檔案讀取
// let finaltime = 0;
// async function run(){
// 	for (var i = 1; i<=35; i++) {
// 	const worker = new Worker(new URL("process.ts", import.meta.url).href, { type: "module" });
// 	worker.postMessage(i); 
// }
// }
// async function count(){
// let start = new Date();
// await run();
// let end = new Date();
// console.log(end.getTime()-start.getTime())
// }
// count();

const worker = new Worker(new URL("worker.ts", import.meta.url).href, { type: "module", });
worker.onmessage = (e: MessageEvent) => { console.log(`Main: Received msg from deno worker - ${e.data}`); };
worker.postMessage("Hello Deno");