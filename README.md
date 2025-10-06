# Informatica-UDS

# Instrucciones para la entrega de prácticas y examen

## 1. Subida de archivos de prácticas

Cada estudiante debe crear una carpeta con su nombre y código en el repositorio. Dentro de esa carpeta, deben subir **los archivos correspondientes a sus prácticas** de manera organizada. Las prácticas deben ser los archivos de código en el lenguaje que corresponda, y deben ser fáciles de identificar por el nombre.

**Ejemplo de estructura de carpetas:**

/2124300001 - ACOSTA GUEVARA HECTOR GENARO
- practica1.html
- practica2.js
- practica3.css


/2124300014 - ESTRADA CORRAL BEDOY KATHERINE ISABELLA
- practica1.html
- practica1.js
- practica1.cs


Asegúrate de que todos los archivos estén dentro de tu carpeta correspondiente y sean fáciles de identificar.

---

## 2. Examen de Login

El examen consiste en realizar una página web con una interfaz de **login simple**. Para este ejercicio, debes crear 3 archivos básicos:

- **HTML**: Para la estructura de la página de login.
- **CSS**: Para darle estilo a la página.
- **JavaScript**: Para gestionar el comportamiento del formulario y mostrar un mensaje (toast) cuando el usuario inicie sesión correctamente.

### Pasos a seguir:

1. Crea una página en **HTML** con los siguientes elementos:
   - Un **campo de usuario**.
   - Un **campo de contraseña**.
   - Un botón de **login**.

2. Usa **CSS** para darle estilo básico (puede ser muy simple).

3. En **JavaScript**, debes agregar el siguiente comportamiento:
   - Verifica si el nombre de usuario y la contraseña coinciden con los datos que hayas decidido (por ejemplo, usuario: `admin`, contraseña: `1234`).
   - Si los datos son correctos, muestra un **toast** con el mensaje "Usuario logueado".
   - Si los datos no son correctos, muestra un mensaje de error.

Puedes probar todo esto en el sitio web [OneCompiler](https://onecompiler.com/html), que te permite escribir, compilar y ejecutar código HTML, CSS y JavaScript de forma fácil.

### Estructura del código:

#### `index.html` (Ejemplo básico):

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="login-container">
        <h2>Iniciar sesión</h2>
        <form id="loginForm">
            <label for="username">Usuario:</label>
            <input type="text" id="username" required>

            <label for="password">Contraseña:</label>
            <input type="password" id="password" required>

            <button type="submit">Login</button>
        </form>
        <div id="toast" class="toast">Usuario logueado</div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
#### `Style.CSS` (Ejemplo básico):

```CSS
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.login-container {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
}

input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

.toast {
    visibility: hidden;
    min-width: 250px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.5s;
}

.toast.show {
    visibility: visible;
    opacity: 1;
}
```

#### `script.js` (Ejemplo básico):

```JS

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        showToast("Usuario logueado");
    } else {
        alert("Credenciales incorrectas");
    }
});

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(function() {
        toast.classList.remove('show');
    }, 3000);
}
```
