function check(){
    var role = document.getElementById('roleSelect').value;
    var userName = document.getElementById('email').value;
   var userPass = document.getElementById('pass').value;


    var storeData;

   if(role === "admin"){
     storeData = JSON.parse(localStorage.getItem('admin')) || [];
   }
    else if(role === "student") {
     storeData = JSON.parse(localStorage.getItem('student')) || [];
    }
    


    var user = storeData.find(function (item) {
   return item.username === userName && item.password === userPass
 });


  //  if(user){
  //    alert('you are logged in')
  //    if (role === "admin") {
  //         //  window.location.href = "http://127.0.0.1:5500/pratice/excerise5/Task1/Dashboard_Admin.html";
  //      } else if (role === "student") {
  //          window.location.href = "http://127.0.0.1:5500/pratice/excerise5/Task1/Dashboad_Student.html";

  //  }
  // }
 }
  

