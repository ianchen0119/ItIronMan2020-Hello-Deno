class people {
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    sayHi(){
        return `Hello! My name is ${this.name}`;
    }
}
let ian = new people('Ian');
console.log(ian.sayHi())