// login.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const pwError = document.getElementById("pwError");
    const formMessage = document.getElementById("formMessage");
    const togglePw = document.getElementById("togglePw");
  
    // Mostrar / ocultar contraseña
    togglePw.addEventListener("click", () => {
      const isPwd = password.type === "password";
      password.type = isPwd ? "text" : "password";
      togglePw.textContent = isPwd ? "Ocultar" : "Mostrar";
    });
  
    // Función para validar correo
    function validateEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
  
    // Validación del formulario
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Reset mensajes
      emailError.style.display = "none";
      pwError.style.display = "none";
      formMessage.textContent = "";
      formMessage.className = "";
  
      let valid = true;
  
      // Validar email
      if (!email.value.trim()) {
        emailError.textContent = "El correo es obligatorio.";
        emailError.style.display = "block";
        valid = false;
      } else if (!validateEmail(email.value)) {
        emailError.textContent = "Introduce un correo válido.";
        emailError.style.display = "block";
        valid = false;
      }
  
      // Validar password
      if (!password.value) {
        pwError.textContent = "La contraseña es obligatoria.";
        pwError.style.display = "block";
        valid = false;
      } else if (password.value.length < 6) {
        pwError.textContent = "La contraseña debe tener al menos 6 caracteres.";
        pwError.style.display = "block";
        valid = false;
      }
  
      if (!valid) return;
  
      // Simulación de petición al servidor
      formMessage.textContent = "Iniciando sesión...";
      setTimeout(() => {
        if (email.value.toLowerCase().includes("demo") && password.value === "123456") {
          formMessage.textContent = "Inicio de sesión exitoso. Redirigiendo...";
          formMessage.className = "success";
      
          // Redirigir después de 1 segundo
          setTimeout(() => {
            window.location.href = "dashboard.html"; 
          }, 1000);
      
        } else {
          formMessage.textContent = "Correo o contraseña incorrectos.";
          formMessage.className = "error";
        }
      }, 700);
      
    });
  });
  