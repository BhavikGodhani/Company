// for (let i = 0; i < 3; i++) {
//     setTimeout(function(){
//        console.log(i);
//     },1000)
//     setInterval(() => {
//         console.log(i);
//     },1000)
// }

// function a(...Number){
//     console.log(arguments);
//     return;
// }

// console.log(a(1,3));

// let animal = {
//     eats: true
//   };

//   let rabbit = Object.create(animal); 

//   console.log(rabbit.eats); 

//   console.log(Object.getPrototypeOf(rabbit) === animal); 
//   Object.setPrototypeOf(rabbit, {});

//   console.log(rabbit);


function passwordValidation(pass) {

    if (pass.length < 8) {
        return false;
    }
    var oneLowerCase = false;
    var oneUpperCase = false;
    var oneSpecialCase = false;
    var oneNumber = false;

    var CloseWiseNumber = getCloseWiseCheck()
    var AntiCloseWiseNumber = getAntiCloseWiseCheck()
    var CloseWiseLowerCase = getCloseWiseLowerCaseCBcdheck()
    var AntiCloseLowerCase = getAntiCloseWiseLowerCaseCheck()


    for (var i = 0; i < pass.length; i++) {
        //   console.log(pass[i]);
        if (pass[i] >= "A" && pass[i] <= "Z") {
            oneUpperCase = true;
        }
        else if (pass[i] >= "a" && pass[i] <= "z") {
            oneLowerCase = true;
        }
        else if ("!@#$%^&*()_+".indexOf(pass[i]) !== -1) {
            oneSpecialCase = true;
        }
        else if (pass[i] >= "1" && pass[i] <= "9") {
            oneNumber = true;
        }
        for (let j = 0; j < CloseWiseNumber.length; j++) {
            if (pass.includes(CloseWiseNumber[j])) {
                return false;
            }
        }
        for (let j = 0; j < AntiCloseWiseNumber.length; j++) {
            if (pass.includes(AntiCloseWiseNumber[j])) {
                return false;
            }
        }
        for (let j = 0; j < CloseWiseLowerCase.length; j++) {
            if (pass.toLowerCase().includes(CloseWiseLowerCase[j])) {
                return false;
            }
        }
        for (let j = 0; j < AntiCloseLowerCase.length; j++) {
            if (pass.toLowerCase().includes(AntiCloseLowerCase[j])) {
                return false;
            }
        }
      
    }

    return oneLowerCase &&
        oneUpperCase &&
        oneSpecialCase &&
        oneNumber;
}

function getCloseWiseCheck() {
    let arr = [];
    for (let i = 1; i <= 9; i++) {
        arr.push("" + i + (i + 1) + (i + 2))
    }
    return arr;
}

function getAntiCloseWiseCheck() {
    let arr = [];
    for (let i = 1; i <= 9; i++) {
        arr.push("" + i + (i - 1) + (i - 2))
    }
    return arr;
}

function getCloseWiseLowerCaseCBcdheck() {
    let arr = [];
    for (let i = 97; i <= 122; i++) {
        arr.push("" + String.fromCharCode(i) + String.fromCharCode(i + 1) + String.fromCharCode(i + 2))
    }
    return arr;
}

function getAntiCloseWiseLowerCaseCheck() {
    let arr = [];
    for (let i = 97; i <= 122; i++) {
        arr.push("" + String.fromCharCode(i) + String.fromCharCode(i - 1) + String.fromCharCode(i - 2))
    }
    return arr;
}

console.log(passwordValidation("nhadee@567"));


// console.log("Abc@123".toLowerCase());
