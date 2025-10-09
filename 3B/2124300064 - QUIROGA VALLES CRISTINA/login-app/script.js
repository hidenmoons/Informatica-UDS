function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('error-message');
  const toast = document.getElementById('toast');

  // Oculta el toast por si estaba visible antes
  toast.classList.remove('show');

  if (username === 'admin' && password === '1234') {
    errorMessage.textContent = '';
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  } else {
    errorMessage.textContent = 'Usuario o contraseña incorrectos';
  }
}