const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    hamburger.classList.toggle("toggle");
});
var currencyBtn = document.getElementById("changeCurrencyBtn");
var languageBtn = document.getElementById("changeLanguageBtn");
var currencyPopup = document.getElementById("currencyPopup");
var languagePopup = document.getElementById("languagePopup");

var currencyCloseBtn = document.getElementById("currencyCloseBtn");
var languageCloseBtn = document.getElementById("languageCloseBtn");

currencyBtn.onclick = function () {
    if (languagePopup.style.display === "block") {
        languagePopup.style.display = "none";
    }
    currencyPopup.style.display = "block";
}

languageBtn.onclick = function () {
    if (currencyPopup.style.display === "block") {
        currencyPopup.style.display = "none";
    }
    languagePopup.style.display = "block";
}

currencyCloseBtn.onclick = function () {
    currencyPopup.style.display = "none";
}

languageCloseBtn.onclick = function () {
    languagePopup.style.display = "none";
}

MenuCloseBtn.onclick = function () {
    menuPopup.style.display = "none";
}

const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Получаем элементы
    const showCalendarBtn = document.getElementById("show-calendar");
    const calendarContainer = document.getElementById("calendar-container");

    // Функция для переключения видимости календаря
    function toggleCalendar() {
        calendarContainer.classList.toggle("hidden");
    }

    // Назначаем обработчик события на кнопку
    showCalendarBtn.addEventListener("click", toggleCalendar);
});
