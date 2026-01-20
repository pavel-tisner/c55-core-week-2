import { errorMessage, successMessage } from "./app.js";

let incorrectAttempts = 0;
const loginButton = document.getElementById("loginButton");

function onLogin(username, password) {
  if (
    ((username === "admin" && password === "Hack1234") ||
      (username === "user" && password === "7654321")) &&
    incorrectAttempts < 3) {
    successMessage("Logged in successfully");
    incorrectAttempts = 0;
  } else {
    errorMessage("Incorrect credentials");
    incorrectAttempts += 1;
    if (incorrectAttempts > 3) {
      loginButton.disabled = true;
      errorMessage("Login blocked: Too many incorrect attempts");
    }
  }
}

export { onLogin };
