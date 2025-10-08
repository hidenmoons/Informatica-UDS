document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const usuarioInput = document.getElementById("usuario");
  const contrasenaInput = document.getElementById("contrasena");
  const toast = document.getElementById("toast");

  loginBtn.addEventListener("click", () => {
    const usuario = usuarioInput.value.trim();
    const contrasena = contrasenaInput.value.trim();

    const usuarioCorrecto = "admin";
    const contrasenaCorrecta = "1234";

    if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
      mostrarToast("Usuario logueado 🌼", "success");
    } else {
      mostrarToast("Usuario o contraseña incorrectos 💔", "error");
    }
  });

  function mostrarToast(mensaje, tipo) {
    toast.textContent = mensaje;
    toast.className = `show ${tipo}`;

    setTimeout(() => {
      toast.className = toast.className.replace("show", "");
    }, 3000);
  }
});

