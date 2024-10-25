function maxlendiff(arr1,arr2){

    if(arr1 === 0 || arr2 === 0){
        return -1;
    }
    
    let a = arr1.map(x => x.length);
    let b = arr2.map(x => x.length);

    return Math.max(Math.max(...a) - Math.min(...b),Math.max(...b) - Math.min(...a));

        
}
console.log(maxlendiff(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"],["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]));