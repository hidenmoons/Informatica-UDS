document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    showToast("Usuario logueado", true);
    setTimeout(() => {
      window.location.href = "med.org.uds.html"; 
    }, 2000);
  } else {
    showToast("Error: Usuario o contraseña incorrectos", false);
  }
});

// Acceso rápido
document.getElementById("quickAccess").addEventListener("click", function() {
  document.getElementById("username").value = "admin";
  document.getElementById("password").value = "1234";
  showToast("Acceso rápido activado", true);
  setTimeout(() => {
    window.location.href = "med.org.uds.html"; 
  }, 1000);
});

function showToast(message, success) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.background = success ? "#4CAF50" : "#E74C3C";
  toast.className = "show";

  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
