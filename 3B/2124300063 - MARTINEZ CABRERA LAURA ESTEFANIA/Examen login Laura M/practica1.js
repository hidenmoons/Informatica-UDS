function verificarLogin() {
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;
    const error = document.getElementById("error");
    const toast = document.getElementById("toast");

    // Datos correctos
    const usuarioCorrecto = "admin";
    const contrasenaCorrecta = "1234";

    if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
        error.textContent = "";
        toast.className = "show";

        // Ocultar toast después de 3 segundos
        setTimeout(() => {
            toast.className = toast.className.replace("show", "");
        }, 3000);
    } else {
        error.textContent = "Usuario o contraseña incorrectos.";
    }
}

