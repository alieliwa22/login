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
});
registerBtn.addEventListener("click", () => {
  loginSection.classList.add("displayn");
  registerSection.classList.remove("displayn");
  loginBtn.classList.remove("active");
  registerBtn.classList.add("active");
});

loginBtn.addEventListener("mouseover", () => {
  if (window.innerWidth > 974) {
    leftSection.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 6000,
    });
  }
});
registerBtn.addEventListener("mouseover", () => {
  if (window.innerWidth > 974) {
    leftSection.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 6000,
    });
  }
});
