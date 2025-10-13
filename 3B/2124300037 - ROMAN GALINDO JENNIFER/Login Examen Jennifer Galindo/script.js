document.getElementById("loginBtn").addEventListener("click", function() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const toast = document.getElementById("toast");

  const validUser = "admin";
  const validPass = "1234";

  if (username === validUser && password === validPass) {
    showToast("✅ Usuario logueado con éxito", "success");
  } else {
    showToast("❌ Usuario o contraseña incorrectos", "error");
  }
});

function showToast(message, type) {
  const toast = document.getElementById("toast");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}
