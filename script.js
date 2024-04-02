const dbutton = document.querySelector(".decrementbtn");
const ibutton = document.querySelector(".incrementbtn");
const counter = document.querySelector(".count");
const field = document.querySelector(".field");
const resetButton = document.querySelector(".reset-btn");



//handling on  click event on increent button
ibutton.addEventListener(`click`, () => {
  let counterValue = Number(counter.innerHTML);
  let fieldValue = Number(field.value);

  if (fieldValue > 0 && fieldValue < 11) {
    counter.innerHTML = counterValue + fieldValue;
  } else {
    alert(`set a value in between 1&10`);
  }
});


//handling on click event on decrement button
dbutton.addEventListener(`click`, () => {
  let counterValue = Number(counter.innerText);
  let fieldValue = Number(field.value);

  if (fieldValue > 0 && fieldValue < 11) {
    counter.innerHTML = counterValue - fieldValue;
  } else {
    alert(`set a value in between 1&10`);
  }
});


// handling reset  button on click
resetButton.addEventListener(`click`, () => {
  counter.innerHTML = 0;
});
