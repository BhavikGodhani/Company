// function kros(num){

//     let str ="";
//     for(let i =1 ;i<=num;i++){
//       for(let j = 1;j<=num;j++){
//         if(i == j || j == num - i + 1){
//            str +=" *";
//         }else{
//             str +=" ";
//         }
//       }
//       str +="\n";
//     }
//    return str;
// }
// console.log(kros(5));

///////////////////////////////////////////////////////

//      let num = 5;
//     let str ="";
//     for(let i =1 ;i<=num;i++){
//       for(let j = 1;j<=num;j++){
//         str+="*"
//       }
//       str +="\n";
//     }
//    console.log(str);

///////////////////////////////////////////////////


// let num = 5;
// let str ="";
// for(let i =1 ;i<=num;i++){
//   for(let j = 1;j<=num;j++){
//     if( i == 1 ||  i == num || j == 1 || j == num){
//         str+="*"
//     }
//     else{
//         str += " "
//     }
//   }
//   str +="\n";
// }
// console.log(str);

//////////////////////////////////////////////////////


  //    let num = 5;
  //   let str ="";
  //   for(let i =1 ;i<=num;i++){
  //     for(let j = 1;j<=num;j++){
  //        if(j <= num - i){
  //          str += " "
  //        }
  //        else{
  //           str += "*";
  //        }
  //     }
  //     str +="\n";
  //   }
  //  console.log(str);

///////////////////////////////////////////////////////////


// let num = 5;
// let str ="";
// for(let i =1 ;i<=num;i++){
//   for(let j = 1;j<=num;j++){
//      if(j <=i){
//        str += "*"
//      }
//      else{
//         str += " ";
//      }
//   }
//   str +="\n";
// }
// console.log(str);


//////////////////////////////////////////////////////////

// let num = 5;
// let str ="";
// for(let i =1 ;i<=num;i++){
//   for(let j = 1;j<=num-i;j++){
//        str += " "
//      }

//      for(let k = 1; k<=2*i-1;k++){
//         str += "*";
//      }

//      str +="\n";
//   }

// console.log(str);


////////////////////////////////////////////////////////////

// let num = 5;
// let str ="";
// for(let i =1 ;i<=num;i++){
//   for(let j = 1;j<=i;j++){
//        if( j === 1  || j === i || i === num){
//         str += "*"
//        }else{

//            str += " ";
//        }
//      }
//      str +="\n";
//   }

// console.log(str);


////////////////////////////////////////////////////////


// let num = 5;
// let str ="";
// for(let i =1 ;i<=num;i++){
//   for(let j = 1;j<=num-i+1 ;j++){
//        str += "*"
//   }
//   str +="\n";
// }
// console.log(str);

///////////////////////////////////////////

//      let num = 5;
//     let str ="";
//     for(let i =1 ;i<=num;i++){
//       for(let j = 1;j<=i;j++){
//         str+="A"
//       }
//       str +="\n";
//     }
//    console.log(str);

//////////////////////////////


//     let num = 5;
//     let str ="";
//     for(let i =num ;i>=1;i--){
//       for(let j = 1;j<=i;j++){
//         str+="A"
//       }
//       str +="\n";
//     }
//    console.log(str);

///////////////////////////////////

// let num = 5;
// let str = "";
// for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= i; j++) {
//         str += "A"
//     }
//     str += "\n";
// }

//     for (let i = num; i >= 1; i--) {
//         for (let j = 1; j <= i; j++) {
//             str += "A"
//         }
//         str += "\n"

// }
// console.log(str);

/////////////////////////////////////////

// let num = 5;
// let str = "";
// for (let i = num; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         str += "A"
//     }
//     str += "\n"

// }
// str +="\n"
// for (let i = 1; i <= num; i++) {
//         for (let j = 1; j <= i; j++) {
//             str += "B"
//         }
//         str += "\n";
//     }


// console.log(str);


////////////////////////////////////////////////


// let num = 5;
// let str = "";
// for (let i = num; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         str += "A"
//     }
//     str += "\n"

// }
// str +="\n"
// for (let i = 1; i <= num; i++) {
//         for (let j = 1; j <= i; j++) {
//             str += "B"
//         }
//         str += "\n";
//     }


// console.log(str);


////////////////////////////////////////////////


// let num = 5;
// let k = num;
// let str ="";
// for(let i =1 ;i<=num;i++){
//   for(let j = 1;j<=num;j++){

//     if(j >= k)
//         str +="* "
//     else
//         str += " "
// }
//   k--;   
//     str +="\n";
// }


