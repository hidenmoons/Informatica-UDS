document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'isisdiv' && password === '2125') {
    showToast("✅ Usuario registrado");
  } else {
    alert("❌ Usuario incorrecto. Intentelo mas tarde.");
  }
});

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');

  // Espera 2 segundos, oculta el toast y redirige
  setTimeout(function() {
    toast.classList.remove('show');
    window.location.href = "carrusel.html"; // 👈 Aquí redirige
  }, 2000);
}

