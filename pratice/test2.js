let a = [1,2,3]
let b = [4,5,6]

let aa = a.forEach((e) => setTimeout(() => {
   console.log(e);
},5000));

let bb = b.forEach((e) => setTimeout(() => {
    console.log(e);
 },10000));

async function s(){
  
    let ans = await bb;
    console.log(ans);
    let ans2 = await aa;
    console.log(ans2);
}

s()