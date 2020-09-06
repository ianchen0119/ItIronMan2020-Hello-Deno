// Constant
// const pi = 3.14159;
// pi = 50;

// Declare
// var x = 'hello';
// x = 'hi';
// let y = "123";
// y = "456";

//Scope Chain
let x = "a";
function toy() {
  let x = "c";
}
function print() {
  console.log(x);
}
print(); //'a'or'b'?
