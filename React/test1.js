// const users = {
//     '1': { name: 'Alice', age: 25 },
//     '2': { name: 'Bob', age: 30 },
//     '3': { name: 'Charlie', age: 35 },
//   };

// import { log10 } from "chart.js/helpers";

// //   const userArray = Object.keys(users).map(key => console.log(users[key]
// //   ));

//   const departments = {
//     'hr': { name: 'Human Resources', employees: { '1': 'Alice', '2': 'Bob' } },
//     'it': { name: 'IT Department', employees: { '3': 'Charlie', '4': 'David' } },
//   };

//   const userArray = Object.keys(departments).map((x) => {
//   const value = departments[x].employees
//   console.log(Object.values(value));
// })
// for(let [key,value] of Object.entries(departments)){
//    let store = value.employees;
//     console.log(Object.values(store));
// }

// let arr = [1, 2, 3, 4, 5];
// let store = arr.map((x) => {
//   if (x % 2 == 1) {
//     return arr.shift()
//   }
// });
// console.log(arr); //12345135   
// console.log(store); //135

// function array(str){
//   let number = String(str).split("")
   
//   let aa = number.splice(0,1,);

// }
// console.log(array(56789));

// console.log(_.isEqual(4,4))


// function abc(arr){
  
//   for(let i =0 ;i<=9;i++){
//     if(i != arr[i]){
//       return i;
//     }
//   }
// }
// let arr = [0, 5, 1, 3, 2, 8, 7, 6, 4];
// let value = arr.sort()
// console.log(abc(value))


// fetch()


// let a = 10;
// let b = 11;
// console.log(a,++b);  //10,12
// console.log(a++,b);   //10,12


// a = ++b;   //13
// b = a++;   
// console.log(a,b)  //12,13

//  a = b++;    
//  b = ++a;     
//  console.log(a,b); //13,13

// a = 100;
// b = a++ + 200;
// console.log(a,b)   //101,300

// var a = 10;
// const b = 20;

// a++; 
// b++; 

// a = ++b;
// b = a++; 

// a = b;  
// b = a++ + a; 

// console.log(a,b); 

// var a = 10;
// var b = 30;

// b = a++ + ++b;  

// a = ++a + a-- + --a + ++b + a++; // 12 + 12 + 10 + 42 + 10;
// console.log(a,b);

// a = ++a + ++b; 
// b = a++ + ++a + b++;
              
// console.log(a,b);


// const context = {
//   value: 10,
//   array: [1, 2, 3],
//   printValuesWithMap() {
//     // Using `map`
//     const result = this.array.map((item)=> {
//       console.log(this.value + item); // 'this' refers to the function's context
//     });
//   },
//   printValuesWithForEach() {
//     // Using `forEach`
//     this.array.forEach((item) => {
//       console.log(this.value + item); // 'this' refers to the function's context
//     });
//   },
//   printValuesWithFor() {
//     // Using `for`
//     for (let i = 0; i < this.array.length; i++) {
//       console.log(this.value + this.array[i]); // 'this' is referring to the object context correctly
//     }
//   }
// };

// context.printValuesWithMap()
// context.printValuesWithForEach()
// context.printValuesWithFor()


// let arr = [1,2,3,4,5];
// let a = arr.filter((v,i) => {
//   if(i%2 == 0){
//     return false;
//   }
// })
// console.log(a);



// let arr = [1,2,3,4,5];
// let a = arr.filter((v,i) => {
//   if(i == 0){
//     return true;
//   }
// })
// console.log(a);

// var arr = [1, 2, 3, 4, 5, 6, 7];
// // var arr1 = [1,2,3,4,5]

// // var newArr = arr.filter((el) => {
// //   return el * 2;
// // });

// // console.log(newArr); //2,4,3,8,10,12,14

//   // var newFilter = arr.filter((el) => {
//   //    return arr1.find((x) => x != el);
//   // });
//   // console.log(newFilter); 

// // let arr = [1,2,3,4,5];
// // let a = arr.filter((v,i) => {
// //   if(i == 10){
// //     return true;
// //   }
// // })
// // console.log(a);
// //  let index = 0;
// //  let max = 0;
// // function a(arr1){
// //    for(let i =0;i<arr1.length;i++){
// //       if(arr1[i] == 0){
// //         arr1[i] = 1;
// //         let ans = Math.max(...arr1.join("").split(0).map((x) => x.length));
// //         if(ans > max){
// //          max = ans;
// //          index = i;
// //         }
// //         arr1[i] = 0;
// //       }
// //    }
// //    return index;
// // }
// // let arr1 = [1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0];
// // console.log(a(arr1));


