//. grab elements...
let screen = document.querySelector(".js-display");
let buttons = document.querySelectorAll(".button");

let userInput = ""; // handle user-input

//. iterate through each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    //. grab targetted button-value
    const value = button.innerText;

    // Handle 'C' (Clear) button
    if (value === "C") {
      handleReset();
      return;
    }

    // Handle '=' (Evaluate) button
    if (value === "=") {
      evaluate();
      return;
    }

    // Append targetted btn value to userInput
    userInput += value;
    updateDisplay(userInput);
  });
});

//. () -> Update display
function updateDisplay(input) {
  screen.innerText = input || "0"; // Show '0' if input is empty
}

//. () -> handle reset
function handleReset() {
  userInput = ""; // Clear the userInput
  updateDisplay(userInput);
}

//. () -> handle evaluation
function evaluate() {
  try {
    // Use eval to evaluate the expression (basic functionality)
    const result = eval(userInput);
    userInput = result.toString(); // Store result for further operations
    updateDisplay(userInput);
  } catch (error) {
    updateDisplay("Error"); // Handle invalid expressions
  }
}
