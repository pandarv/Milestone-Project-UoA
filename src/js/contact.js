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

// ---- Validation from Normal Function

// function validation(input, regEx) {
//   const inputTrim = input.value.trim();
//   if (regEx.test(input.value) === false || inputTrim === "") {
//     input.classList.remove("accept");
//     input.classList.add("error");
//   } else {
//     input.classList.remove("error");
//     input.classList.add("accept");
//   }
// }

// ---- Validation from Anonymous Object
const formObj = {
  name: "#name",
  phoneNum: "#telephone",
  emailAdd: "#email",
  subject: "#subject",
  message: "#comment",
  validation(id, regEx) {
    domNode = document.querySelector(id);
    if (regEx.test(domNode.value) === false || domNode.value === "") {
      domNode.classList.remove("accept");
      domNode.classList.add("error");
    } else {
      domNode.classList.remove("error");
      domNode.classList.add("accept");
    }
  },
  runValidation() {
    this.validation(this.name, nameRegEx);
    this.validation(this.phoneNum, phoneRegEx);
    this.validation(this.emailAdd, emailRegEx);
    this.validation(this.subject, nameRegEx);
    this.validation(this.message, commentRegEx);
  },
};

/

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  // ---- Validation from normal function at line 13
  // validation(fullName, nameRegEx);
  // validation(telInput, phoneRegEx);
  // validation(emailInput, emailRegEx);
  // validation(subjectInput, nameRegEx);
  // validation(commentInput, commentRegEx);

  // ---- Validation from formObject at line start at line 24
  formObj.runValidation();  
});
