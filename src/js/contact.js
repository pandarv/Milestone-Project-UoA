const formSubmit = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const telInput = document.querySelector("#telephone");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const commentInput = document.querySelector("#comment");

const nameRegEx = /^[a-z\s]{1,25}$/i;
const phoneRegEx = /^([2-9]\d{2})-(\d{3})-(\d{4})$/;
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const commentRegEx = /^[\w\d!\s@#\$%\^\&*\)\(+=._-]{1,500}$/i;

// const inputVal = [fullName, telInput, emailInput, subjectInput, commentInput];

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  validation(fullName, nameRegEx);
  validation(telInput, phoneRegEx);
  validation(emailInput, emailRegEx);
  validation(subjectInput, nameRegEx);
  validation(commentInput, commentRegEx);
});

function validation(input, regEx) {
  const inputTrim = input.value.trim();
  if (regEx.test(input.value) === false || inputTrim === "") {
    input.classList.remove("accept");
    input.classList.add("error");
  } else {
    input.classList.remove("error");
    input.classList.add("accept");
  }
}
