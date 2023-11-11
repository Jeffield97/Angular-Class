export class Person{
    name: string;
    lastname: string;
    age: number
    
    constructor(name:string, lastname:string, age:number) {
        this.name = name
        this.lastname = lastname
        this.age=age
    }

    //Otra forma de declarar los atributos y constructor
    // constructor (public name:string, lastname:string, age:number){}
}