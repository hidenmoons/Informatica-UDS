document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const pwdError = document.getElementById("pwdError");
  const formMsg = document.getElementById("formMsg");
  const demoBtn = document.getElementById("demoBtn");

  const loginSection = document.getElementById("loginSection");
  const dashboardSection = document.getElementById("dashboardSection");
  const logoutBtn = document.getElementById("logoutBtn");

  function validate() {
    let ok = true;
    emailError.style.display = "none";
    pwdError.style.display = "none";

    if (!email.value) {
      emailError.textContent = "El correo es obligatorio.";
      emailError.style.display = "block";
      ok = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      emailError.textContent = "Introduce un correo válido.";
      emailError.style.display = "block";
      ok = false;
    }

    if (!password.value) {
      pwdError.textContent = "La contraseña es obligatoria.";
      pwdError.style.display = "block";
      ok = false;
    } else if (password.value.length < 6) {
      pwdError.textContent = "Debe tener al menos 6 caracteres.";
      pwdError.style.display = "block";
      ok = false;
    }

    return ok;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formMsg.textContent = "";
    if (!validate()) return;

    formMsg.textContent = "Iniciando sesión…";
    formMsg.style.color = "";

    setTimeout(() => {
      if (email.value.toLowerCase() === "demo@correo.com" && password.value === "demo123") {
        loginSection.style.display = "none";
        dashboardSection.style.display = "block";
      } else {
        formMsg.textContent = "Usuario o contraseña incorrectos.";
        formMsg.style.color = "#dc2626";
      }
    }, 700);
  });

  demoBtn.addEventListener("click", () => {
    email.value = "demo@correo.com";
    password.value = "demo123";
    email.focus();
  });

  logoutBtn.addEventListener("click", () => {
    dashboardSection.style.display = "none";
    loginSection.style.display = "flex";
    form.reset();
    formMsg.textContent = "";
  });

  email.addEventListener("blur", validate);
  password.addEventListener("blur", validate);
});
