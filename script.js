document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");
    const togglePassword = document.querySelector(".toggle-password");
    const passwordInput = document.getElementById("password");
    const loginSound = document.getElementById("loginSound");
    const toggleTheme = document.getElementById("toggleTheme");
  
    const fakeUsername = "admin";
    const fakePassword = "123";
  
    togglePassword.addEventListener("click", () => {
      const type = passwordInput.type === "password" ? "text" : "password";
      passwordInput.type = type;
      togglePassword.textContent = type === "password" ? "👁️" : "🙈";
    });
  
    toggleTheme.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      toggleTheme.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = passwordInput.value.trim();
      const remember = document.getElementById("remember").checked;
  
      if (username === fakeUsername && password === fakePassword) {
        loginSound.play();
        errorMsg.textContent = "";
        if (remember) localStorage.setItem("sessionUser", username);
        alert("Welcome to Coca-Cola, " + username + "!");
        window.location.href = "dashboard.html"; // redirect to dashboard
      } else {
        errorMsg.textContent = "Invalid username or password.";
      }
    });
  
    const sessionUser = localStorage.getItem("sessionUser");
    if (sessionUser) {
      alert("Welcome back, " + sessionUser + "!");
      window.location.href = "dashboard.html";
    }
  });