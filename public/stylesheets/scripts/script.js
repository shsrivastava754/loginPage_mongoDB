const btn = document.getElementById("submitBtn");

const checkForm = (e) => {
  btn.setAttribute("disabled", "");
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username.length && password.length) {
    btn.removeAttribute("disabled");
  }
};

const handleToggle = () => {
  let pass = document.getElementById("password");
  let toggleBtn = document.getElementById("toggle");
  let currentType = pass.getAttribute("type");

  if (currentType === "password") {
    pass.setAttribute("type", "text");
    toggleBtn.setAttribute("class", "fa-solid fa-eye-slash");
  } else {
    pass.setAttribute("type", "password");
    toggleBtn.setAttribute("class", "fa-sharp fa-solid fa-eye toggle");
  }
};
