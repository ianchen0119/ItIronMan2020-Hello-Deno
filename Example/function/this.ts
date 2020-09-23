// const returnYourName = function(){
// 	return this.name;
// }
// const returnThis = function(){
// 	return this;
// }
// const Ian = {
//   name: 'Ian',
//   whatYourName: returnYourName,
//   returnThis: returnThis
// }
// const Peter = {
//   name: 'Peter',
//   whatYourName: returnYourName,
//   returnThis: returnThis
// }
// console.log(Ian.whatYourName()) //Ian
// console.log(Peter.whatYourName()) //Peter
// console.log(Ian.returnThis())
console.log(this)
// function sum(para1:number,para2:number) {
//   console.log(para1+para2,this)
// }

// const sumX = sum.bind('Hello')
// sumX(1,2)
// sum.call('Ian', 1, 2) // Ian 1 2
// sum.apply('Peter', [1, 2]) // Peter 1 2

// let sumxx = (para1: number, para2: number)=>{
//   return para1 + para2;
// }
// let result = sumxx(1,2)
// console.log(result)

// deno run -c tsconfig.json this.ts
// deno run --no-check this.ts   
