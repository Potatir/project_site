// ����� ������ � �����
var playVideoBtn = document.getElementById("playVideoBtn");
var myVideo = document.getElementById("myVideo");

// ������ ����� ��� �������� ��������
myVideo.style.display = "none";

// �������� ����� ��� ������� �� ������
playVideoBtn.onclick = function () {
    myVideo.style.display = "block";
    myVideo.play(); // ������ ��������������� �����
}

