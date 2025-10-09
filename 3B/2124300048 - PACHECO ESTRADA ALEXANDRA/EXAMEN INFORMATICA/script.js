function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const toast = document.getElementById('toast');

  // Credenciales válidas
  const validUser = 'admin';
  const validPass = '1234';

  if (username === validUser && password === validPass) {
    showToast('Usuario logueado', true);
  } else {
    showToast('Usuario o contraseña incorrectos', false);
  }
}

function showToast(message, success) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = success ? 'success' : 'error';
  toast.style.display = 'block';

  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
}
