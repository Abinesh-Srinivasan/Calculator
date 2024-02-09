const inputElement = document.querySelector(".input");
inputElement.value = "Welcome!";
var inputNumber = (Number) => {
  if (inputElement.value === "Welcome!" || inputElement.value === "Continue...")
    inputElement.value = null;
  inputElement.value += Number;
};
var clearInputElement = () => (inputElement.value = "Continue...");
var answerCalculation = () => {
  try {
    inputElement.value = eval(inputElement.value);
  } catch {
    inputElement.value = "Answer Invalid";
  }
};
var deleteInputElement = () => {
  inputElement.value = inputElement.value.slice(0, -1);
  if (inputElement.value === "") inputElement.value = "Press AC Button";
};
document.addEventListener("keydown", function (event) {
  if (inputElement.value === "Welcome!" || inputElement.value === "Continue...")
    inputElement.value = "";
  if (event.key === "1") inputElement.value += "1";
  if (event.key === "2") inputElement.value += "2";
  if (event.key === "3") inputElement.value += "3";
  if (event.key === "4") inputElement.value += "4";
  if (event.key === "5") inputElement.value += "5";
  if (event.key === "6") inputElement.value += "6";
  if (event.key === "7") inputElement.value += "7";
  if (event.key === "8") inputElement.value += "8";
  if (event.key === "9") inputElement.value += "9";
  if (event.key === "0") inputElement.value += "0";
  if (event.key === "+") inputElement.value += "+";
  if (event.key === "-") inputElement.value += "-";
  if (event.key === "*") inputElement.value += "*";
  if (event.key === "/") inputElement.value += "/";
  if (event.key === ".") inputElement.value += ".";
  if (event.key === "=") answerCalculation();
  if (event.key === "Delete") deleteInputElement();
  if (event.key === "Backspace") clearInputElement();
});
