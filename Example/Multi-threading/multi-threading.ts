//待處理，Worker不支援本地檔案讀取
let finaltime = 0;
async function run(){
	for (var i = 1; i<=35; i++) {
	const worker = new Worker(new URL("process.js", import.meta.url).href, { type: "module" });
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