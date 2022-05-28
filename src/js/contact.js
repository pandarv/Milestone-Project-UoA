const formSubmit = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const telInput = document.querySelector("#telephone");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const commentInput = document.querySelector("#comment");

// ---- Pattern of regular expression
const pattern = {
  nameRegEx: /^[a-z\s]{1,25}$/i,
  phoneRegEx: /^([2-9]\d{2})-(\d{3})-(\d{4})$/,
  emailRegEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  commentRegEx: /^[\w\d!\s@#\$%\^\&*\)\(+=._-]{1,500}$/i,
};

// ---- Validation using classed Object
class ValidationObject {
  constructor(inputValue, regEx) {
    this.inputValue = inputValue;
    this.regEx = regEx;
  }
  validation() {
    if (this.regEx.test(this.inputValue.value) === false || this.inputValue.value === "") {
      this.inputValue.classList.remove("accept");
      this.inputValue.classList.add("error");
    } else {
      this.inputValue.classList.remove("error");
      this.inputValue.classList.add("accept");
      return true;
    }
  }
}

const nameValidation = new ValidationObject(fullName, pattern.nameRegEx);
const phoneValidation = new ValidationObject(telInput, pattern.phoneRegEx);
const emailValidation = new ValidationObject(emailInput, pattern.emailRegEx);
const subjectValidation = new ValidationObject(subjectInput, pattern.nameRegEx);
const commentValidation = new ValidationObject(commentInput, pattern.commentRegEx);

function runValidation() {
  nameValidation.validation();
  phoneValidation.validation();
  emailValidation.validation();
  subjectValidation.validation();
  commentValidation.validation();
}

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();

  // ---- Validation from ValidationObject
  runValidation();
  // formSubmit.reset();
});
