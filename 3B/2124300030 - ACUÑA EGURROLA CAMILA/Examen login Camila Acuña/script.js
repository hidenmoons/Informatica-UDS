document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (user === "admin" && pass === "1234") {
    showToast("✅ Bienvenido, acceso concedido", true);
    setTimeout(() => {
      window.location.href = "med.org.uds.html";
    }, 2000);
  } else {
    showToast("❌ Usuario o contraseña incorrectos", false);
  }
});

document.getElementById("quickAccess").addEventListener("click", () => {
  document.getElementById("username").value = "admin";
  document.getElementById("password").value = "1234";
  showToast("⚡ Acceso rápido activado", true);
  setTimeout(() => {
    window.location.href = "med.org.uds.html";
  }, 1000);
});

function showToast(msg, success) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.style.background = success ? "#1abc9c" : "#e74c3c";
  toast.className = "show";

  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
