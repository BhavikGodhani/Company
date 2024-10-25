const fName = document.getElementById("fname");
const addbtn = document.getElementById("btn");
const delbtn = document.getElementById("detete");
const allCheckbox = document.getElementById("chkbx");
const deleteAll = document.getElementById("del");
const updateAll = document.getElementById("upd");
const table = document.getElementById("table");
const addtask = document.getElementById("btn");


async function api() {
    try {
        // let response = await fetch('https://dummyjson.com/todos')  // pending  response
        // let data = await response.json()   // reslove  ya to pending
        // return data.todos;
        return [];
    }
    catch (err) {
        alert(err);
    }
}
function adddata(val) {
    let row = table.insertRow();
    row.append(addCheckboxCell(row), addInputbboxcell(row, val), DeleteBtnCell(row), UpdateBtnCell(row));
    checkboxcheckAllchecked();
}

function addCheckboxCell(row) {
    let cell = row.insertCell(0);
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("checkbox");
    cell.appendChild(checkbox);
    return cell;
}

function addInputbboxcell(row, val) {
    let cell = row.insertCell(1);
    let iptName = document.createElement("input");
    iptName.setAttribute("type", "text");
    iptName.setAttribute("value", val);
    iptName.setAttribute("disabled", "");
    iptName.setAttribute("id", "inputname");
    cell.appendChild(iptName);
    return cell;
}

function DeleteBtnCell(row) {
    let cell = row.insertCell(2);
    let delet = document.createElement("input");
    delet.setAttribute("type", "button");
    delet.setAttribute("value", "Delete");
    delet.setAttribute("id", "delete");
    cell.appendChild(delet);
    return cell;
}

function UpdateBtnCell(row) {
    let cell = row.insertCell(3);
    let update = document.createElement("input");
    update.setAttribute("type", "button");
    update.setAttribute("value", "Update");
    update.setAttribute("id", "update");
    cell.appendChild(update);
    return cell;
}

async function savelocalstorageApi() {
    const savedData = localStorage.getItem("Data");
    if (!savedData) {
        const apiData = await api();
        for (let abc of apiData) {
            adddata(abc.todo)
        }
        localStorage.setItem("Data", JSON.stringify(apiData));
        alert("Data saved to local storage.");
    }
    checkboxcheckAllchecked()
}

function addInputData() {
    if (fName.value.trim() == "" || fName.value.trim() == null) {
        alert("Please add your data");
        return;
    }
    else {
        let data = JSON.parse(localStorage.getItem("Data")) || [];

        if (!Array.isArray(data)) {
            data = [];
        }

        let repeat = data.some(task => task.todo === fName.value);

        if (repeat) {
            alert("Task already exists.");
            fName.value = "";
            return;
        }

        adddata(fName.value)

        let obj = {};
        obj.todo = fName.value;
        data.push(obj);
        localStorage.setItem("Data", JSON.stringify(data));
        fName.value = "";

        checkboxcheckAllchecked()
    }
}

function deleteRowData(e) {
    const trDelete = e.target.parentElement.parentElement;
    // console.log(trDelete);
    trDelete.remove();
    let data = JSON.parse(localStorage.getItem("Data"));
    let index = data.findIndex(i => i.todo === trDelete.querySelector('#inputname').value)
    if (index !== -1) {
        data.splice(index, 1);
        localStorage.setItem("Data", JSON.stringify(data));
        updateSelectedCount()
    }
    if (data.length === 0) {
        localStorage.removeItem("Data");
        allCheckbox.checked = false;
    }
}

function popupbox(val) {
    const div = document.createElement("div");
    div.setAttribute("id", "popup")
    // console.log(div);
    div.append(inputText(), inputUpdateData(val), cancelBtn(), updateBtn());
    document.body.appendChild(div);
}

function inputText() {
    const p = document.createElement("p");
    p.innerText = "Enter Update Value";
    return p;
}

function inputUpdateData(val) {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "inputData");
    input.setAttribute("value", `${val}`);
    return input;
}

function cancelBtn() {
    const cancelbtn = document.createElement("input");
    cancelbtn.setAttribute("type", "button");
    cancelbtn.setAttribute("value", "Cancel");
    cancelbtn.setAttribute("id", "cancelbtn");
    return cancelbtn;
}

function updateBtn() {
    const Updatebtn = document.createElement("input");
    Updatebtn.setAttribute("type", "button");
    Updatebtn.setAttribute("value", "Update");
    Updatebtn.setAttribute("id", "updatebtn");
    return Updatebtn;
}

function enableDisableRowElements(disable) {
    const deleteButtons = document.querySelectorAll("#delete");
    const checkboxes = document.querySelectorAll(".checkbox");

    addtask.disabled = disable;

    deleteButtons.forEach(button => {
        button.disabled = disable;
    });
    checkboxes.forEach(checkbox => {
        checkbox.disabled = disable;
    });
    deleteAll.disabled = disable;
    updateAll.disabled = disable;
    allCheckbox.disabled = disable;
}

