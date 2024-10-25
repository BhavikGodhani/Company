// let arr = [1,2,3,4,6];
// let arr2 = [2,3,4,5];


// let sum = 0;

// arr.forEach(function(v,i) {
//     sum += v + arr2[i];
// },arr2)
// console.log(sum);

// for(let i = 0; i<arr.length;i++){
//    sum+= arr[i] + arr2[i];   
// }
// console.log(sum);

// arr.map((x,i) =>{
//     arr[2] = 7;
// })
// console.log(arr);

// // function Button({ onClick, children }) {
// //     return (
// //       <button onClick={onClick}>
// //         {children}
// //       </button>
// //     );
// //   }

// //   function PlayButton({ movieName }) {
// //     function handlePlayClick() {
// //       alert(`Playing ${movieName}!`);
// //     }

// //     return (
// //       <Button onClick={handlePlayClick}>
// //         Play "{movieName}"
// //       </Button>
// //     );
// //   }

// //   function UploadButton() {
// //     return (
// //       <Button onClick={() => alert('Uploading!')}>
// //         Upload Image
// //       </Button>
// //     );
// //   }

// //   export default function Toolbar() {
// //     return (
// //       <div>
// //         <PlayButton movieName="Kiki's Delivery Service" />
// //         <UploadButton />
// //       </div>
// //     );
// //   }




// // function value(n){
// //     let arr = [];
// //    for(let i =0 ;i<Math.pow(n,2);i++){

// //    }
// // }
// // value(2)

// // [0,1,2,1]
// //  0,1,2,3


//     // let a = [{name:"a"},{name:"b"},{name:"c"},{name:"d"}];

//     // let b = [{name:"a",age:18},{name:"e",age:20},{name:"c",age:29}];


//     // let val = a.map(ans => ans.name); 

//     // let sum = 0;
//     // b.forEach((e,i)=> {
//     //     console.log(a[i]);
//     //   if(val.includes(e.name)){
//     //    sum += e.age
//     //   }  

//     // },a)
//     // console.log(sum);

//         // let a = [1,1,1,1,2,1,1,1,1]

//         // let c = a.map((x) => a.filter((y) => x == y).length);
//         // let d = Math.min(...c) 
//         // c.forEach((e,i) => {
//         //   if(c[i] == d){
//         //     let ans = i;
//         //     console.log(a[ans]);
//         //   }
//         // })

//         // 147610059205




//         // function a(){
//         //     this.x = 10;

//         //     return function (){
//         //         return x;
//         //     }
//         // }
//         // let aa = a()
//         // let bb = aa.bind(a);
//         // console.log(bb());


//         /////////////////////////////////////////////////

//         function combinationNumber(digit){
//             if(!digit) return [];   

//             let obj = {
//                 "2" :["a","b","c"],
//                 "3" :["d","e","f"],
//                 "4" :["g","h","i"],
//                 "5":["j","k","l"],
//                 "6":["m","n","o"],
//                 "7":["p","q","r","s"],
//                 "8":["t","u","v"],
//                 "9":["w","x","y","z"],
//             }

//             function backtrack(index, path) {
//                 if (index === digit.length) {
//                     result.push(path.join(''));
//                     return;
//                 }

//                 const currentDigit = digit[index];
//                 const letters = obj[currentDigit];

//                 for (const letter of letters) {
//                     path.push(letter);
//                     backtrack(index + 1, path);
//                     path.pop(); // Backtrack
//                 }
//             }

//             const result = [];
//             backtrack(0, []);
//             return result;        

//         }
//         console.log(combinationNumber("23"));



// function test(){
//     let a = 1;
//     let b =2;
//     setTimeout(() => {
//         console.log(b);
//     })
//     console.log(a);

// }


// test()

// let arr = [1,2,3,4,5,6];
// let arr1 = arr;
// arr.push(7);
// console.log(arr);

let arr = [{ name: 'd', description: 'eqw' },
{ name: 'io', description: 'wq' }]

let find = arr.find(cat => Object.keys(cat)[0] === "d");
console.log(find);