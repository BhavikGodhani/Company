function arraystring(arr1,arr2){
 
    let a =    new Set(arr1.filter(x => arr2.indexOf(x) == -1))
    
    let b =    new Set(arr2.filter(x => arr1.indexOf(x) == -1))


    return [...a,...b].sort();
}
// console.log(arraystring(['a','a','t','e','f','i','j'],['t','g','g','i','k','f']));
console.log(arraystring([1,8,4,2,34,5,6],[9,12,4,2,4,4,3]));