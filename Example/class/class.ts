class people {
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    sayHi(){
        return `Hello! My name is ${this.name}`;
    }
}
class superHero extends people {
    public birthday: number;
    constructor(name: string, birthday: number){
        super(name);
        this.birthday = birthday;
    }
    tellMeBirthday(){
        return `${this.birthday}`
    }
}
// let ian = new people('Ian');
// console.log(ian.sayHi())
let peter = new superHero('Peter',19990119);
console.log(peter.tellMeBirthday())