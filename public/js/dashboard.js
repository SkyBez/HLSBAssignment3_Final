"use strict";
//Setting variables for later functions.
const $ = (selector) => document.querySelector(selector);
let timer;
let distance;
let storedTemp;


//Setting the postal code regular expression.
const postalRegEx =
  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;


//Function when the reset button is hit.
const onReset = (evt) => {
  //TODO:: Reset the reset-able fields
  resetErrors();

  $("#notifications").checked = true;

  $("#eco").checked = true;
  $("#temperature").value = 21;
  $("#location").value = "L7W 4T8";

  evt.preventDefault();
};

//Clears all errors
const resetErrors = () => {
  $("#temperature_error").textContent = "";
  $("#location_error").textContent = "";
  console.error("Fields Reset");
};

//Function when the submit button is hit.
const onSubmit = (evt) => {
  //TODO::Reset any errors before submitting
  resetErrors();

  //TODO:: Set notifications since it doesn't need to be validated
  let notificationsOn = $("#notifications").checked;

  $("#setting_notifications").textContent = notificationsOn ? "On" : "Off";

  //TODO:: Set lighting mode with a for loop since it doesn't need to be validated
  //querySelectorAll returns an array of everything that matches the argument
  let lightingModeOptions = document.querySelectorAll("[name='lighting_mode']");

  for (let i = 0; i < lightingModeOptions.length; i++) {
    if (lightingModeOptions[i].checked) {
      //Set setting_lighting_mode to the value of the selected radio button
      $("#setting_lighting_mode").textContent = lightingModeOptions[i].value;
    }
  }

  //TODO:: Validate the postal code with the Regular Expression,
  //TODO:: Display an error if not valid
  let location = $("#location").value;

  if (postalRegEx.test(location)) {
    //if the postal code is valid this code will run
    $("#setting_location").textContent = location;
  } else {
    //Add your logic here if the postal code is not valid
    $("#location_error").textContent =
      "The postal code did not match the format required.";
  }

  //TODO:: Validate the temperature by checking the range and if it's a number
  //TODO:: Display an error if not valid
  let temperature = $("#temperature").value;
  let temperatureError = $("#temperature_error");

  if (isNaN(temperature) || temperature == "") {
    temperatureError.textContent = "This is not a valid temperature selection.";
  } else if (temperature > 25) {
    temperatureError.textContent =
      "Max temperature is 25C, setting temperature to Max";
    $("#setting_temperature").textContent = 25;
  } else if (temperature < 10) {
    temperatureError.textContent =
      "Min temperature is 10C, setting temperature to Min";
    $("#setting_temperature").textContent = 10;
  } else {
    $("#setting_temperature").textContent = temperature;
  }

};


// Updates the timer every second when the timer is greater then or equal to zero. When the time elapses zero the temperature value returns to whatever it was set to before.
const update = evt =>{
  distance-=1000;
  //Converts time to hours, minutes, and seconds in a legible format.
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if(distance>=0){
    //displays time.
    $("#setting_timer").textContent = hours + ": "+ minutes + ": " + seconds;
  }else{
    //displays previously stored value after timer runs outs.
    $("#setting_temperature").textContent = storedTemp;
  }

}

//stores the previous temperature and then temporarily stores the new value.
const timedtemp = evt =>{
  //converts timer into milliseconds
  distance = ($("#hour").value*60*60*1000)+($("#mins").value*60*1000);
  storedTemp=$("#setting_temperature").textContent;
  $("#setting_temperature").textContent = $("#temp").value;
  //Updates every second.
  timer = setInterval(update, 1000);
}


document.addEventListener("DOMContentLoaded", () => {
  //TODO:: Add current date
  $("#date_display").textContent = new Date().toDateString();
  //TODO:: Add Reset Form listener
  $("#reset_form").addEventListener("reset", onReset);
  //TODO:: Add Submit Form listener
  $("#update_settings").addEventListener("click", onSubmit);
  //Event listener for the temporary temperature button.
  $("#temporary").addEventListener("click", timedtemp);
});

