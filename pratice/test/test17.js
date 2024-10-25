function string(str1,str2){
 
    let a =  str1.split("");
    let b  = str2.split("");

     return  a.some(x => b.includes(x));
}
console.log(string("abc","d"));