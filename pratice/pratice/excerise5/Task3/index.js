let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let fourth = document.getElementById('fourth');
let firstBox = document.getElementById('firsttext');
let secondBox = document.getElementById('secondtext');

const color3sec = ["yellow", "blue", "pink"];
const color5sec = ["red", "purple", "green", "orange", "gray"];

let index3 = 0;
let ref3Sec = undefined;

let index5 = 0;
let ref5Sec = undefined;

let clickItem1 = false;


document.addEventListener('DOMContentLoaded', function () {
    alert('Page loaded!');
    secondBox.innerText = "Click Me First";
    second.style.backgroundColor = color3sec[index3];
    first.style.backgroundColor = color5sec[index5];
    changeColor3sec();
});

function secondboxes() {
    firstBox.innerText = "Oops!";
    clickItem1 = true;
    changeMulColor5Sec();
}


function changeColor3sec() {
    ref3Sec = setInterval(() => {
        index3++;
        if (index3 == color3sec.length) {
            index3 = 0;
        }
        third.style.backgroundColor = color3sec[index3];
    }, 3000);
}


function changeMulColor5Sec() {
    ref5Sec = setInterval(() => {
        index5++;

        if (index5 == color5sec.length) {
            index5 = 0;
        }
        fourth.style.backgroundColor = color5sec[index5];
    }, 5000);
}

document.addEventListener('keydown', () => {
    if (ref3Sec) {
        clearInterval(ref3Sec);
        ref3Sec = undefined;
    }
    if (ref5Sec) {
        clearInterval(ref5Sec);
        ref5Sec = undefined;
    }

    if (index3 == 0) {

        third.style.backgroundColor = color3sec[color3sec.length - 1];
     
    } else {
                                            
        third.style.backgroundColor = color3sec[index3 - 1];
     
     }

    if (index5 == 0) {
        fourth.style.backgroundColor = color5sec[color5sec.length - 1];
    } else {
        fourth.style.backgroundColor = color5sec[index5 - 1];
    }
});

document.addEventListener('keyup', () => {
    changeColor3sec();
    third.style.backgroundColor = color3sec[index3];
    fourth.style.backgroundColor = color5sec[index5];
    if (clickItem1) {
        changeMulColor5Sec();
    }
});


second.addEventListener('click', secondboxes);