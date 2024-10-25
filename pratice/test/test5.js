
let count = 0;
function fac(n){
    if(n<2){
        return 1;
    }
    else{
        console.log(n);
        return  n * fac(n-1);   
    }
}
console.log(fac(6));