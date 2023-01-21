const form = document.querySelector(".form");
const email = document.querySelector(".email");

const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = form["email"].value;
  if (!emailValue) {
    email.classList.add("empty-email");
  } else if (!isValidEmail(emailValue)) {
    email.classList.add("invalid-email");
  } else {
    form.submit();
  }
});

email.addEventListener("click", () => {
  email.classList.remove("invalid-email");
  email.classList.remove("empty-email");
});
