// function array(arr,x){
//    let n = arr.length;

//    let low = 0 ; 
//    let high = n - 1 ; // 3 
//    let ans  = n;      // 4 

//    while(low <= high){
//     let mid = Math.floor((low + high)/2);

//     if(arr[mid] >= x){
//         ans = mid;
//         high = mid - 1;
//     }
//      else{
//         low = mid + 1; 
//      }
//    }
//    return ans;

// }
// console.log(array([1,2,4,7],2));


function array(arr,x){
    let n = arr.length;
 
    let low = 0 ; 
    let high = n - 1 ; // 3 
    let ans1  = n;      // 4 
    let ans2  = n;

    while(low <= high){
    //  let mid = Math.floor((low + high)/2);
     
    //  if(arr[mid] <= x){
    //      ans1 = arr[mid];
    //      high = mid - 1;
    //     }
    //     else{
    //         low = mid + 1; 
    //     }
        
   let mid1 = ((low + high)/2);

     if(arr[mid1] >= x){
        ans2 = arr[mid1];
        high = mid1 - 1;
    }
     else{
        low = mid1 + 1; 
     }
    }
    return {ans2};
 
 }
 console.log(array([3, 4, 4, 7, 8, 10],8));