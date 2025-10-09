function mostrarToast(mensaje, tipo) {
  const toast = document.getElementById('toast');
  toast.className = `toast ${tipo} show`;
  toast.textContent = mensaje;
  setTimeout(() => {
    toast.className = toast.className.replace('show', '');
  }, 3000);
}

function login() {
  const usuario = document.getElementById('usuario').value;
  const contrasena = document.getElementById('contrasena').value;

  const usuarioCorrecto = 'admin';
  const contrasenaCorrecta = '1234';

  if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
    mostrarToast('Usuario logueado', 'success');
  } else {
    mostrarToast('Usuario o contraseña incorrectos', 'error');
  }
}
