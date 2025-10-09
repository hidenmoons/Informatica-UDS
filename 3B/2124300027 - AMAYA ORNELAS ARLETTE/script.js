// Referencias a los elementos del formulario
const form = document.getElementById('loginForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const toggle = document.getElementById('togglePw');
const errorEl = document.getElementById('error');
const submitBtn = document.getElementById('submitBtn');

// Mostrar / ocultar contraseña
toggle.addEventListener('click', () => {
  const isPwd = password.getAttribute('type') === 'password';
  password.setAttribute('type', isPwd ? 'text' : 'password');
  toggle.textContent = isPwd ? 'Ocultar' : 'Mostrar';
  toggle.setAttribute('aria-pressed', isPwd);
});

// Validación y simulación de login
form.addEventListener('submit', (e) => {
  e.preventDefault();
  errorEl.style.display = 'none';
  errorEl.textContent = '';

  // Validaciones básicas
  if (username.value.trim().length < 3) {
    showError('El usuario debe tener al menos 3 caracteres.');
    username.focus();
    return;
  }
  if (password.value.length < 6) {
    showError('La contraseña debe tener al menos 6 caracteres.');
    password.focus();
    return;
  }

  // Simular inicio de sesión
  submitBtn.disabled = true;
  submitBtn.textContent = 'Validando...';

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Entrar';

    // Ejemplo: usuario demo y contraseña password123
    if (username.value === 'demo' && password.value === 'password123') {
      alert('Inicio de sesión correcto. (Simulado)');
      form.reset();
    } else {
      showError('Usuario o contraseña incorrectos.');
    }
  }, 1000);
});

// Función auxiliar para mostrar errores
function showError(msg) {
  errorEl.textContent = msg;
  errorEl.style.display = 'block';
}
