const choose = 1; 
const one = document.getElementById('one').value;
const two = document.getElementById('two').value;
const three = document.getElementById('three').value;
const four = document.getElementById('four').value;
const five = document.getElementById('five').value;
const six = document.getElementById('six').value;
const seven = document.getElementById('seven').value;
const eight = document.getElementById('eight').value;
const nine = document.getElementById('nine').value;

const won = document.getElementById("won");

function mainfun() {
    let cells = [
        [one,two,three],
        [four,five,six],
        [seven,eight,nine],
     ];

    function winner(a, b, c) {
        return (a !== '' && a === b && b === c);
    }

    for (let i = 1; i <= 3; i++) {
        // Check rows and columns
        if (winner(cells[i][1], cells[i][2], cells[i][3]) || winner(cells[1][i], cells[2][i], cells[3][i])) {
           if(choose == 1){
            won.innerHTML = "player X won";
           }
           else{
            won.innerHTML = "player 0 won";
           }
            disallCell();
        }
    }

    // Check diagonals
    if (win(cells[1][1], cells[2][2], cells[3][3]) || win(cells[1][3], cells[2][2], cells[3][1])) {
        if(choose == 1){
            won.innerHTML = "player X won";
           }
           else{
            won.innerHTML = "player 0 won";
           }
        disallCell();
    }

    if (!cells.flat().includes("")) {
        won.innerHTML = "Tie!";
        return; 
    }
}
    
function disallCell() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i).disabled = true;
    }
}

// function mainfun() {
//     // three row
//     if (one.value == "X" && two.value == "X" && three.value == "X") {
//        abc.innerText = "Player X won";
//         four.disabled = true;
//         five.disabled = true;
//         six.disabled = true;
//         seven.disabled = true;
//         eight.disabled = true;
//         nine.disabled = true;

//     }
//     else if (four.value == "X" && five.value == "X" && six.value == "X") {
//        abc.innerText.innerText = "Player X won";
//         one.disabled = true;
//         two.disabled = true;
//         three.disabled = true;
//         seven.disabled = true;
//         eight.disabled = true;
//         nine.disabled = true;

//     }
//     else if (seven.value == "X" && eight.value == "X" && nine.value == "X") {
//          abc.innerText = "Player X won";
//         one.disabled = true;
//         two.disabled = true;
//         three.disabled = true;
//         four.disabled = true;
//         five.disabled = true;
//         six.disabled = true;
//     }

//     // three column
//     else if (one.value == "X" && four.value == "X" && seven.value == "X") {
//        abc.innerText = "Player X won";
//         two.disabled = true;
//         three.disabled = true;
//         five.disabled = true;
//         six.disabled = true;
//         eight.disabled = true;
//         nine.disabled = true;

//     }
//     else if (two == "X" && five == "X" && eight == "X") {
//         abc.innerText = "Player X won";
//         one.disabled = true;
//         three.disabled = true;
//         four.disabled = true;
//         six.disabled = true;
//         seven.disabled = true;
//         nine.disabled = true;


//     }
//     else if (three.value == "X" && six.value == "X" && nine.value == "X") {
//        abc.innerText = "Player X won";
//         one.disabled = true;
//         two.disabled = true;
//         four.disabled = true;
//         five.disabled = true;
//         seven.disabled = true;
//         eight.disabled = true;


//     }
//     //cross  right
//     else if (one.value == "X" && five.value == "X" && nine.value == "X") {
//        abc.innerText = "Player X won";
//         two.disabled = true;
//         three.disabled = true;
//         four.disabled = true;
//         six.disabled = true;
//         seven.disabled = true;
//         eight.disabled = true;

//     }
//     else if (three.value == "X" && five.value == "X" && seven.value == "X") {
//         abc = "Player X won";
//         one.disabled = true;
//         two.disabled = true;
//         four.disabled = true;
//         six.disabled = true;
//         eight.disabled = true;
//         nine.disabled = true;

//     }

//     /// 0 

//     else if (one.value == "0" && two.value == "0" && three.value == "0") {
//         abc.innerText = "Player 0 won";
//         four.disabled = true;
//         five.disabled = true;
//         six.disabled = true;
//         seven.disabled = true;
//         eight.disabled = true;
//         nine.disabled = true;

//     }
//     else if (four.value == "0" && five.value == "0" && six.value == "0") {
//        abc.innerText = "Player 0 won";
//        one.disabled = true;
//        two.disabled = true;
//        three.disabled = true;
//        seven.disabled = true;
//        eight.disabled = true;
//        nine.disabled = true;
//     }
//     else if (seven.value == "0" && eight.value == "0" && nine.value == "0") {
//         abc.innerText  = "Player 0 won";
//         one.disabled = true;
//         two.disabled = true;
//         three.disabled = true;
//         four.disabled = true;
//         five.disabled = true;
//         six.disabled = true;

//     }

