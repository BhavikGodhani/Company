function sumofparts(arr){
      
    let ans = []
    for(let i =0; i<arr.length+1;i++){
         ans.push(arr.slice(i));
    }
      let finalans =[];
    for(let i =0;i<ans.length;i++){

            let fnl = ans[i].reduce((a, c) =>  a + c ,0);

            finalans.push(fnl);
    }   
     return finalans;
 }
console.log(sumofparts([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]));