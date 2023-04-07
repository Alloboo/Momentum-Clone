const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todo = document.querySelector('#todo-form');
const quote = document.querySelector('#quote');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
    e.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    printGreeting(username);
}

function printGreeting(username) {
    greeting.innerText = `You got this, ${username} :)`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.className = "fade";
    todo.classList.remove(HIDDEN_CLASSNAME);
    todo.className = "fade";
    loginForm.classList.add(HIDDEN_CLASSNAME);
    quote.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    printGreeting(savedUsername);
}