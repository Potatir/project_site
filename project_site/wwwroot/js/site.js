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


