class Animal {
  public name: string;
  protected constructor(name: string) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}
class Cat extends Animal {
  protected birthday: number;
  constructor(name: string) {
    super(name);
    this.birthday = 8;
  }
  say() {
    console.log(this.birthday);
  }
}

// let a = new Animal("Jack");
let a = new Cat("Jack");
a.say();
// a.birthday;
