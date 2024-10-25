// function validation(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {

//         if (str[i] === "(") {
//             count++;
//         }
//         if (str[i] === ")") {
//             count--;
//         }
//         if (count < 0) {
//             return false;
//         }
//     }
//     return count == 0;
// }
// console.log(validation("(()())"));    
// function stringbol(str){
//     let count = 0;
//     for(let i = 0; i< str.length;i++){
//     if(str[i] === "("){
//         count++;
//       }
//       else{
//         count--;
//       }
//       if(count < 0 ){
//           return false;
//         }
//     }
//        return count === 0;
//   }
//   console.log(stringbol("(())"));

function targetele(arr,target){
  
    let low = 0;
    let high = arr.length-1;
     
    while(low <= high){
      let mid = Math.floor(low+high/2);
  
      if(arr[mid] === target){
         return mid;
      }
      else if(target > arr[mid]){
        low = mid+1;
      }
      else{
        high = mid-1;
      }
    }
    return -1;
  
  }
  
  let arr = [1,2,4,5,6,4,21,2,5,3,9]
  let tar = 6;
  
  let abc = targetele(arr,tar);
  
  if(abc === -1){
    console.log("not index in array in binary search");
  }else{
    console.log("The target is index element ",abc);
  }