function zeroandone(arr){
 let n = arr.length;

  let maxidx= 0;
  let idx = -1;
  let max = 0;   // maximum  0 
  let lastzero = -1;  // 0 agal index find 

  for(let i = 0; i < n;i++){
    if(arr[i] === 0){
      if(i - lastzero > max){  
          max = i - lastzero;    
         maxidx = idx ;         // 0 index find 
      }
      
      lastzero =  idx ;        // 
      idx = i ;               // 0 value index find 
    } 
  }
   // max size  length and lastzero increase
  if(n - lastzero > max){
    maxidx = idx;
  }

   return maxidx;
}
  console.log(zeroandone([1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1]
    ));
  