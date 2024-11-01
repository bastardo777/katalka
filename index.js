class User {
    constructor(name) {
        this.name = name;
    }

    constructor(age) {
        this.age = age;
    }

    sayHello(){
        console.log(`Здарова я, ${this.name}!`);
    }

    showInfo() {
        console.log(`Кличка: ${this.name}, сколько прожил: ${this.age}`);
    }

    isAdult() {
        return this.age >=20;
    }
}
let user= new  User("Каталка");
user.sayHello()
user.showInfo();
console.log(user.isAdult());

