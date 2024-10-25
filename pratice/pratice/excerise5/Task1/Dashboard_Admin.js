let id = document.getElementById("id");
let disc = document.getElementById("disc");
let changeBtn = document.getElementById("changebtn");

let editEvent = null;


function addData() {
    if (id.value == "" || disc.value == "") {
        alert("no Data");
        id.value = "";
        disc.value = "";
        return;
    }
    const existingCourses = document.querySelectorAll("#dataTable input[type='text'][value='" + id.value + "']");
    if (existingCourses.length > 0) {
        alert("Course with the same ID already exists.");
        return;
    }

    let table = document.getElementById('dataTable');
    let row = table.insertRow();
    let idCell = row.insertCell(0);
    let discCell = row.insertCell(1);
    let assignCell = row.insertCell(2);
    let deleteCell = row.insertCell(3);
     
    const inputIDName = document.createElement("input");
    const inputDName = document.createElement("input");
    const assignBtn = document.createElement("input");
    const deleteBtn = document.createElement("input");
  
  
    inputIDName.setAttribute("type","text");
    inputIDName.setAttribute("value",`${id.value}`);
    inputIDName.setAttribute("disabled","");
  
    inputDName.setAttribute("type","text");
    inputDName.setAttribute("value",`${disc.value}`);
    inputDName.setAttribute("disabled","");
  
    assignBtn.setAttribute("type","button");
    assignBtn.setAttribute("value","assign");
  
    deleteBtn.setAttribute("type","button");
    deleteBtn.setAttribute("value","Delete");
  
    idCell.append(inputIDName);
    discCell.append(inputDName);
    assignCell.append(assignBtn);
    deleteCell.append(deleteBtn);
  
  
  row.append(idCell,discCell,assignCell,deleteCell);  

}

function deleteData(event){
    if (event.target.value != "Delete") {
        return;
    }
    const trDelete = event.target.parentElement.parentElement;
    const userId = trDelete.children[0].firstElementChild.value;
    const assignedCourses = JSON.parse(localStorage.getItem('course')) || [];
    
    
    const updatedCourses = assignedCourses.filter(course => course.userid !== userId);
    localStorage.setItem('course', JSON.stringify(updatedCourses));

    trDelete.remove();
}  

function assignData(event){
    if(event.target.value != "assign"){
        return;
    }
    const trassign = event.target.parentElement.parentElement;

    const inputIDName = trassign.children[0].firstElementChild;
    const inputDISCName = trassign.children[1].firstElementChild;

       var userData = {userid : inputIDName.value ,userdisc : inputDISCName.value};

       var course = JSON.parse(localStorage.getItem('course')) || [];
        course.push(userData);

        localStorage.setItem('course', JSON.stringify(course));

}


document.addEventListener("DOMContentLoaded", loadAssignedCourses);


function loadAssignedCourses() {
            const assignedCourses = JSON.parse(localStorage.getItem('course')) || [];
            assignedCourses.forEach(course => {
                let table = document.getElementById('dataTable');
                let row = table.insertRow();
                let idCell = row.insertCell(0);
                let discCell = row.insertCell(1);
                let assignCell = row.insertCell(2);
                let deleteCell = row.insertCell(3);

                const inputIDName = document.createElement("input");
                const inputDName = document.createElement("input");
                const assignBtn = document.createElement("button");
                const deleteBtn = document.createElement("button");

                inputIDName.setAttribute("type","text");
                inputIDName.setAttribute("value", course.userid);
                inputIDName.setAttribute("disabled","");

                inputDName.setAttribute("type","text");
                inputDName.setAttribute("value", course.userdisc);
                inputDName.setAttribute("disabled","");

                assignBtn.textContent = "assign";
                assignBtn.addEventListener("click", assignData);

                deleteBtn.textContent = "Delete";
                deleteBtn.setAttribute("value", "Delete");
                deleteBtn.addEventListener("click",deleteData);


                idCell.append(inputIDName);
                discCell.append(inputDName);
                assignCell.append(assignBtn);
                deleteCell.append(deleteBtn);
            });
        }
table.addEventListener("click",deleteData);
table.addEventListener("click",assignData);