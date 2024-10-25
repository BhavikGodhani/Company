function prime(num){
    let result = 0 ;
    for(let i = 0;i<num.length;i++){
        if(isprime(num[i])){
               result += num[i];
        }
    }
    return result;
}

function isprime(n){
    if( n <=1){
        return false;
    }

    for(let i = 2; i<=Math.sqrt(n);i++)   // 2 3 4 5              3
                                          // 2 3 4 5 6 7          3
        if(n%i == 0)
            return false;
    
        return true;
    
}

let arr = [1,5,2,4,6,7,11,13];  // 5 2 7 11 13 
console.log(prime(arr));