// class A {
//     static sayHi () {
//         console.log('hi from A');
//     }
// }

// class B {
//     static sayHi () {
//         console.log('hi from B');
//     }
// }

// const obj = {
//     a: A,
//     b: B,
// }
// let  selectFIeld = {
//     value: 'a'  // 'b' 
// };

// // console.log(obj.a.sayHi());

// console.log(obj[selectFIeld.value].sayHi());



/////////////////////////////////////////////////////////


// let a = [
//     {name: 'a' },
//     {name: 'b' },
//     {name: 'c' },
//     {name: 'd' },
//     ];
//     // console.log(a.findIndex(x => x.name));

// let b = [
//     {name: 'a' , age: 10},
//     {name: 'x' , age: 11},
//     {name: 'b' , age: 14},
// ];

// let result = 0;
// for(let abc of Object.entries(b)){
//     if(a.name.incluhttps://github.com/sinungadi/Jobox-Project.gitdes(abc[1].name)){
//     //   console.log(abc[1].age);
//       result += abc[1].age;
//   }
// }
// console.log(result);



// console.log(Object.entries(b));
//  let result = 0;
// for(let i = 0; i<b.length;i++){
// if(a.find((x)=> x.name == b[i].name)){
//     result += b[i].age;
// }

// // console.log(a.findIndex((x)=> x.name == b[i].name));
// }
// console.log(result);


let abc = [{
    Name:'Ravindra',
    Sports: ['Chess', 'Cricket'],
    },
  {
    Name: 'Ravi',
    Sports: ['Cricket', 'Football'],
  },
  {
    Name:'Rishabh',
    Sports: ['Table-Tennis', 'Football'],
  }]

// [{ Chess:​ ​ [‘Ravindra’] }, { Cricket:​ [‘Ravindra’,'Ravi'] }, { Football:​ ​ [‘Ravi’,​ ​ ‘Rishabh’] }, { Table-Tennis:​ ​ [‘Rishabh']}]

//       let arr = [];
//       let obj = {};

//   for(let name of abc){
//     for(let sport of name.Sports){
//       if(!obj[sport]){
//         obj[sport] = [name.Name];
//       }
//       else{
//         obj[sport].push(name.Name);
//       }
//     }
// };

// arr.push(obj)
//  console.log(arr);
// let a = [
//     {b:[1,2]},
//     {b:[3,4]},
// ];

// let temp = a[0].b[0];
// a[0].b[0] = a[1].b[1] 
//  a[1].b[1] = temp;

// console.log(a);

// let a = [1,2,3];
// let b= [1,2,5]
// let d = a;       //[5,2,3]
// let c = [3,4,5];  
//   c = b ;   //[1,2,6]
//  a[0] = 5;   [5,2,3]
//  c[2] = 6 ;   [1,2,6]
//  console.log(a,b,c,d);



// export  function mindMap(callbackfun, thisarg) {
//     console.log(callbackfun);
//     }

// const map = new WeakMap();

// let obj = {}

// map.set(obj,"thishjkll")

// // delete(obj)
// // obj = undefined;
// console.log(map.get(obj))


