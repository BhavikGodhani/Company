function number(num){
let arr = num.toString().split("");

let str = "";
for(let i = 0; i<arr.length;i++){
       str += arr[i];
    for(let j = 0; j<arr.length-i-1;j++){
     str += "0";
    }
    if(arr[i] < arr.length){
        str += "+";
    }
}

    return str;
}
console.log(number(1234));

