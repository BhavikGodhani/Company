// function occurance(arr,t){
      
//     for(let i = arr.length-1;i>=0;i--){
//           if(arr[i] === t){
//             return i;
//           }
//     }
//     return -1;
// }
// console.log(occurance([3,4,13,13,13,20,40],3));

//////////////////////////////////////////////////////////////////

//  function occurance(arr,t){
//     let count = 0;

//     for(let i = 0; i<arr.length;i++){
//         if(arr[i] === t ){
//             count++;
//         }
//     }
//     return count;
//  }
//  console.log(occurance([2, 2 , 3 , 3 , 3 , 3 , 4],3));

///////////////////////////////////////////////////////////

// function indexfind(arr,t){
 
// return arr.some(x => x == t);

// }
// console.log(indexfind([7, 8, 1, 2, 3, 3, 3, 4, 5, 6],10));


//////////////////////////////////////////////////////

// function arrayrotated(arr){
    
//     let max = Math.max(...arr);
//     let index = arr.findIndex(x => x == max);
   
//     return  index + 1;
// }
// console.log(arrayrotated([3,4,5,1,2]));


/////////////////////////////////////////////

// function array(arr){
 
//     let ans = 0;
// for(let i = 0; i<arr.length;i++){
//  ans = ans ^ arr[i];
// }
// return ans; 
// }
// console.log(array([1,1,2,2,3,3,4,5,5,6,6]));


////////////////////////////////////////////////

function array(arr){
     
    // let count = 1; 
    // for(let i = 0; i<arr.length;i++){
      
    //       if(count == arr[i]){
    //         count++;
    //       }
    //       else if(count != arr[i]){
    //           return  arr.findIndex(x => x == count-1 != -1);
    //        }
    //     }
      
     let max = Math.max(...arr);
     
    return  arr.findIndex(x => x == max);
    }
console.log(array([1,2,3,4,5,6,7,8,5,1]));