/*
    Login imitation
*/

import router from "./router.js";

const loginForm = document.getElementById('loginForm');
const username = document.getElementById('name');
const password = document.getElementById('pass');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const main = document.getElementById('main');
const header = document.getElementById('header');

const credentials = {
    'admin': '123456',
    'test': 'test1234'
}

export function isLogedIn() {
    return document.cookie.includes("login=true");
}

function logIn(e) {
    e.preventDefault()
    if (credentials[username.value] && password.value === credentials[username.value]) {
        document.cookie = "login=true;max-age=3600";
        loginForm.style.display = "none";
        router();
    } else {
        console.log('Invalid credentials');
    }
}

function logOut(e) {
    e.preventDefault();
    document.cookie = "login=true;max-age=0";
    main.innerText = "";
    location.hash = "#/";
    location.reload();
}

export function showLoginForm() {
    loginForm.style.display = "block";
    header.style.display = "none";
    main.style.display = "none";
}

logoutBtn.addEventListener('click', logOut);
loginBtn.addEventListener('click', logIn);


function lengthValidation(minLength) {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('form__error');
    errorMessage.innerText = `This field must contain over ${minLength - 1} symbols`;
    return function (e) {
        if (e.target.value.length < minLength) {
            e.target.after(errorMessage);
        } else {
            errorMessage.remove();
        }
    }
}

const fields = {
    name: 4,
    pass: 6,
}

function setForm(fields, button) {
    button.disabled = true;
    const isValid = {};
    for (let field in fields) {
        isValid[field] = false;
        const currentLengthValidation = lengthValidation(fields[field]);
        const currentSetField = setField(fields[field], isValid, button, field);
        document.getElementById(field).addEventListener("keyup", (e) => {
            currentLengthValidation(e);
            currentSetField(e);
        })
    }
}

function setField(length, object, button, fieldName) {
    return function (e) {
        if (e.target.value.length >= length) {
            object[fieldName] = true;
        } else {
            object[fieldName] = false;
        }
        if (Object.values(object).every(e => e)) {
            button.disabled = false
        } else {
            button.disabled = true;
        }
    }
}

setForm(fields, loginBtn);