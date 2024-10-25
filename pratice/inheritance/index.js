// // Creating a prototype object
// var animal = {
//     makeSound: function() {
//       console.log(this.sound);
//     }
//   };
  
//   // Creating a new object using the 'animal' prototype
//   var cat = Object.create(animal);
//   cat.sound = "Meow";
  
//   // Now 'cat' inherits the 'makeSound' method from 'animal'
//   cat.makeSound(); // Outputs: Meow



// class FullName {
//     constructor(name) {
//       this.name = name;
//     }
//     result() {
//       console.log(this.name, '......')
//     }
//   }
//   let newName = new FullName("parth")
//   console.log(newName, newName.result())
//   setTimeout(newName.result, 2000)
  
  
  
//   setTimeout(newName.result.bind(newName), 2000) 
  

function MyClass() {
    const privateMethod = () => {
      console.log("This is a private method");
    };
  
    this.publicMethod = () => {
      privateMethod();
      console.log("This is a public method");
    };
  }
  
  const obj = new MyClass();
  obj.publicMethod(); // Outputs: "This is a private method" followed by "This is a public method"
  obj.privateMethod(); // Error: privateMethod is not defined
  