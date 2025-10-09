function login() {
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    if (usuario === "admin" && contraseña === "1234") {
        mostrarToast("✅ Usuario logueado", true);
    } else {
        mostrarToast("❌ Usuario o contraseña incorrectos", false);
    }
}

function mostrarToast(mensaje, exito) {
    const toast = document.getElementById("toast");
    toast.textContent = mensaje;
    toast.style.backgroundColor = exito ? "#4CAF50" : "#e74c3c";
    toast.className = "show";

    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}
