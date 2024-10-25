function string(str){
  let a = str.split("")
    result = '';
  for(let i = 0; i<a.length;i++){
    if(a[i] === a[i].toUpperCase()){
           result += '-' + a[i];
    }
    else{
        result += a[i];
    }
  }
  return result.toLowerCase();
}
console.log(string("helloThisIsSavan"));

