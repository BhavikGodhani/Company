function palidrome(str){
    
    let a = "";
    for(let i = str.length-1;i >=0; i--){
        a += str[i];
    }

    if(a === str){
        return true;
    }
    else{
        return false;
    }
    
// let a = str.split("").reverse().join("");
// console.log(a);
}
console.log(palidrome("codajasdroc"));