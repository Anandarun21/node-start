const multiply = (a, b) => a * b;
const result = multiply(5, 10);
console.log(result); 


const person ={
    name: 'Anand',
    age: 29,
    greet() {
        console.log('hi, i am ' + this.name);
    }
};
person.greet();