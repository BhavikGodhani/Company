// let  arr = [1,2,4,5]

// class A {
//     constructor(arr) {
//         this.arr = arr;
//     }

//     add(){
//        arr.push(3)
//     }
//     delete(){
//       arr.splice(1,2,2,4);
//     }
//     print(){
//         console.log(arr)
//     }
// }

// const a = new A

// a.add()
// a.print()
// a.delete()
// a.print()


// class A {
//     constructor(color,name) {
//         this.color = color
//         this.name = name;
//     }
//     getFun(){
//         console.log(this.color,this.name);
//     }
// }

// let a = new A("green","bhavik")
// a.getFun()

// class A {
//  static sayHi()
//     {
//         console.log("bark");
//     }
// }
// class B extends  A {
//   sayhi(){
//     console.log("cruk")
//   }
// }

// const b = new B;

// b.sayHi()

// class A {
//     sayhi(){
//         console.log("bhavik");
//     }
// }

// new A().sayhi()

////////////////////////////////////////////////////////////

// class A {
//     isEmpty() {
//         return this.length === 0;
//       }
// }
// class B extends A {
   
// }

// const arr = new B(1,2,3,4,5)
//       const filter = arr.filter((x) => x >= 2)
//       console.log(arr);


// class A {
//     constructor(){
//         this.data = {}
//         this.length = 0;
//     }

//     push(element) {
//         this.data[this.length] = element;  
//         this.length++;
//     }
//     pop(){
//       delete this.data[this.length - 1]
//       this.length--;
//     }
//     insertAtIndex(item,idx){
//         for(let i = this.length ; i>=idx;i--){
//             this.data[i] = this.data[i-1];
//         }
//         // console.log(this.data,idx);
//         this.data[idx] = item;
//         this.length++;
//     }

//     deleteAtIndex(idx){
//         for (let i = idx; i < this.length - 1; i++) {
//             this.data[i] = this.data[i + 1];
//         }
//             delete this.data[this.length-1]
//             this.length--;
//     }


// }
// const a = new A()

// a.push(12)
// a.push(23);
// a.push(152);
// a.push(182);
// a.push(47);
// // a.pop();

// a.insertAtIndex(456, 2); 

// // a.deleteAtIndex(1)

// for(let key in a.data)
//     {
//         console.log(a.data[key]);
//     }

//     async function upperCase(data){
//        return  data * 2 ;
//     }
//    async function abc(){

//        let arr =[1,2,3,4,5];
       
//        let ans = arr.map(async(x) => {
//          return  await upperCase(x);
//         })
//         console.log(ans);   
//     }
    // abc()

   //  function parenthithisValid(str){
   //      let s = []
   //      for(let  i = 0; i<str.length;i++){
   //          let char = s[s.length -1]
   //           if(str[i] == "("  || str[i] == "{" ||  str[i] == "["){
   //              s.push(str[i])
   //           }
   //           else if((char == "(" && str[i] == ")") || (char == "{" && str[i] == "}") || (char == "[" && str[i] == "]") ){
   //              s.pop()
   //           }
   //           else{
   //              return false;
   //           }
   //      }
   //      return s.length ? false:true;
   //  }
   //  console.log(parenthithisValid("(}"))


   // function high(s){
   //    // let arr = a.split(" ")
   //    // let length = arr.map(x => x.split('').reduce((sum, x) =>  sum + x.charCodeAt(0) - 96, 0));
   //    // let max = Math.max(...length)
   //    // let q = length.indexOf(max)
   //    //  return arr[q]
   //    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
   //    console.log(as);
   //    return s.split(' ')[as.indexOf(Math.max(...as))];
   // }
   // console.log(high("man i need a taxi up to ubud"));


  //  function filter_lsit(arr){
  //    return arr.filter((x) => Number(x))
  //  }
  //  console.log(filter_lsit([1,2,'a','b']));

//   function parityCheck(parity,bin)
// {
//   const a = (bin.split('1').length - 1) % 2 === 0;
  

