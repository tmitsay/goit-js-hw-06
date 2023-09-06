const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Please! Fill in all fields of the form");
  } else {
    const dataForm = {
      email: email.value,
      password: password.value,
    };
    console.log(dataForm);
    event.currentTarget.reset();
  }
}
