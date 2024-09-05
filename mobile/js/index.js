//.topMenu
const toggleBtn = document.querySelector('.toggleBtn');
const topMenu = document.querySelector('.topMenu');

toggleBtn.addEventListener('click', () => {
    topMenu.classList.toggle('active');
})

//.clock
const clock = document.querySelector('.clock');
const dayText = document.querySelector('.day')
const timeText = document.querySelector('.time')

function digitalClock() {
    const currentDate = new Date(); 
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    timeText.textContent = `${hours}:${minutes}`
}
function calendar() {
    const currentDate = new Date(); 

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();

    dayText.textContent = `${year}/${month}/${day}`
}

calendar();
digitalClock();
setInterval(digitalClock, 1000);

//.calendar
