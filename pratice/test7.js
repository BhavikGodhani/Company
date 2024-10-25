// console.log(global);

// let promise = new Promise((reslove,reject) => {
//      setTimeout(() => {
//            console.log("start");
//            reslove("ok")
//      },1000)
// })

// function newPromise(){
//    return new Promise((reslove,reject) => {
//              setTimeout(() => {
//                    console.log("start");
//                    reslove("ok")
//              },1000)
//              console.log("end");
//             })
// }
// newPromise().then((e) => console.log(e));



// promise.then((d) => console.log(d));

// async function data(){

//     let reslove = await promise;
//     console.log("Data 1");
//     console.log(reslove);
// }
// data()
// let a = [{x:10},{x:20},{x:30},{x:10}];

// a.findIndex((x) => {
//     console.log(this)
// })
// let index = a[0];
// let index2 = a[0];


    // index = a[0];

    // console.log(a.indexOf(index));
 
// pass by value


// let a = 10

// let b = a;

// console.log(a,b);

// pass by reference 
// let aa = {
//     age:21,
//     name:{
//         c:10
//     }
// }

// let bb = aa;
// bb.name.c = 22;

// console.log(aa,bb);

// function a(a,b){
  

// }

// let aa = a(1,2);


let a = [1,2,4]
let b = [2,3,4]

// let c = [...a,...b]
// console.log({c});


// let a = [1,2,3];

// a.findIndex((x)=> {
//     console.log(this)
// },a)

a.find(function (x) {
   console.log(this);   
})