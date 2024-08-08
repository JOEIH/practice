const toggleBtn = document.querySelector('.toggleBtn');
const menu = document.querySelector('.menu');
const icon = document.querySelector('.icon');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
})