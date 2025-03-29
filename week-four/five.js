class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, I'm ${this.name}, ${this.age} years old.`;
    }
}

class Employee extends Person {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }

    getDetails() {
        return `${this.name} works as a ${this.position}.`;
    }
}

async function fetchData(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

async function fetchUsers() {
    let users = await fetchData('https://jsonplaceholder.typicode.com/users');
    console.log(users);
}

let emp = new Employee("Sahil", 25, "Developer");
console.log(emp.greet());
console.log(emp.getDetails());
fetchUsers();
