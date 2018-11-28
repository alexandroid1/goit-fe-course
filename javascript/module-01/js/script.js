'use strict';

const adminLogin = 'admin';
const adminPassword = 'm4ng0h4ckz';

const login = prompt('Please enter login:');
console.log(login);

  if (login === null) {
    alert("Отменено пользователем!");
  } else if (login !== adminLogin) {
    alert("Доступ запрещен, неверный логин!");
  } else if (login === adminLogin) {

    const password = prompt('Please enter password:');
    console.log(password);

    if (password === null) {
        alert("Отменено пользователем!");
      } else if (password !== adminPassword) {
        alert("Доступ запрещен, неверный пароль!");
      } else if (password === adminPassword) {
        alert("Добро пожаловать!");
      }
  } 
  
  