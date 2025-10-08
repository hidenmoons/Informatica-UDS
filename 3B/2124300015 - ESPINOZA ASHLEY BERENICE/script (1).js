function iniciarSesion() {
  const usuario = document.getElementById('user').value;
  const clave = document.getElementById('pass').value;
  const mensaje = document.getElementById('mensaje');

  // Nuevas credenciales válidas
  const usuarioCorrecto = "usuario1";
  const claveCorrecta = "abcd";

  if (usuario === usuarioCorrecto && clave === claveCorrecta) {
    mostrarMensaje("✅ Bienvenido al sistema, acceso concedido");
  } else {
    mostrarMensaje("❌ Datos incorrectos, intenta nuevamente");
  }
}

function mostrarMensaje(texto) {
  const mensaje = document.getElementById('mensaje');
  mensaje.textContent = texto;
  mensaje.className = "mensaje show";

  // Desaparece después de 3 segundos
  setTimeout(() => {
    mensaje.className = "mensaje";
  }, 3000);
}
