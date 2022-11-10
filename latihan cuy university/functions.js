const fs = require("fs");


let containerLogin = document.getElementById('container-login');
      let username = document.getElementById('username');
      let password = document.getElementById('password');
      let login = document.getElementById('login');
      let logout = document.getElementById('logout');

      function clickLogin() {
        if (username.value == 'admin' && password.value == 'admin') {
          localStorage.setItem("username", username.value)
          localStorage.setItem("password", password.value)
          location.href = 'home.html';
        } else {
          alert("username Or Password Went Wrong")
          location.reload();
        }
      }
      function clickLogout() {
        location.href = "login.html";
        localStorage.clear();
      }