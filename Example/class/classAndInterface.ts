// class Animal {
//     public name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     sayHi() {
//         return `My name is ${this.name}`;
//     }
// }
// interface cat{
//     sayHi() :any;
//     sayMeow(): any;
// }
// class Cat extends Animal implements cat{
//     constructor(name: string) {
//         super(name); // 呼叫父類別的 constructor(name)
//         console.log(this.name);
//     }
//     sayHi() {
//         return 'Meow, ' + super.sayHi(); // 呼叫父類別的 sayHi()
//     }
//     sayMeow(){
//         return 'Meow~';
//     }
// }
// let c = new Cat('Tom'); // Tom
// console.log(c.sayHi()); // Meow, My name is Tom
class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}
let point3d: Point3d = { x: 1, y: 2, z: 3 };
