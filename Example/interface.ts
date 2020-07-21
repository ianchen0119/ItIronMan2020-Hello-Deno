//可選屬性

interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom'
};

let ian: Person = {
    name:'Ian',
    age: 23
}

console.log(ian)

//任意屬性

interface anyPerson {
    name: string;
    age?: number;
    [propName: string]: any;
}

let Peter: anyPerson = {
    name: 'Peter',
    gender: 'male'
};

//只讀

interface otherPerson {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let Kelly: otherPerson = {
    id:12321,
    name: 'Kelly',
    gender: 'male'
};

// Kelly.id = 89757;