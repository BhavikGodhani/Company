function string(str){
    let result='';
    for(let i = 0; i<str.length;i++){
        if(str[i] === str[i].toUpperCase()){
            result += "-" + str[i];
       }
       else{
        result += str[i];
       }
    }
    return result;
}
console.log(string("camelsHaveThreeHumps"));