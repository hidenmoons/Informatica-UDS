// Datos válidos
const validUser = "admin";
const validPass = "1234";

// Capturar formulario
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === validUser && password === validPass) {
    showToast("Usuario logueado", true);
    // Espera 2 segundos y redirige
    setTimeout(() => {
      window.location.href = "bienvenido.html";
    }, 2000);
  } else {
    showToast("Usuario o contraseña incorrectos", false);
  }
});

// Función para mostrar el toast
function showToast(message, success) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.backgroundColor = success ? "#28a745" : "#dc3545";
  toast.className = "toast show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
