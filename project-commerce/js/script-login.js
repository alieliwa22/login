const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const loginSection = document.getElementById("login-section");
const registerSection = document.getElementById("register-section");
const leftSection = document.getElementById("left-section");
loginBtn.addEventListener("click", () => {
  loginSection.classList.remove("displayn");
  registerSection.classList.add("displayn");
  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
  leftSection.animate(
    [
      { borderRadius: "90%" },
      { transform: "scale(0.5)" },
      { transform: "scale(1)" },
      { borderRadius: "0" },
    ],
    {
      duration: 1000,
    }
  );
});
registerBtn.addEventListener("click", () => {
  loginSection.classList.add("displayn");
  registerSection.classList.remove("displayn");
  loginBtn.classList.remove("active");
  registerBtn.classList.add("active");
  leftSection.animate(
    [
      { borderRadius: "90%" },
      { transform: "scale(0.5)" },
      { transform: "scale(1)" },
      { borderRadius: "0" },
    ],
    {
      duration: 1000,
    }
  );
});
