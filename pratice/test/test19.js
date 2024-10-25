function string(string,str1,str2){
   let a = string.split("");

    for(let i = 0 ;i<a.length;i++){
     if(a[i] === str1 && a[i+1] !== str2)
        return false;         
    }
    return true;
}
console.log(string("he headed to the store", "h", "e"));