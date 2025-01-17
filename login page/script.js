const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const facebookIcons = document.querySelectorAll('.fa-facebook-f');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

facebookIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        facebookLogin();
    });
});