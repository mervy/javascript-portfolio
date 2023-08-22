const loggedBox = document.querySelector('.logged-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link')

registerLink.addEventListener('click', () => {
    loggedBox.classList.add('active');
})

loginLink.addEventListener('click', () => {
    loggedBox.classList.remove('active');
})