let fName = document.getElementById("fname");
let lName = document.getElementById("lname");
let changeBtn = document.getElementById("changebtn");
let deleteSelectedBtn = document.getElementById("deleteSelectedBtn");
let selectAllCheckbox = document.getElementById("selectAll");
let selectedCount = document.getElementById("selectedCount");
let table = document.getElementById('table');
let editEvent = null;

function addData() {
    if (fName.value == "" || lName.value == "") {
        alert("No Data");
        fName.value = "";
        lName.value = "";
        return;
    }
 

    let row = table.insertRow();
    
    let checkBoxCell = row.insertCell(0);
    let firstNameCell = row.insertCell(1);
    let lastNameCell = row.insertCell(2);
    let editCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.classList.add("row-checkbox");
    
    checkBoxCell.appendChild(checkBox);
    
    const inputFName = document.createElement("input");
    inputFName.setAttribute("type", "text");
    inputFName.setAttribute("value", fName.value);
    inputFName.setAttribute("disabled", "");

    const inputLName = document.createElement("input");
    inputLName.setAttribute("type", "text");
    inputLName.setAttribute("value", lName.value);
    inputLName.setAttribute("disabled", "");

    const editBtn = document.createElement("input");
    editBtn.setAttribute("type", "button");
    editBtn.setAttribute("value", "Edit");

    const deleteBtn = document.createElement("input");
     deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("value", "Delete");

    firstNameCell.append(inputFName);
    lastNameCell.append(inputLName);
    editCell.append(editBtn);
    deleteCell.append(deleteBtn);

    
    fName.value = "";
    lName.value = "";
    
      
    checkBox.addEventListener("click", updateSelectedCount);
    updateSelectedCount();
}

function deleteData(event) {
    if (event.target.value === "Delete") {
        const trDelete = event.target.parentElement.parentElement;
        trDelete.remove();
        updateSelectedCount();
    }
}

function editData(event) {
    if (event.target.value != "Edit") {
        return;
    }
    const trEdit = event.target.parentElement.parentElement;
    
    const inputFName = trEdit.children[1].firstElementChild;
    const inputLName = trEdit.children[2].firstElementChild;
    
    fName.value = inputFName.value;
    lName.value = inputLName.value;
    changeBtn.value = "UPDATE";
    editEvent = event;
}

function updateData(event) {
    if (fName.value == "" || lName.value == "") {
        alert("Don't allow empty fields");
        return;
    }
    const trEdit = event.target.parentElement.parentElement;
    
    const inputFName = trEdit.children[1].firstElementChild;
    const inputLName = trEdit.children[2].firstElementChild;
    inputFName.value = fName.value;
    inputLName.value = lName.value;
    fName.value = "";
    lName.value = "";
    changeBtn.value = "ADD";
}

function updateSelectedCount() {
    const checkboxes = document.querySelectorAll(".row-checkbox:checked");
    const totalCheckboxes = document.querySelectorAll(".row-checkbox");

    selectedCount.textContent = checkboxes.length;
   


    selectAllCheckbox.checked = checkboxes.length === totalCheckboxes.length;
}

selectAllCheckbox.addEventListener("click", function() {
    const checkboxes = document.querySelectorAll(".row-checkbox");
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
    
    updateSelectedCount();
});

deleteSelectedBtn.addEventListener("click", function() {
    const checkboxes = document.querySelectorAll(".row-checkbox:checked");
    checkboxes.forEach(checkbox => {
        checkbox.closest("tr").remove();
    });
    updateSelectedCount();
});

function checkBtnStatus(event) {
    if (event.target.value === "ADD") {
        addData();
    } else if (event.target.value === "UPDATE") {
        updateData(editEvent);
    }
}

changeBtn.addEventListener("click", checkBtnStatus);
table.addEventListener("click", deleteData);
table.addEventListener("click", editData);

function updateSelectAllCheckbox() {
    const checkboxes = document.querySelectorAll(".row-checkbox");
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    selectAllCheckbox.checked = allChecked;
}

document.querySelectorAll('.row-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', updateSelectAllCheckbox);
});


updateSelectAllCheckbox();
