// Найти кнопку и видео
var playVideoBtn = document.getElementById("playVideoBtn");
var myVideo = document.getElementById("myVideo");

// Скрыть видео при загрузке страницы
myVideo.style.display = "none";

// Показать видео при нажатии на кнопку
playVideoBtn.onclick = function () {
    myVideo.style.display = "block";
    myVideo.play(); // Начать воспроизведение видео
}

