


function array(arr){
  let ans = [];
for(let i = 0; i<arr.length;i++){
    if(isprime(arr[i])){
          ans.push(arr[i]);
    }
}
return ans.sort((a,b) => a - b);
}
function isprime(n){
    if(n<2){
        return false;
    }
    for(let i = 2 ; i< n;i++){
        if(n%i == 0){
            return false;
        }
        return true;
    }
}

let arr = [1,4,3,4,7,4,5,8,11]
console.log(array(arr));