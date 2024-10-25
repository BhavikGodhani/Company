///////////////////////////////// task 1 
// function upperbond(arr,x){
// for(let i = 0; i < arr.length;i++){
//     if(arr[i] >= x ){
//       return i ;
//     }
// }
// }
// console.log(upperbond([1,2,4,7],6));

////////////////////////////////// task 2 

// function Ceil(arr,x){

//   for(let i = 0; i<arr.length;i++){
//     if(x <= arr[i]){
//        return i;

//       }
//     }
//     return -1;

// }
// let arr = [3, 4, 4, 7, 8, 10];
// let x = 5 ;
// var ans = Ceil(arr,x);

// if(ans == -1){
//   console.log("Doesn't exit");
// }
// else{
//   console.log("The final of Ceil",arr[ans]);

// }
// function floor(arr,x){

//   for(let i = 0; i<arr.length;i++){
//     if(x >= arr[i]){
//        return i;

//       }
//     }
//     return -1;

// }
// let arr1 = [3, 4, 4, 7, 8, 10];
// let x1 = 5 ;
// var ans1 = floor(arr1,x1);

// if(ans1 == -1){
//   console.log("Doesn't exit");
// }
// else{
//   console.log("The final of Ceil",arr1[ans1]);
// }

/////////////////////////////////////////////

function  lastoccurance(arr,tar){
  for(let i = arr.length-1;i >= 0 ; i--){
    if(arr[i] == tar){
     return i;
    }
    // console.log(arr[i]);
  }
 return -1;
}
console.log(lastoccurance([3,4,13,13,13,20,40],60));


/////////////////////////////////////////////

// function  lastoccurance(arr,tar){
//     let count = 0 ;
//   for(let i = 0;i <=arr.length ; i++){
//     if(arr[i] == tar){
//       count++;
//     }
//   }
//  return count;
// }
// console.log(lastoccurance([2, 2 , 3 , 3 , 3 , 3 , 4],3));


////////////////////////////////////////////

// function rotatearray(arr,k){
  
//   for(let i= 0; i< arr.length;i++){
//     if(arr[i] == k){
//       return true;
//     }
//   }
// return false;
// }
// console.log(rotatearray([7, 8, 1, 2, 3, 3, 3, 4, 5, 6],10));


//////////////////////////////////////////


// function manytimearrayrotate(arr){

//   let ans = Infinity;
//   let index = -1;
  
//   for(let i = 0; i<arr.length;i++){
//     if(arr[i] < ans){     
//        ans = arr[i];
//        index = i;
//     }
//   }
//   return index;
// }
// console.log(manytimearrayrotate([4,5,6,7,0,1,2,3]));


//////////////////////////////////////////////////////////////

// function search(arr){
//   let ans;
//  for(let i = 0; i< arr.length;i++){

//    ans = ans ^ arr[i];
//  }
//  return ans;
// }
// console.log(search([1,1,2,2,3,3,4,5,5,6,6]));


/////////////////////////////////////////////////////////


// function twincount(arr){
//   let count = 0 ;
//  for(let i = 0; i< arr.length;i++){
//    for(let j = i+1; j <arr.length;j++){
//     if(arr[i] == arr[j]){
//            count++;
//     }
//    }
// }
// return count; 
// }
// console.log(twincount([1,1,2,2,3,3,4,5,5,6,6]));


//////////////////////////////////////////////////


// function peakelement(arr){

// let count = 0;
// for(let i = 0 ; i<arr.length;i++){
//   count++;
//   if(arr[i] != count){
//     return i-1; 
//   }
// }
// }
// console.log(peakelement([1, 2, 3, 4, 5, 6, 7, 8, 5, 1]));


//////////////////////////////////////////////////////////////


// function square(n){

//   return Math.sqrt(n);
// }
// console.log(square(36));

//////////////////////////////

// function cube(n,m){
  
// for(let i = 1; i <n;i++){
//   if((m**i) == n){
//     return i;
//   }
// }
// return -1;
// }
// console.log(cube(27,3));

////////////////////////////////////////////////////////////

