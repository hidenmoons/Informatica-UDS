function verificarLogin() {
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;
  const mensaje = document.getElementById("mensaje");

  if (usuario === "admin" && contrasena === "1234") {
    mensaje.textContent = "Usuario logueado";
    mensaje.style.backgroundColor = "#28a745"; // verde
  } else {
    mensaje.textContent = "Usuario o contraseña incorrectos";
    mensaje.style.backgroundColor = "#dc3545"; // rojo
  }

  mensaje.style.display = "block";

  setTimeout(() => {
    mensaje.style.display = "none";
  }, 3000); // desaparece en 3 segundos
}