function updateRowData(e) {
    e.preventDefault();
     
    const trUpdate = e.target.closest('tr').querySelector("#inputname");
    const index = e.target.closest('tr').rowIndex;

    const updateButtons = document.querySelectorAll("input[type='button'][id='update']");
    updateButtons.forEach(button => {
        button.disabled = true;
    });

    enableDisableRowElements(true);

    popupbox(trUpdate.value);

    document.getElementById("cancelbtn").addEventListener("click", function () {
        document.getElementById('popup').remove();
        enableDisableRowElements(false);
        updateButtons.forEach(button => {
            button.disabled = false;
        });
    });

    document.getElementById("updatebtn").addEventListener("click",function () {
        let inputData = document.getElementById("inputData").value;

        if (inputData.trim() == "" || inputData.trim() == null) {
            alert("Please enter valid input");
            document.getElementById('popup').remove();
            enableDisableRowElements(false);
            updateButtons.forEach(button => {
                button.disabled = false;
            });
        } 
        else {
            trUpdate.value = inputData
            let data = JSON.parse(localStorage.getItem("Data")) || [];
                   
            let repeat = data.some(task => task.todo === inputData);
            if (repeat) {
                alert("Task already exists.");
                return;
            }
            if (index !== -1) {
                data[index].todo = inputData;
                localStorage.setItem("Data", JSON.stringify(data));
                document.getElementById('popup').remove();
                enableDisableRowElements(false);
                updateButtons.forEach(button => {
                    button.disabled = false;
                });
            }
        }
    })
}

function enableDisableRowAllElements(disable) {
    const disupdaterow = document.querySelectorAll("#update");
    const disdeleterow = document.querySelectorAll("#delete");

    addtask.disabled = disable;
    deleteAll.disabled = disable;
    disupdaterow.forEach(e => {
        e.disabled = disable;
    })
    disdeleterow.forEach(e => {
        e.disabled = disable;
    })
}

function updateAllData() {
    const checkboxes = document.querySelectorAll(".checkbox:checked");

    if (checkboxes.length === 0) {
        alert("please select one item ");
        return;
    }
    enableDisableRowAllElements(true)
    popupbox("")

    document.querySelector("#cancelbtn").addEventListener("click",function () {
        document.getElementById('popup').remove();
        enableDisableRowAllElements(false)
        checkboxes.forEach(e => {
            e.checked = false;
        })
        allCheckbox.checked = false;
    })

    document.querySelector("#updatebtn").addEventListener("click", function () {
        const newData = document.querySelector("#inputData").value;
        if (newData.trim() == "" || newData.trim() == null) {
            alert("plz enter valid data")
        }
        else {
            checkboxes.forEach((checkbox, idx) => {
                const inputData = checkbox.parentElement.nextElementSibling.querySelector("#inputname");
                inputData.value = newData + (idx + 1);
                let localData = JSON.parse(localStorage.getItem("Data")) || [];
                localData[idx].todo = inputData.value;
                localStorage.setItem("Data", JSON.stringify(localData));
            });
            document.getElementById('popup').remove();
            enableDisableRowAllElements(false)
            checkboxes.forEach(e => {
                e.checked = false;
            })
            allCheckbox.checked = false;
        }
    })
}

function deleteAllData() {
    const checkboxs = document.querySelectorAll(".checkbox:checked");

    checkboxs.forEach(e => {
        const row = e.parentElement.parentElement;
        const dataIndex = parseInt(row.dataset.index);
        let data = JSON.parse(localStorage.getItem("Data"));
        data.splice(dataIndex, 1);
        if (data.length === 0) {
            localStorage.removeItem("Data");
        } 
        else {
            localStorage.setItem("Data", JSON.stringify(data));
        }
        row.remove();
    });
    allCheckbox.checked = false;
}

function updateSelectedCount() {
    const checkboxes = document.querySelectorAll(".checkbox:checked");
    const totalCheckboxes = document.querySelectorAll(".checkbox");
    allCheckbox.checked = checkboxes.length === totalCheckboxes.length;
}

function selectAllCheck() {
    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach(checkbox => {
        checkbox.checked = allCheckbox.checked;
    });
    updateSelectedCount()
}


function loadLocalStorageEmptyOrAPI() {
    const data = JSON.parse(localStorage.getItem("Data"));

    if (!data || data.length === 0) {
        savelocalstorageApi()
    } else {
        alert("all saved data")
        data.forEach(item => {
            adddata(item.todo);
        });
    }
}

function rowAction(e){
    if(e.target.id == "delete"){
        deleteRowData(e) 
    }
    else if(e.target.id == "update"){
        updateRowData(e);
    }
}

loadLocalStorageEmptyOrAPI() 
table.addEventListener("click",rowAction);
addtask.addEventListener("click", addInputData)
allCheckbox.addEventListener("click", selectAllCheck);
deleteAll.addEventListener("click", deleteAllData);
updateAll.addEventListener("click", updateAllData)

function checkboxcheckAllchecked() {
    document.querySelectorAll(".checkbox").forEach(checkbox => {
        checkbox.addEventListener("click", updateSelectedCount);
    });
    updateSelectedCount()
}
checkboxcheckAllchecked()