// // const data = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9]
// // ];


// // // Find the first sub-array where at least one element is greater than 5
// // const result = data.find(subArray => subArray.filter(num => (num > 7)).length);

// // console.log(result); // Output: [4, 5, 6]

// // const data = [{
// //   name:"jay",
// // },{let arr= [1,2,3,4,"",null,5,6,7,8,9];

// //   name:"bhavik",
// // }]

// // let value = data.filter((x) => {
// //   return Object.values(x).find((y) => y == "bhavik")
// // });
// // console.log(value);

// // function greet(greeting) {
// //   console.log(`${greeting}, ${this.name}`);
// // }

// // const person = { name: 'Alice' };
// // const greetAlice = greet.bind(person,'Hello');

// // greetAlice()

// // let worker = {
// //   someMethod() {
// //     return 1;
// //   },

// //   slow(x) {
// //     console.log("Called with " + x);
// //     return x * this.someMethod(); // (*)
// //   }
// // };

// // function cachingDecorator(func) {
// //   let cache = new Map();
// //   return function(x) {
// //     if (cache.has(x)) {
// //       return cache.get(x);
// //     }
// //     let result = func.call(this, x);
// //     cache.set(x, result);
// //     return result;
// //   };
// // }

// // worker.slow = cachingDecorator(worker.slow); 
// // console.log( worker.slow(2) ); // works
// // console.log( worker.slow(2) );

// // let a=[0,0,1,1,1,1,0,1,1,0,1,0,0,0];
// // let ans = Math.max(...arr1.join("").split(0).map((x) => x.length));

// // let arr1 = [1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0];

// // cons(ole.log();


// // let data = [];

// // let object = {
// //   name:"Om sanchaniya"
// // }
// // data.push(object);

// // localStorage.setItem("Data",data);

// // let arr = [9, -3, 3, -1, 6, -5]
// // let sum = 0;
// // let length = [];

// // const getSum = (subarray) => subarray.reduce((acc, num) => acc + num, 0);

// // for(let i =0 ;i<arr.length;i++){

// //   for(let j = i+1;j<=arr.length;j++){

// //     let subarray = arr.slice(i, j);
    
// //     //  console.log(subarray);
      
// //         if (getSum(subarray) === 0) {
// //             length.push(subarray.length);
// //         }
// //   }
// // }

// // console.log(Math.max(...length));



// // const getSum = (subarray) => subarray.reduce((acc, num) => acc * num, 0);
// // let max = 0;
// // let arr = [1,2,-3,0,-4,-5]
// // for(let i =0 ;i<arr.length;i++){
  
// //   for(let j = i+1;j<=arr.length;j++){
    
// //     let subarray = arr.slice(i, j);
    
// //     let ans = subarray.reduce((acc, num) => acc * num);
    
// // //     if(ans >= max){
// // //       max =ans;
// // //     }
// // //   }
// // // }
// // // console.log(max);

// // // let a = [3,1,2,5,3];

// // // a.sort();

// // // let count = 0;
// // // let ans=[];
// // // let value = a.map((x) => a.filter((y) => x == y).length);
// // // console.log(value);
// // // let filter = Math.max(...value);
// // // let index = value[filter];
// // // console.log(index);

// // // for(let i = 0; i < a.length;i++){
// // //   count++;
// // //   if(count != a[i]){
// // //     ans.push(count,a[index]);
// // //   }
// // // }
// // // console.log(ans);


// // // let arr1 = [1,4,8,10];
// // // let length1 = arr1.length;
// // // let arr2 = [2,3,9];
// // // let length2 = arr2.length;

// // // let ans = [].concat(...arr1,...arr2).sort((a,b) => a - b);

// // // let a =[];
// // // function twosum(arr,t){

// // //   for(let i = 0; i<arr.length;i++){
    
// // //       if(arr[i] + arr[i+1] == t){
// // //         a.push(i,i+1)
// // //     }
    
  
// // //   } 
// // //   console.log(a);
// // // }

// // // twosum([2,6,7,8,11],14);

// // function mergeOverlappingIntervals(arr) {
// //   const n = arr.length;
  
// //   // sort the given intervals
// //   arr.sort((a, b) => a[0] - b[0]);
  
