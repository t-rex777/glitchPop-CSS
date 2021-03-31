// Form validation
const validationMessage = document.querySelector(".validation-message");
const formUserName = document.querySelector(".form-username");
const formPassword = document.querySelector(".form-password");
const formRePassword = document.querySelector(".form-rePassword");
const formValidation = document.querySelector(".form-validation");

formValidation.addEventListener("submit", (e) => {
  let messages = [];
  if (formUserName.value === "" || formUserName.value === null) {
    messages.push("Please enter the username");
    formUserName.style.border = "solid 1px red";
  }
  if (formPassword.value.length <= 6) {
    messages.push("Password should be atleast 6 characters");
    formPassword.style.border = "solid 1px red";
  }
  if (
    formPassword.value !== formRePassword.value ||
    formPassword.value.length <= 6
  ) {
    messages.push("Both the passwords entered should be same");
    formRePassword.style.border = "solid 1px red";
  }
  if (messages.length > 0) {
    e.preventDefault();
    validationMessage.innerText = messages.join("\n");
// messages will vanish after 3 seconds
    setTimeout(() => {
      validationMessage.innerText = " ";
    }, 3000);
  }
});

// Modal
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-active");
const modalCloseBtn = document.querySelector(".modal-close");
//if user clicks on modal button, it opens modal
modalBtn.addEventListener("click",()=>{
  modal.style.display="block";
})
//if user clicks on close button, it closes modal
modalCloseBtn.addEventListener("click",()=>{
  modal.style.display="none";
})
//if user clicks outside the modal, it closes modal
window.onclick = (e)=>{
  if(e.target == modal){
    modal.style.display="none";
  }
}
// Toast
const toastBtn = document.querySelector(".toast-btn");
const toast = document.querySelector(".toast");
toastBtn.addEventListener("click",()=>{
  toast.style.display="block";
  setTimeout(()=>{
    toast.style.display="none";
  },3000)
})