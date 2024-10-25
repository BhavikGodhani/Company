function twoarraymedian(arr1,arr2){
 
 let abc = arr1.concat(arr2).sort((a,b) => a - b);


 let length = abc.length;
 
 if(length % 2 === 0){
    return   (abc[length / 2 - 1]  + abc[length / 2]) / 2;
 }
 else {
    return   abc[Math.floor(length/ 2)]; 
 }

}
console.log(twoarraymedian([1,3],[2]));