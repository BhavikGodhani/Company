// let arr = [1, [2, [3, [4]], 5]];

// console.log(arr.flat(4));

//////////////////////////////////////////////////
// async function data(){
    // try {
        //     let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        //     let data = await response.json()
        //     console.log(data);
    // }
    // catch(er){
    //     console.log(er);
    // }
    //  }
    //  data()

////////////////////////////////////////////////////

// function curry(fn) {
//     return function curried(...args) {
//         if (args.length >= fn.length) {
//             return fn(...args);
//         } else {
//             return function (...nextArgs) {
//                 return curried(...args.concat(nextArgs));
//             };
//         }
//     };
// }

// function sum(a, b,c) {
//     return a + b +c;
//   }
  
// let aa =  curriedAdd(sum)

// console.log(aa(1)(2)(3)); // Output: 6 
// console.log(aa(1, 2)(3)); // Output: 6 
// console.log(aa(1, 2, 3)); // Output: 6

/////////////////////////////////////////////////////////////////////////////

//     class Person{
//         constructor(city){
//         this.city = city;
//         }

//         res(){
//         console.log("My City Name:",this.city);
//         }
//     }

//     class Student extends Person{
    
//         constructor(name,city){
//             super(city);
//         this.name = name;
//         }

//         study(){
//             console.log("My Name is:",this.name);
//         }
//     }

//     const student = new Student("Bhavik","Junagadh");
//     const person = new Person("Ahmadabad");

//    student.study()
//    person.res()