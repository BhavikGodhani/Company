const array = [
  { firstName: "Bhavik", lastName: "Godhani" },
  { firstName: "Nidit", lastName: "patel" },
  { firstName: "Aman", lastName: "patel" },
  { firstName: "Jaykar", lastName: "Chauhan" },
  { firstName: "Alice", lastName: "Brown" },
  { firstName: "Nishil", lastName: "Suthar" },
  { firstName: "Priya", lastName: "Patel" },
  { firstName: "Unique", lastName: "Patel" },
  { firstName: "Rudra", lastName: "Pandit" },
  { firstName: "Divansh", lastName: "Galani" },
  { firstName: "Romil", lastName: "Dudat" },
  { firstName: "Aakash", lastName: "Patel" },
  { firstName: "Isabella", lastName: "Thomas" },
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
];

let fName = document.getElementById("fstname");
let lName = document.getElementById("lstname");
let changeBtn = document.getElementById("changebtn");
let renderBtn = document.getElementById("renderData");
let table = document.getElementById("dataTable");


let inputArr = [];
let temp = {};

let editEvent = null;
let tempIdx = -1;

function addData() {
  if (fName.value == "" || lName.value == "") {
    alert("not allowed");
    fName.value = "";
    lName.value = "";
    return;
  }

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
    // inputFName.setAttribute("disabled","");
  
    inputLName.setAttribute("type","text");
    inputLName.setAttribute("value",`${lName.value}`);
    // inputLName.setAttribute("disabled","");
  
    editBtn.setAttribute("type","button");
    editBtn.setAttribute("value","Edit");
  
    deleteBtn.setAttribute("type","button");
    deleteBtn.setAttribute("value","Delete");
  
    firstNameCell.append(inputFName);
    lastNameCell.append(inputLName);
    editCell.append(editBtn);
    deleteCell.append(deleteBtn);
  
  
  row.append(firstNameCell,lastNameCell,editCell,deleteCell);   

  
  temp.firstName = fName.value;
  temp.lastName = lName.value;
  if (checkDublicate(temp) != -1) {
    alert("Dublicat Not Allow");
    temp = {};
    fName.value = "";
    lName.value = "";
    return;
  }
  table.append(row);

  inputArr.push(temp);
  temp = {};

  fName.value = "";
  lName.value = "";
}

function deleteData(event) {
  if (event.target.value != "Delete") {
    return;
  }
  const trDelete = event.target.parentElement.parentElement;
  let idx = inputArr.findIndex((element, idx, arr) => {
    if (
      element.firstName == trDelete.children[0].firstElementChild.value &&
      element.lastName == trDelete.children[1].firstElementChild.value
    ) {
      return true;
    }
  });
  inputArr.splice(idx, 1);
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
  
  // deleteBtn.setAttribute()
  tempIdx = inputArr.findIndex((element) => {
    if (
      element.firstName == trEdit.children[0].firstElementChild.value &&
      element.lastName == trEdit.children[1].firstElementChild.value
    ) {
      return true;
    }
  });

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

  
  temp.firstName = fName.value;
  temp.lastName = lName.value;
  
  if (checkDublicate(temp) != -1) {
      alert("Dublicat Not Allow");
      temp = {};
      return;
    }
    inputFName.value = fName.value;
    inputLName.value = lName.value;

  inputArr.splice(tempIdx, 1, temp);
  temp = {};
  tempIdx = -1;

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

function checkDublicate(object) {
  return inputArr.findIndex((element) => {
    return (
      element.firstName == object.firstName &&
      element.lastName == object.lastName
    );
  });
}

function renderData() {
  for (const object of array) {
    if (checkDublicate(object) != -1) {
      continue;
    }
    let row = table.insertRow();
    let firstNameCell = row.insertCell(0);
    let lastNameCell = row.insertCell(1);
    let editCell = row.insertCell(2);
    let deleteCell = row.insertCell(3);
     
    const inputFName = document.createElement("input");
    const inputLName = document.createElement("input");
    const editBtn = document.createElement("input");
    const deleteBtn = document.createElement("input");
  
    inputFName.setAttribute("type", "text");
    inputFName.setAttribute("value", `${object.firstName}`);
    inputFName.setAttribute("disabled", "");

    inputLName.setAttribute("type", "text");
    inputLName.setAttribute("value", `${object.lastName}`);
    inputLName.setAttribute("disabled", "");

    editBtn.setAttribute("type", "button");
    editBtn.setAttribute("value", "Edit");


    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("value", "Delete");
  
    firstNameCell.append(inputFName);
    lastNameCell.append(inputLName);
    editCell.append(editBtn);
    deleteCell.append(deleteBtn);
  
  
  row.append(firstNameCell,lastNameCell,editCell,deleteCell);   

    temp.firstName = object.firstName;
    temp.lastName = object.lastName;
    inputArr.push(temp);
    temp = {};
  }
}

changeBtn.addEventListener("click", checkBtnStatus);
table.addEventListener("click", deleteData);
table.addEventListener("click", editData);
renderBtn.addEventListener("click", renderData);