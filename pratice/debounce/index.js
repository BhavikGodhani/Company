// function debounce(func,ms){
//   let timeout ;

//   return function(){
//     clearInterval(timeout)
//     timeout = setInterval(() => func.apply(this,arguments),ms);
//   }
// }

// function delay(){
//     console.log("Function delay");
// }
// let a = debounce(delay,10000)
// a()

let animal = {
    eats: true
  };
  
  let rabbit = {
    jumps: true,
  };
  rabbit.prototype = animal

  console.log(Object.keys(rabbit)); // jumps 
  
  for(let prop in rabbit) console.log(prop); 