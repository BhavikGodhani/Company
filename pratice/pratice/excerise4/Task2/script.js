let fName = document.getElementById("fname");
let lName = document.getElementById("lname");
let changeBtn = document.getElementById("changebtn");

let editEvent = null;
let arr= []

function addData() {
    if (fName.value.trim() == "" || lName.value.trim() == "") {
        alert("no Data");
        fName.value = "";
        lName.value = "";
        return;
    }
    let duplicate =  arr.some((x) => x.firstName == fName.value && x.lastName == lName.value);
    if(duplicate) {
      alert("Already exit");
      fName.value = "";
      lName.value = "";
  
    }
      
    let table = document.getElementById('dataTable');
    let row = table.insertRow();
    let firstNameCell = row.insertCell(0);
    let lastNameCell = row.insertCell(1);
    let editCell = row.insertCell(2);
    let deleteCell = row.insertCell(3);

        const inputFName = document.createElement("input");
        const inputLName = document.createElement("input");
        const editBtn = document.createElement("input");
        const deleteBtn = document.createElement("input");
    
    
        inputFName.setAttribute("type","text");
        inputFName.setAttribute("value",`${fName.value}`);
        inputFName.setAttribute("disabled","");
    
        inputLName.setAttribute("type","text");
        inputLName.setAttribute("value",`${lName.value}`);
        inputLName.setAttribute("disabled","");
    
    editBtn.setAttribute("type","button");
    editBtn.setAttribute("value","Edit");
  
    deleteBtn.setAttribute("type","button");
    deleteBtn.setAttribute("value","Delete");
  
    firstNameCell.append(inputFName);
    lastNameCell.append(inputLName);
    editCell.append(editBtn);
    deleteCell.append(deleteBtn);
  
  
  row.append(firstNameCell,lastNameCell,editCell,deleteCell);   

  let  obj = {
    firstName:fName.value,
    lastName:lName.value,
  }
  arr.push(obj);
 
  console.log(arr);
  fName.value = "";
  lName.value = "";
}   

function deleteData(event) {
    if (event.target.value != "Delete") {
        return;
    }
    const trDelete = event.target.parentElement.parentElement;
    trDelete.remove();
}

function editData(event) {
    if (event.target.value != "Edit") {
        return;
    }
    const trEdit = event.target.parentElement.parentElement;
    
    const inputFName = trEdit.children[0].firstElementChild;    
    const inputLName = trEdit.children[1].firstElementChild;
   
    
    fName.value = inputFName.value;
    lName.value = inputLName.value;
    changeBtn.value = "UPDATE";
    editEvent = event;
    
}

function updateData(event) {
    if (fName.value == "" || lName.value == "") {
        alert("dont allowed empty filled");
        return;
    }
    const trEdit = event.target.parentElement.parentElement;
    const inputFName = trEdit.children[0].firstElementChild;
    const inputLName = trEdit.children[1].firstElementChild;
  
    inputFName.value = fName.value;
    inputLName.value = lName.value;
    fName.value = "";
    lName.value = "";
    changeBtn.value = "ADD";

  
}

function checkBtnStatus(event) {
    if (event.target.value == "ADD") {
        addData();
    } else if (event.target.value == "UPDATE") {
        updateData(editEvent);
    }
}

changeBtn.addEventListener("click",checkBtnStatus);
table.addEventListener("click",deleteData);
table.addEventListener("click",editData);

