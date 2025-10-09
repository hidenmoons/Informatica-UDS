document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim().toLowerCase();
    const password = document.getElementById('password').value;
    const button = this.querySelector('button');

    if (!username || !password) {
        showToast("Por favor, complete todos los campos", "error");
        return;
    }

    button.disabled = true;
    button.textContent = "Verificando...";

    setTimeout(() => {
        if (username === 'nahomi' && password === '123456') {
            showToast("Usuario logueado", "success");
        } else {
            showToast("Datos incorrectos, favor de verificar", "error");
        }

        button.disabled = false;
        button.textContent = "Login";
    }, 800);
});

function showToast(message, type = "success") {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.backgroundColor = type === "error" ? "#e74c3c" : "#2ecc71";

    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
