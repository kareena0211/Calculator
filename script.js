
const display = document.getElementById("display");
const buttons = document.getElementById("buttons");

buttons.addEventListener("click", (event) => {
  let target = event.target;

  if (target.innerHTML === "C") {
    display.value = "";

  } else if (target.classList.contains("number") || target.classList.contains("decimal"))
   {
    display.value += target.innerHTML;
  } else if (target.classList.contains("operator"))
   {
    let lastChar = display.value[display.value.length - 1];
    if (["+", "-", "*", "/"].includes(lastChar)) 
    {
      display.value = display.value.slice(0, -1) + target.innerHTML;
    } else
     {
      display.value += target.innerHTML;
    }
  } else if (target.innerHTML === "=") {

    if (display.value.length !== 0)
     {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Syntax Error!";
      }
    } else display.value = "";
  }
});