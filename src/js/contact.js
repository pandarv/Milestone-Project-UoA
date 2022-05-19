const formSubmit = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const telInput = document.querySelector("#telephone");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const commentInput = document.querySelector("#comment");

const nameRegEx = /^([a-z]( ){0,}){1,25}$/i;
const phoneRegEx = /^([2-9]\d{2})-(\d{3})-(\d{4})$/;
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const inputVal = [fullName, telInput, emailInput, subjectInput, commentInput];

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();

  //   if (!nameRegEx.test(fullName.value.trim())) {
  //     fullName.classList.add("error");
  //   } else {
  //     fullName.classList.add("accept");
  //   }
  validation(fullName, nameRegEx);
  validation(telInput, phoneRegEx);

  validation(emailInput, emailRegEx);
  /** via Array Loop */
  //   inputVal.forEach((item) => {
  // let itemSibling = item.previousElementSibling.innerHTML;
  // console.log(item.id, itemSibling);
  //     item.value.trim() === "" ? errorMsgVis(item, `${item} is required`) : acceptMsgVis(item);
  //   });

  //   telephone number validation
  //   let telVal = telInput.value.trim();

  //   if (!phoneRegEx.test(telVal) && telVal === "") {
  //     telInput.classList.add("error");
  //   } else {
  //     telInput.classList.add("accept");
  //   }

  //   // email validation
  //   console.log(emailRegEx.test(emailInput.value));
  //   if (!emailRegEx.test(emailInput.value) && emailInput.value === "") {
  //     emailInput.classList.add("error");
  //   } else {
  //     emailInput.classList.add("accept");
  //   }
});

function validation(input, regEx) {
  const inputTrim = input.value.trim();
  //   if (input.classList.contains("error") || input.classList.contains("accept")) {
  //     input.classList.remove("error");
  //     input.classList.remove("accept");
  //   }
  if (regEx.test(input.value) === false && inputTrim === "") {
    console.log(typeof regEx.test(inputTrim));
    console.log(typeof input.value);
    input.classList.add("error");
  } else {
    input.classList.add("accept");
  }
}

// function errorMsgVis(inputValue, message) {
//   const smallTxt = document.querySelector("main small");
//   smallTxt.innerText = message;
//   const inputParent = inputValue.parentElement;
//   //   inputParent.classList.remove("error");
//   inputParent.classList.add("error");
// }

// function fieldName(input) {}

// function acceptMsgVis(inputValue) {
//   const inputParent = inputValue.parentElement;
//   inputParent.classList.add("accept");
// }