//   if(parity == "even"){
//     return a ? 0 : 1;
//   }
//   else{
//     return a ? 1 : 0;
//   }
// }
// console.log(parityCheck("odd","101011"))


  // const target = function(n){
  //   return n%2?'Odd':'Even';
  // };
  // const handler = {
  //   get(target, prop) {
  //     return target(prop);
  //   }
  // };
  // const evenOrOdd = new Proxy(target, handler);
  
  // console.log(evenOrOdd("101010"));
  
  // K  = K
  
  // R  = (K - 273.15)*9/5 + 491.67
  
  // Re = (K - 273.15)*4/5
  
  // Ro = (K - 273.15)*21/40 + 7.5
  
  // N  = (K - 273.15)*33/100
  
  // De = (373.15 - K)*3/2
  //   var toCelcius = {
  //     C: function(t) { return t },
  //     F: function(t) { return (t - 32) * 5 / 9 },
  //     K: function(t) { return t - 273.15 },
  //     R: function(t) { return (t - 491.67) * 5 / 9 },
  //     De: function(t) { return 100 - t * 2 / 3 },
  //     N: function(t) { return t * 100 / 33 },
  //     Re: function(t) { return t * 5 / 4 },
  //     Ro: function(t) { return (t - 7.5) * 40 / 21 }
  //   }
  //   var fromCelcius = {
  //     C: function(t) { return t },
  //     F: function(t) { return t * 9 / 5 + 32 },
  //     K: function(t) { return t + 273.15 },
  //     R: function(t) { return (t + 273.15) * 9 / 5 },
  //     De: function(t) { return (100 - t) * 3 / 2 },
  //     N: function(t) { return t * 33 / 100 },
  //     Re: function(t) { return t * 4 / 5 },
  //     Ro: function(t) { return t * 21 / 40 + 7.5 }
  //   }
    
  //   function convertTemp(temp, from, to) {
  //     if (from === to) return temp
      
  //     temp = toCelcius[from](temp)
  //     temp = fromCelcius[to](temp)
      
  //     return Math.round(temp)
  //   }
  // console.log(convertTemp(-30, "De", "K"));
  // class List {
  //   constructor(type) {
  //     this.type = type;
  //     this.items = [];
  //   }
    
  //   get count() {
  //     return this.items.length;
  //   }
    
  //   add(item){
  //     if(typeof item != this.type)
  //       return `This item is not of type: ${this.type}`;
        
  //     this.items.push(item);
  //     return this;
  //   }
  // }
  // const myList = new List('string')
      

  // myList.add(5), `This item is not of type: string`, 'Wrong type added';
 
  // function correctTail(bod, tail){
  
  
  //   sub = bod.substr(bod.length-(tail.length))
    
  //   if (sub === tail)
  //     return true
  //   else 
  //     return false
  // }
  // console.log(correctTail('Gqwwuylocfepuzmoycejdwmnnofvefpkj', "h"));

  /////////////////////////////////////////////////////////

  // function howManyDalmations(number){
  
  //   let dogs = ["Hardly any",
  //    "More than a handful!", 
  //    "Woah that's a lot of dogs!", 
  //    "101 DALMATIONS!!!"];
    
  //    let respond =  number <= 10 ? dogs[0] : 
  //                   number <= 50 ? dogs[1] : 
  //                   number == 101 ?  dogs[3] :
  //                    dogs[2];
     
  //    return respond;
  // }   
  // console.log(howManyDalmations(101))

  ////////////////////////////////////////////////////////

  // function myFirstKata(a,b) {
  //     if(typeof(a) !== "number" ||  typeof(b) != "number") {
  //      return false;
  //     }
  //     else { 
  //     return   a % b + b % a;
  //     }
  //   }
  //   console.log(myFirstKata(true,true));

//   var name;
//   function greetabe() {
//     name = 'Abe';
//     return "Hello, " + name + '!';
//   };
  
  
//   function greetben() {
//     name = 'Ben'; 
//     return "Hello, " + name + '!';
//   };

// console.log(greetabe());
// console.log(greetben());


//  let arr = [1,2,3,4]
// //  CRUD
// [arr[0],arr[1]] = [arr[1],arr[0]];

// console.log(arr);


// function curriedAdd(...args){
//   let sum = 0;

//   for (let arg of args) sum += arg;

//   return sum;
// }
// console.log(curriedAdd(1)(2)(3)); // Output: 6 
// console.log(curriedAdd(1, 2)(3)); // Output: 6 
// console.log(curriedAdd(1, 2, 3)); // Output: 6
 
// function showName() {
// console.log(arguments );
// console.log( typeof arguments[0] );
//   console.log (arguments[1] );
// }

// // shows: 2, Julius, Caesar
// showName("Julius", "Caesar");

// let obj = {
//   name : "Bhavik",
// }
console.log(Array.from("bhavik"));