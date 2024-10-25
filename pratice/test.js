// function quotable(name, quote){
//     return `${name} said: "${quote}"`;
//   }
//  console.log(quotable('Grae', 'Practice makes perfect'))

//  'Grae said: Practice makes perfect'


// function swapValues() {
//     let arr = [1,2]
//     let arr2 = [3]
//     console.log(arguments);
// } 


// console.log(swapValues())
 
// function swapValues(args) {
    
//     var temp = args[0];
//     args[0] = args[1];
//     args[1] = temp;
    
//     return args;
// } 

// function ascii(val){
//   return String.fromCharCode(val)
// }
// console.log(ascii(65));

// const zeroFuel =  (distanceToPump, mpg, fuelLeft) => {
//     return (mpg * fuelLeft)  >= distanceToPump
// }

// console.log(zeroFuel(50,30,5))

// function createPhoneNumber(numbers){
  
//     let num = numbers.join("")
//     return `(${num.slice(0,3)}) ${num.slice(3,6)}-${num.slice(6)}`
//   }
//   createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

// function  groupInts(arr, key) {
// 	const res = []
// 	let temp = []
  
// 	for (const val of arr) {
// 		temp.length === 0 || (val < key && temp.at(-1) < key) || (val >= key && temp.at(-1) >= key)
// 			? temp.push(val)
// 			: (res.push(temp), temp = [val])
// 	}

// 	return temp.length ? [...res, temp] : res
// }
// groupInts([-1,-1,-1,10,10,10,-1,-1,-1,10,-1,10],10);


// function rot13(message){
//    console.log(message)
//   }


// for (const [input, expected] of [["test", "grfg"], ["Test", "Grfg"]]) {
//   rot13(input), expected, `Test failed with messsage = '${input}'`

// let a = {
//     b: 2
// }

// let d = {
//     s : "b",
// }


// let arr = [1,2,3,4,5,6];

// let b = arr.map(function(x) {
// return  x * this[d.s];
// } , a)
// console.log(b);let a=[0,0,1,1,1,1,0,1,1,0,1,0,0,0];

let ans =a.map((x) => a.filter((y) => y == x ).length);

console.log(ans);

// function MyFunction() {
//         multiplier = 5;
// }

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.map(function(number) {
//     // console.log(this); 
//     return number + this.multiplier;
// }, );

// console.log(result);

let animal = {
    name:"Bhavik"
}
let abc = Object.create(animal);

console.log(Object.keys(abc));