// //   const ans = [arr[0]];

  
// //   for (let i = 1; i < n; i++) {
// //     const last = ans[ans.length - 1]; //[1,3]
  

// //     const curr = arr[i];  // [2,6] , [8,10],[15,18]
  
  
// //     // // if the current interval overlaps with the last interval
// //     if (curr[0] <= last[1]) {
// //       last[1] = Math.max(last[1], curr[1]);
// //     }
// //     // // if the current interval does not overlap with the last interval
// //     else {
// //       ans.push(curr);
// //     }
// //   }
  
// //   return ans;
// // }

// // const arr = [[1, 3], [8, 10], [2, 6], [15, 18]];
// // const ans = mergeOverlappingIntervals(arr);
// // console.log("The merged intervals are:");
// // for (let it of ans) {
// //   console.log(`[${it[0]}, ${it[1]}]`);
// // }


// // var maxArea = function(height) {
// //   let maxArea = 0;
// //   let left = 0;
// //   let right = height.length - 1;

// //   while (left < right) {
// //       maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]));

// //       if (height[left] < height[right]) {
// //           left++;
// //       } else {
// //           right--;
// //       }
// //   }

// //   return maxArea;    
// // };


// // // console.log(maxArea([1,8,6,2,5,4,8,3,7]));
// // function threesum(arr) {
// //   let ans = [];
   
// //     for (let i = 0; i < arr.length - 2; i++) {
// //   // Skip duplicate values for the first elementif (i > 0 && arr[i] === arr[i - 1]) continue;
   
// //       for (let j = i + 1; j < arr.length - 1; j++) {
// //   // Skip duplicate values for the second elementif (j > i + 1 && arr[j] === arr[j - 1]) continue;
   
// //         for (let k = j + 1; k < arr.length; k++) {
// //   // Skip duplicate values for the third elementif (k > j + 1 && arr[k] === arr[k - 1]) continue;
   
// //           if (arr[i] + arr[j] + arr[k] === 0) {
// //             ans.push([arr[i], arr[j], arr[k]]);
// //           }
// //         }
// //       }
// //     }
   
// //     console.log(ans);
// //   }
   
// //   let arr = [-1, 0, 1, 2, -1, -4];
// //   threesum(arr);


//   // let str = "babad"
//   // let arr = str.split("");
//   // let revstr = [...arr].reverse();
//   // console.log(arr,revstr);
//   // let newarr= [];
 
//   // for(let i = 0; i<arr.length;i++){
//   //   if(arr[i] == revstr[i]){
//   // newarr.push(arr[i]);
//   //   }
//   // }
//   // console.log(newarr);

//   var convert = function(s, numRows) {
//     if(numRows===1 || s.length<numRows){
//         return s
//     }
//     let direction = false
//     let arr = new Array(numRows).fill("")
//     let count = 0

//     for(let i =0; i<s.length; i++){
//         let current = s[i]
//         arr[count] += current
//         console.log(arr);

//         if(count===0 || count>=numRows-1){  // 3 >=
//             direction = !direction
//         }
//         if(direction){
//             count++
//         }else {
//             count--
//         }
//     }
//     console.log(arr);
//     // return arr.join("")
// };
// let str = "PAYPALISHIRING";
// console.log(convert(str,3));


// 16/08 React:- Basic React Rivision,
//       Javascript:- Promise and Class Concept Rivision
//         pratice :- function component of hook,

// 20/08 React:- Advance React Rivision
//              pratice:- Advance hook topic and differnce site reading this topic realated read

// 21/08 React:- React Route documation read,
//               Basic Typesctipt read,
//               pratice:- Routes and useNavigate, useParams,uselocation 

// 22/08  React:- My react Pdf read ,
// Pratice:- video of real life example basic project this useEffect ,useState


// 23/08  React:- Problem sol:- codewars and tackyouforward  of array and  pattern problem 
// Pratice:- video of real life example advance project this route and useMemo and etc...


// function a(){
//     this.x = 10;
//     return function (){
//         return x;
//     }
// }

// const aa = a();
// console.log(aa);
// const bb = aa.bind(a)
// console.log(bb());
// let store = "op"

// let valueFind = [{"name":"nj","description":"weq"}
//                 ,{"name":"op","description":"ws"}] 
//              || [];
// const categoryData = valueFind.find(data => data["name"]);
// console.log(categoryData);


