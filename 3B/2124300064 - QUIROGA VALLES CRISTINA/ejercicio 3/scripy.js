document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const validUser = "admin";
    const validPass = "1234";

    if (username === validUser && password === validPass) {
      // Redirige a la página de bienvenida
      window.location.href = "bienvenido.html";
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  });
});