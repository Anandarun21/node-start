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

  



const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const asyncFunction = async () => {
  console.log('a');
  console.log('b');
  
  await delay(3000);
  console.log('c');
  
  await delay(0);
  console.log('d');
  
  console.log('e');
};

asyncFunction();