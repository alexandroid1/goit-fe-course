"use strict";

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login.length >=4 && login.length <=16 ) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function(allLogins, login) {
  if ( allLogins.includes(login) ) {
    return false;
  } else {
    return true;
  }
};

const addLogin = function(allLogins, login) {
  let isMyLoginValid = isLoginValid(login);
  if (! isMyLoginValid) {
    alert('Ошибка! Логин должен быть от 4 до 16 символов');
  } else {
    let isMyLoginUnique = isLoginUnique(allLogins, login);
    if (isMyLoginUnique){
      allLogins.push(login);
      alert('Логин успешно добавлен!');
    } else {
      alert('Такой логин уже используется!');
    }

  }
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'


