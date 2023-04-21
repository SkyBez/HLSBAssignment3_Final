"use strict";


const $ = (selector) => document.querySelector(selector);
const $$ = (selector)=> document.querySelectorAll(selector);

let display = $(".display");
let selections = $$("button");
let calculate= "";

console.log(selections)

selections.forEach(button => {
  button.addEventListener("click", event => {
    let buttonText = event.target.innerText;
    if (buttonText == "x") {
      buttonText = "*";
      console.log("button pressed");
      calculate += buttonText;
      display.value = calculate;
    } else if (buttonText == "AC") {
      calculate = "";
      display.value = calculate;
    } else if (buttonText == "DEL") {
      calculate = calculate.slice(0, -1);
      display.value = calculate;
    } else if (buttonText == "=") {
      var result;
      try {
        result = eval(calculate);
        display.value = Math.round(parseFloat(result)*100)/100;
      } catch (error) {
        result = "Syntax error";
        display.value = result
      }
    } else {
      calculate += buttonText;
      display.value = calculate;
    }
  });
});