// console.log(str);

////////////////////////////////////////////

// *
//   *
// *    *
//   *     *
// *    *    *
//   *     *
// *    *
//   *
// *


/////////////////////////////////


//     let num = 5;
//     let str ="";
 
//     for(let i =1 ;i<=num;i++){
//         for(let j = 1;j<=i;j++){
//           str+="*   "
//         }
//         str +="\n";
//       }


//     for(let i =num-1 ;i>=1;i--){
//       for(let j = 1;j<=i;j++){
//         str+="* "
//       }
//       str +="\n";
//     }
//    console.log(str);

////////////////////////////////

// let num = 5;

// let str = "";

// for(let i =1;i<=num;i++){
//     for(let j = 1;j<=num-i;j++){
//       str += " ";
//     }

//     for(let k = 1;k<= 2 * i -1;k++){
//         str +="*"
//     }
//     str += "\n"
// }

// console.log(str);


//////////////////////////////////////

// let num = 5 ;

// let str = "";


// for(let i = 1 ;i<=num;i++){
//     for(let j = 1 ;j<=i;j++){
//          str +=String.fromCharCode((i-1) + 65);
//     }
//     str +="\n";
// }

// console.log(str);

////////////////////////////////////


// let num = 5 ;
// let count = 0;
// let str = "";


// for(let i = 1 ;i<=num;i++){
//     for(let j = 1 ;j<=i;j++){
//         str +=String.fromCharCode(count + 65);
//         count++;
//     }
//     str +="\n";
// }

// console.log(str);

///////////////////////////////////////

// let num = 5 ;
// let str = "";


// for(let i = num ;i>=1;i--){
//     for(let j = i-1;j>=0;j--){
//         str +=String.fromCharCode(j + 65);
//     }
//     str +="\n";
// }

// console.log(str);



/////////////////////////////

// let num = 5 ;
// let str = "";


// for(let i = 1 ;i<=num;i++){
//     for(let j = 0 ;j< num-i+1;j++){
//         str +=String.fromCharCode((num-j-1) + 65);
//     }
//     str +="\n";
// }

// console.log(str);

//////////////////////////////////////////////


// let num = 5 ;
// let str = "";


// for(let i = 1 ;i<=num;i++){
//     for(let j = 0 ;j< i;j++){
//         str += " "

//     }
    
//     str +="\n";
// }

// console.log(str);
////////////////////////////////////////

//* * * * * 
//  
//  *   *
//
//    *


// let n = 3;
// let str = "";


// for (let i = n; i >= 1; i--) {
  
//   for (let j = 1; j <=2 * n - 1; ++j) {
    
//     if(j === n - i + 1 || j === n + i - 1 || i === n){  
//       str += "*"
//     }
//     str+=" "
//   } 
// str += "\n"
// }

// console.log(str);

////////////////////////////////////

// * * * *
//  *   *
//   * *
//    * 

// let num = 4;
// let str = "";
// for(let i = 1; i<=num;i++){
//   for(let j = 1;j<i;j++){
//     str +=" "
//   }
//   for (var j = i; j <= num; j++) {
//     if(j == i||j == num||i == 1)
//     str +="* "
//   else
//     str +=" "
// }
//   str += "\n";
// }
// console.log(str);

//////////////////////////////////

//   *
//  * *
// *   *

// let num = 4;
// let str = "";
// let x = num;
// let y = num;
// for(let i = 1; i<=num;i++){
//   for(let j = 1;j<=i;j++){
//     if(j == num-i+1 || j == num+i-1 ){
//       str += "*"
//     }
//     else{
//       str +=" "
//     }
//   }
//     x++;
//     y--;
    
//   str += "\n";
// }
// console.log(str);

/////////////////////////////////////////////////////////////

// let num = 5 ;
// let str = "";


// for(let i = 1 ;i<=num;i++){
//     for(let j = num;j>=i;j--){
//         str += "*"
//     }
    
//     str +="\n";
// }


// console.log(str);

// *****
//  ****
//   ***
//    **
//     *

// for(let i = num ;i>=1;i--){
//   for(let j = 1;j<=num-i;j++){
//     str+=" "
//   }
//   for(let k=1;k<=i;k++){
//     str+="*"
//   }
//   str +="\n";
// }


// console.log(str);

///////////////////////////////////////////////
      
//       *
//       *
//       *
//    *******
//       *
//       *
//       *


// let n = 4;
// let str = " "

// for(let i =1;i<=num;i++){

//   for(let j =1;j<=num;j++){

//   }
//   str+="\n"
// }
// console.log(str);