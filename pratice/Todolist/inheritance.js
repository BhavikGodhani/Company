 //single 
// class A {

//     constructor(name){
//         this.name = name;
//     }

//     bark(){
//         console.log("Name is",this.name);
//     }
// }

// class B extends A{
//     constructor(name){
//          super(name);
//     }
//     speak(){
//         super.bark()
//         console.log("The exit value is",this.name);
//     }

// }

// const b = new B("Bhavik")
// b.speak()

////////////////////////////////////////

//multilevel

// class A {
//     constructor(name){
//         this.name = name;
//     }
//     bark(){
//         console.log("Name is",this.name);
//     }
// }

// class B extends A {
//     constructor(name){
//          super(name);
//     }
//     speak(){
//         console.log("The value is",this.name);
//     }

// }
// class C  extends B {

//     constructor(name){
//          super(name);
//     }
//     dark(){
//         super.bark()
//         super.speak()
//         console.log("The exit value is",this.name);
//     }

// }

// const b = new C("Bhavik")
// b.dark()

// hirechical

class A {
    constructor(name){
        this.name = name;
    }
    bark(){
        console.log("Name is",this.name);
    }
}

class B extends A {
    constructor(name){
         super(name);
    }
    speak(){
        super.bark()
        console.log("The value is",this.name);
    }

}
class C  extends A {

    constructor(name){
         super(name);
    }
    dark(){
        super.bark()
        console.log("The exit value is",this.name);
    }

}
const b = new B("Bhavik")
const c = new C("Bhavik")
b.speak()
c.dark()
