const elementForm = document.querySelector(".form");
const elementInputTemperature = document.querySelector(".form-input-temperature");
const elementInputRun = document.querySelector(".form-input-run");
const elementInputGym = document.querySelector(".form-input-gym");
const elementYes = document.querySelector(".main-heading-yes");
const elementNo = document.querySelector(".main-heading-no");

elementForm.addEventListener("submit", function(evn) {
  evn.preventDefault();

const inputValue = elementInputTemperature.value;
const inputCheckboxValueRun = elementInputRun.checked;
const inputCheckboxValueGym = elementInputGym.checked;

  if (inputValue > 5 && inputValue < 30 ) {
    elementYes.style.color = "green";
    elementNo.style.color = "rgb(72, 14, 72)"
  }
  else if (inputValue < 5 && inputCheckboxValueGym == true) {
    elementNo.style.color = "red";
    elementYes.style.color = "rgb(72, 14, 72)";
}
   if (inputCheckboxValueRun == true && inputCheckboxValueGym == true){
    elementYes.style.color = "green";
    elementNo.style.color = "rgb(72, 14, 72)"
  }
  else if (elementInputRun.checked == true) {
    elementNo.style.color = "red";
    elementYes.style.color = "rgb(72, 14, 72)";
  }
})
