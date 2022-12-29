const passInput = document.querySelector(".input-group input");
const toggleIcon = document.querySelector(".input-group .toggle");
const ripple = document.querySelector(".input-group .ripple");
const percentageBar = document.querySelector(".strength-percent span");
const passLabel = document.querySelector(".strength-label");

passInput.addEventListener("input", handlePassInput);
toggleIcon.addEventListener("click", togglePassInput);

function handlePassInput(e) {
  if (passInput.value.length === 0) {
    passLabel.innerHTML = "Weak";
    addClass(passLabel, "Weak");
  } else if (passInput.value.length <= 4) {
    passLabel.innerHTML = "Medium";
    addClass(passLabel, "Medium");
  } else if (passInput.value.length <= 8) {
    passLabel.innerHTML = "Strong";
    addClass(passLabel, "Strong");
  } else {
    passLabel.innerHTML = "Very Strong";
    addClass(passLabel, "VeryStrong");
  }
}

function addClass(label, className) {
  percentageBar.classList.remove("Weak");
  percentageBar.classList.remove("Medium");
  percentageBar.classList.remove("Strong");
  percentageBar.classList.remove("VeryStrong");
  percentageBar.classList.add(className);
  if (className) {
    percentageBar.classList.add(className);
  }
}

function togglePassInput(e) {
  const type = passInput.getAttribute("type");
  if (type === "password") {
    passInput.setAttribute("type", "text");
    toggleIcon.innerHTML = "☠️";
    ripple.style.cssText = `
        border-radius: 4px;
        width: 100%;
        right: 0;
        z-index: -1;
        `;
    passInput.style.color = "#000";
    passInput.style.background = "transparent";
    toggleIcon.style.fontsize = "22px";
  } else {
    passInput.setAttribute("type", "password");
    toggleIcon.innerHTML = "🔒";
    passInput.style.color = "#fff";
    passInput.style.background = "#000";
    toggleIcon.style.fontsize = "18px";
    ripple.style.cssText = `
        border-radius: 40%;
        width: 25%;
        right: 10;
        z-index: 1;
        `;
  }
}
