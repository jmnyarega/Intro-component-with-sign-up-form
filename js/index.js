const bodyStyles = window.getComputedStyle(document.body);

const clearAll = () => {
  const clear_span = document.querySelectorAll("input + span");
  const clear_input = document.querySelectorAll("input");
  const el_img = document.querySelectorAll(".form-control > img");
  clear_span.forEach((cl) => (cl.innerText = ""));
  clear_input.forEach((cl) => (cl.style = "1px solid"));
  el_img.forEach((img) => (img.style.display = "none"));
};

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const validate = () => {
  const errors = [];
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  clearAll();

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

  errors?.forEach((err) => {
    const el_span = document.getElementById(`${err.id}-error`);
    const el_img = document.getElementById(`${err.id}-error-img`);
    const el_input = document.getElementById(`${err.id}`);
    el_span.innerHTML = err.error;
    el_input.style.border = `2px solid ${bodyStyles.getPropertyValue("--red")}`;
    el_input.style.color = `${bodyStyles.getPropertyValue("--red")}`;
    el_img.style.display = "block";
  });

  return errors.length ? false : true;
};
