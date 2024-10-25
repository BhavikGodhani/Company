// // let a = new Object();
// // a["age"]  = 10;
// // Object.seal(a);
// // a.age = 20;
// // console.log(a.age);
// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // copies all properties from permissions1 and permissions2 into user
// Object.assign(user, permissions1, permissions2);

// function constuctor(name){
//     this.name = name;

// }

// let aa = new constuctor("bhavik")
// console.log(aa.name);

// let a = {
//     b:"Bhavik",
//     c:{
//         d:"nishil"
//     }
// }

// console.log(a?.c);

// let id1 = Symbol("key");

// let a = {
//     [id1]:"Bhavik"
// }
// let clone = Object.assign({},a);
// console.log(clone[id1]);

// console.log(isNaN(NaN));
// console.log(isFinite(NaN));
// console.log(Number.isNaN(NaN));
// console.log(Number.isFinite(NaN));
// console.log(parseInt(NaN));
// console.log(parseFloat(NaN));

// for(let i = 0; i < 5;i++){
//     setTimeout((x) => {
//         console.log(i);
//     },1000)
// }


// for(var i = 0; i < 5;i++){
//     setTimeout((x) => {
//         console.log(i);
//     },1000)
// }
// let  a= 5;
// let  a = 6;
// console.log(a);



// let date = new Date()
// let now =  Date.now()
// console.log(now);
// console.log(date.getTime());
// console.log(+date);

// let date =  Date.parse("ds")
// console.log(date);

// let obj = {
//     name :"Bhavik"
// }
// console.log(JSON.stringify(obj));
// console.log(obj.toString());

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str);
//  let date = new Date(meetup.date)
// console.log(date.getHours());

// function makeCounter() {
//     let count = 0;
 
//     function increment(){
//          return count++;
//     }
//     function getvalue(){
//        return count;
//     }
//     return {increment,getvalue}
// }
// let aa  = makeCounter()
// console.log(aa.increment());
// console.log(aa.getvalue());
// console.log(aa.increment());
// console.log(aa.increment());
// console.log(aa.increment());
// console.log(aa.getvalue());


// function sum(a) {

//     let currentSum = a;
  
//     function f(b) {
//       currentSum += b;
//       return f;
//     }
  
//     f.toString = function() {
//       return currentSum;
//     };
  
//     return f;
//   }
  
//   console.log( sum(1)(2) ); // 3
// console.log(abc(1)(2));


// const obj = {
//     name: 'John',
//     greet: function() {
//       console.log(`Hello, ${this.name}!`);
//     }
//   };
  
//   let a=[0,0,1,1,1,1,0,1,1,0,1,0,0,0];

let ans =a.map((x) => a.filter((y) => y == x ).length);

console.log(ans);// Using setTimeout with bind to preserve the 'this' context
//   setTimeout(obj.greet.bind, 1000);
 
// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }
 
// promise = job(true);
 
// promise
// .then(function(data) {
//     console.log(data);
//     return job(false);
// })
// .catch(function(error) {
//     console.log(error);
//     return 'Error caught';
// })
// .then(function(data) {
//     console.log(data);
//     return job(true);
// })
// .catch(function(error) {
//     console.log(error);
// });

let a = {name:"Bhavik"}



let weapmap = new Map()

 weapmap.set("bhavik","ok");
 weapmap.set(true,"jay")

// console.log(weapmap);
// console.log(weapmap.get(a));

let key = Object.keys(weapmap)
 
for(let a of key){
  console.log(a);
}