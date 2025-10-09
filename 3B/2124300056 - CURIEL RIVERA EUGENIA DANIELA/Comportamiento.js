function login() {
  const usuario = document.getElementById('usuario').value;
  const password = document.getElementById('password').value;
  const error = document.getElementById('error');

  const userCorrecto = 'Eugenia';
  const passCorrecto = '2025';

  if (usuario === userCorrecto && password === passCorrecto) {
    error.textContent = '';
    mostrarToast();
  } else {
    error.textContent = 'Usuario o contraseña incorrectos';
  }
}

function mostrarToast() {
  const toast = document.getElementById('toast');
  toast.className = 'toast show';
  setTimeout(() => {
    toast.className = toast.className.replace('show', '');
  }, 3000);
}