function adduser() {
    username = document.getElementById("user_name").value;
    localStorage.setItem("username", username);
    window.location = "kwitterroom.html";
}