let calculation = localStorage.getItem('calculation') || '';
displayCalculation();

function updateCalculation(value) {
    calculation += value;
    displayCalculation();
    localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  const display = document.querySelector('.js-calculation');
  display.innerHTML = calculation;

  // Adjust font size dynamically to fit inside the calculator
  if (calculation.length > 12) {
      display.style.fontSize = "30px"; // Reduce size for long numbers
  } else{
      display.style.fontSize = "30px"; // Default size
  }
}
