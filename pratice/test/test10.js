
let obj = {};
function array(arr){
   for(let abc of arr){
    obj[abc] = abc.split("").sort().join("");
   }      
   return obj;
}
console.log(array(["bhavik","aman","savan","jay"]));