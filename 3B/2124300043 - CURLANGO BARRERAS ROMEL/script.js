function login() {
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    const errorDiv = document.getElementById('error');

    const validUser = 'admin';
    const validPass = '1234';

    // Limpiamos cualquier mensaje previo
    errorDiv.textContent = '';

    if(user === validUser && pass === validPass) {
        showToast("Usuario logueado");

        // Redirigir al dashboard después de mostrar el toast
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 3000);
    } else {
        // Mostrar error solo si no coinciden los datos
        errorDiv.textContent = 'Usuario o contraseña incorrectos';
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = "toast show";

    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}
