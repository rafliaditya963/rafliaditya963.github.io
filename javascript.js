
function Masuk() {
    var user = document.getElementById("username").value;
    var password = document.getElementById("sandi").value;
    if (user == "RADIT963" && password == "SELAYAR12345") {
        window.open("home.html");
    }
    else {
        alert("Maaf, username atau password yang Anda masukkan salah.");
    }
}