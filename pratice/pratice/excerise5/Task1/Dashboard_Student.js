
  

  let storedata = JSON.parse(localStorage.getItem('course'));
     
  storedata.forEach(function (courseData) {
     let row = dataTable.insertRow();   
     let idcell = row.insertCell(0);
     let discCell = row.insertCell(1);
     
 const inputIdName = document.createElement("input");
 const inputDisc = document.createElement("input");

 inputIdName.setAttribute("type","text");
 inputIdName.setAttribute("value",`${courseData.userid}`);
 inputIdName.setAttribute("disabled","");

 inputDisc.setAttribute("type","text");
 inputDisc.setAttribute("value",`${courseData.userdisc}`);
 inputDisc.setAttribute("disabled","");


  idcell.append(inputIdName);    
  discCell.append(inputDisc);

  row.append(idcell,discCell);

 });