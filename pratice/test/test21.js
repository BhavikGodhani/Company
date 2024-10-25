function diffsum(a,b){
    
    let sml = Math.min(a,b); 
    let big = Math.max(a,b);

    let result = 0;
    for(let i = sml ; i<= big ;i++){
        result += i;

    }
   return result
}
console.log(diffsum(9,0));