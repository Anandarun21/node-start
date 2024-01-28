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
const hobbies = ['sports','cookies'];
// for(let hobby of hobbies){
//     console.log(hobby);
// }

console.log(hobbies.map(hobby => 'hobby:' + hobby));
console.log(hobbies);



const fruits = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];

const transformedFruits = fruits.map(fruit => {
  return fruit === ' ' ? 'empty string' : fruit;
});

console.log(transformedFruits);




const obj1 = {'key1': 1, 'key2': 2}
const obj2 = { ...obj1, key1: 1000 }

console.log(obj1)
console.log(obj2)

  