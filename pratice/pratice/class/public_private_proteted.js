///////////////////////////////////////////////////////  public 
// class Counter {
//     constructor() {
//       this.count = 0;
//     }
  
//     increment() {
//       this.count++;
//     }
  
//     getCount() {
//       return this.count;
//     }
//   }
  
//   const counter = new Counter();
//   counter.increment();
//   console.log(counter.getCount());


  /////////////////////////////////////// private

//   class MyClass {
//     #privateMethod() {
     
//       console.log('This is a private method');
//     }
  
//     publicMethod() {
    
//       this.#privateMethod();
//     }
//   }
  
//   const instance = new MyClass();
//   instance.publicMethod(); // Output: This is a private method
//   instance.#privateMethod(); // Error: Private method '#privateMethod' cannot be accessed outside class instance
  
 
// class BankAccount {
//     #balance = 0; // Private field
  
//     #updateBalance(amount) {
//       this.#balance += amount;
//     }
  
//     deposit(amount) {
//       this.#updateBalance(amount);
//       console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
//     }
  
//     withdraw(amount) {
//       if (amount <= this.#balance) {
//         this.#updateBalance(-amount);
//         console.log(`Withdrawn ${amount}. New balance: ${this.#balance}`);
//       } else {
//         console.log(`Insufficient balance. Current balance: ${this.#balance}`);
//       }
//     }
//   }
  
//   const account = new BankAccount();
//   account.deposit(100); // Output: Deposited 100. New balance: 100
//   account.withdraw(30); // Output: Withdrawn 30. New balance: 70
//   account.#balance; // Error: Private field '#balance' cannot be accessed outside class instance
//   account.#updateBalance(50); // Error: Private method '#updateBalance' cannot be accessed outside class instance
  
//////////////////////////////////////////////////////// proteted 

// class Base {
//     constructor() {
//       this._protectedField = 'protectedValue';
//     }
  
//     // Protected method
//     _protectedMethod() {
//       console.log('This is a protected method');
//     }
  
//     // Public method that uses protected method
//     publicMethod() {
//       this._protectedMethod();
//     }
//   }
  
//   class Subclass extends Base {
//     // Subclass can access protected methods and fields
//     subclassMethod() {
//       this._protectedMethod();
//       console.log(`Accessing protected field: ${this._protectedField}`);
//     }
//   }
  
//   const instance = new Base();
//   instance._protectedMethod(); // Error: '_protectedMethod' is not accessible
//   console.log(instance._protectedField); // Outputs: 'protectedValue' (but not recommended)
  
//   const subclassInstance = new Subclass();
//   subclassInstance.publicMethod(); // Outputs: 'This is a protected method'
//   subclassInstance.subclassMethod(); // Outputs: 'This is a protected method' and 'Accessing protected field: protectedValue'
  
////////////////////////////////////////////

// function a(){

//     console.log("Bhavik");

//      function b() {
//     console.log("Nishil");
//      }
    
//       this.c = b
//     }
// let aa = new a()
// aa.c()

///////////////////////////////////////////////////

