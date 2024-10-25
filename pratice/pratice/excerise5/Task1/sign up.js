function store() {
    var name = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var role = document.getElementById('roleSelect').value;
     

    var lowercaseLetters = /[a-z]/g;
    var uppercaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (name.length === 0 || pass.length === 0 || role.length === 0) {
      alert('Please fill in all fields');
      return;
    }
    if (pass.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }
    if (!pass.match(lowercaseLetters)) {
      alert('Password  at least one lowercase letter.');
      return;
    }
    if (!pass.match(uppercaseLetters)) {
      alert('Password  at least one uppercase letter.');
      return;
    }
    if (!pass.match(numbers)) {
      alert('Password  at least one number and special character.');
      return;
    }

    var userData = { username: name, password: pass ,role:role };

   
    if (role === 'admin') {
      var adminData = JSON.parse(localStorage.getItem('admin')) || [];
      adminData.push(userData);
      localStorage.setItem('admin', JSON.stringify(adminData));
    } else if (role === 'student') {
      var studentData = JSON.parse(localStorage.getItem('student')) || [];
      studentData.push(userData);
      localStorage.setItem('student', JSON.stringify(studentData));
    }
    alert("Successfully created")

    name = '';
    pass = '';
  }