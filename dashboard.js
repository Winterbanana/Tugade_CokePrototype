document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logoutBtn");
  
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("sessionUser");
      window.location.href = "index.html";
    });
  
    const darkModeToggle = document.getElementById("darkModeToggle");
  
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
    }
  
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
  
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
      } else {
        localStorage.setItem("darkMode", "disabled");
      }
    });
  });