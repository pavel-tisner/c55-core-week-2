import { onLogin } from './login.js';


function showMessage(message, type) {
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modalMessage');
  const modalIcon = document.getElementById('modalIcon');

  modalMessage.textContent = message;

  // Remove any existing type classes and add the new one
  modalIcon.classList.remove('success', 'error');

  if (type === 'success') {
    modalIcon.classList.add('success');
  } else if (type === 'error') {
    modalIcon.classList.add('error');
  }

  modal.classList.remove('hidden');
}

function errorMessage(message) {
  showMessage(message, 'error');
}

function successMessage(message) {
  showMessage(message, 'success');
}

function hideModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
}

function handleLoginClick() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const loginButton = document.getElementById('loginButton');

  loginButton.disabled = true;
  loginButton.innerHTML = '<span class="spinner"></span>Loading...';

  // Random delay between 250ms and 1000ms
  const randomDelay = Math.floor(Math.random() * 750) + 250;

  setTimeout(() => {
    onLogin(username, password);

    loginButton.disabled = false;
    loginButton.innerHTML = 'Login';
  }, randomDelay);
}

function setupEventListeners() {
  const loginButton = document.getElementById('loginButton');
  loginButton.addEventListener('click', handleLoginClick);

  const modalOkButton = document.getElementById('modalOkButton');
  modalOkButton.addEventListener('click', hideModal);

  // Allow Enter key to trigger login
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  usernameInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      handleLoginClick();
    }
  });

  passwordInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      handleLoginClick();
    }
  });
}

setupEventListeners();

export { errorMessage, successMessage };
