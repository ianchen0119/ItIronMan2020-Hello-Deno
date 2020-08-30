class Animal {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  get Name() {
    return this.name;
  }
  set Name(value) {
    this.name = value;
    console.log("setter: " + this.name);
  }
}
let a = new Animal("Kitty");
console.log(a.Name); // Kitty
a.Name = "Tom"; // setter: Tom
let x = a.Name;
console.log(x); // Tom