//     // three column
//     else if (one.value == "0" && four.value == "0" && seven.value == "0") {
//         abc.innerText = "Player 0 won";
//         two.disabled = true;
//         three.disabled = true;
//         five.disabled = true;
//         six.disabled = true;
//         eight.disabled = true;
//         nine.disabled = true;

//     }
//     else if (two.value == "0" && five.value == "0" && eight.value == "0") {
//        abc.innerText = "Player 0 won";
//        one.disabled = true;
//        three.disabled = true;
//        four.disabled = true;
//        six.disabled = true;
//        seven.disabled = true;
//        nine.disabled = true;

//     }
//     else if (three.value == "0" && six.value == "0" && nine.value == "0") {
//         abc.innerText= "Player 0 won";
//         one.disabled = true;
//         two.disabled = true;
//         four.disabled = true;
//         five.disabled = true;
//         seven.disabled = true;
//         eight.disabled = true;
//     }
//     //cross  right
//     else if (one.value == "0" && five.value == "0" && nine.value == "0") {
//         abc.innerText = "Player 0 won";
//         two.disabled = true;
//         three.disabled = true;
//         four.disabled = true;
//         six.disabled = true;
//         seven.disabled = true;
//         eight.disabled = true;
//     }
//     //cross left
//     else if (three.value == "0" && five.value == "0" && seven.value == "0") {
//         abc.innerText = "Player 0 won";
//         one.disabled = true;
//         two.disabled = true;
//         four.disabled = true;
//         six.disabled = true;
//         eight.disabled = true;
//         nine.disabled = true;
//     }

//     //tie

//     else if ((one == "X" || one == "0") && (two == "X" || two == "0") &&
//         (three == "X" || three == "0") && (four == "X" || four == "0") &&
//         (five == "X" || five == "0") && (six == "X" || six == "0") &&
//         (seven == "X" || seven == "0") && (eight == "X" || eight == "0") &&
//         (nine == "X" || nine == "0")) {

//             abc = "Match tie";
//     }

// }



// function onefun() {
//     if (choose == 1) {
//         document.getElementById("one").value = "X";
//         document.getElementById("one").disabled = true;
//         choose = 0;
//     }
//     else {
//         document.getElementById("one").value = "0";
//         document.getElementById("one").disabled = true;
//             choose = 1;
//     }
//     mainfun();
// }


// function twofun() {
//     if (choose == 1) {
//         document.getElementById("two").value = "X";
//         document.getElementById("two").disabled = true;
//         choose = 0;
//     }
//     else {
//         document.getElementById("two").value = "0";
//         document.getElementById("two").disabled = true;
//         choose = 1;
//     }
//     mainfun();
// }
// function threefun() {
//     if (choose == 1) {
//         document.getElementById("three").value = "X";
//         document.getElementById("three").disabled = true;
//         choose = 0;
//     }
//     else {
//         document.getElementById("three").value = "0";
//         document.getElementById("three").disabled = true;
//         choose = 1;
//     }
//     mainfun();
// }
// function fourfun() {
//     if (choose == 1) {
//         document.getElementById("four").value = "X";
//         document.getElementById("four").disabled = true;
//         choose = 0;
//     }
//     else {
//         document.getElementById("four").value = "0";
//         document.getElementById("four").disabled = true;
//         choose = 1;
//     }
//     mainfun();
// }

// function fivefun() {
//     if (choose == 1) {
//         document.getElementById("five").value = "X";
//         document.getElementById("five").disabled = true;
//         choose = 0;
//     }
//     else {
//         document.getElementById("five").value = "0";
//         document.getElementById("five").disabled = true;
//         choose = 1;
//     }
//     mainfun();
// }
// function sixfun() {
//     if (choose == 1) {
//         document.getElementById("six").value = "X";
//         document.getElementById("six").disabled = true;
//         choose = 0;
//     }
//     else {
//         document.getElementById("six").value = "0";
//         document.getElementById("six").disabled = true;
//         choose = 1;
//     }
//     mainfun();
// }
// function sevenfun() {
//     if (choose == 1) {
//         document.getElementById("seven").value = "X";
//         document.getElementById("seven").disabled = true;
//         choose = 0;
//     }
//     else {
//         document.getElementById("seven").value = "0";
//         document.getElementById("seven").disabled = true;
//         choose = 1;
//     }
//     mainfun();
// }
// function eightfun() {
//     if (choose == 1) {
//         document.getElementById("eight").value = "X";
//         document.getElementById("eight").disabled = true;
//         choose = 0;
//     }
//     else {
//         document.getElementById("eight").value = "0";
//         document.getElementById("eight").disabled = true;
//         choose = 1;
//     }
//     mainfun();
// }
// function ninefun() {
//     if (choose == 1) {
//         document.getElementById("nine").value = "X";
//         document.getElementById("nine").disabled = true;
//         choose = 0;
//     }
//     else {
//         document.getElementById("nine").value = "0";
//         document.getElementById("nine").disabled = true;
//         choose = 1;
//     }
//     mainfun();
// } 