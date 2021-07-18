const bodyStyles = window.getComputedStyle(document.body);

const clearAll = () => {
  const clear_span = document.querySelectorAll(".error");
  const clear_input = document.querySelectorAll(".input");
  const el_img = document.querySelectorAll(".input > img");
  clear_span.forEach((cl) => (cl.innerText = ""));
  clear_input.forEach((cl) => (cl.style = "2px solid transparent"));
  el_img.forEach((img) => (img.style.opacity = 0));
};

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const validate = () => {
  const errors = [];
  const el_popup = document.getElementById("popup");

  const form = document.getElementById("intro");
  let formd = new FormData(form);
  const fname = formd.get("fname");
  const lname = formd.get("lname");
  const email = formd.get("email");
  const password = formd.get("password");

  if (!fname.trim()) {
    errors.push({ id: "fname", error: "First Name is required!" });
  }
  if (!lname.trim()) {
    errors.push({ id: "lname", error: "Last Name is required!" });
  }
  if (!email.trim() || !emailIsValid(email)) {
    errors.push({ id: "email", error: "Email is invalid!" });
  }
  if (password.trim().length < 6) {
    errors.push({
      id: "password",
      error: "Password should be greater than 6 letters!",
    });
  }

  clearAll();

  errors?.forEach(({ id, error }) => {
    const el_span = document.querySelector(`#${id} .error`);
    const el_img = document.querySelector(`#${id} img`);
    const el_input = document.querySelector(`#${id} .input`);

    el_span.innerHTML = error;
    el_input.style.border = `2px solid red`;
    el_input.style.color = "red";
    el_img.style.opacity = 1;
    el_span.style.opacity = 1;
  });

  if (errors.length === 0) {
    el_popup.style.opacity = 1;
    el_popup.style.zIndex = 1;
  }

  return false;
};

function close_popup() {
  const el_popup = document.getElementById("popup");
  el_popup.style.opacity = 0;
  el_popup.style.zIndex = -1;
}
