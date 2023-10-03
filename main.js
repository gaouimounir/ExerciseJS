let fuel = 3;
let speed = 0;
let rpm = 0;
let temperature = 0;
let kilometrage = 0;

/* let fuel = document.getElementById("fuel-indicator");
let speed = document.getElementById("speed-needle");
let rpm = document.getElementById("rpm-value");
let temperature = document.getElementById("temperature-indicator");
let kilometrage = document.getElementById("km-indicator"); */

function startEngine() {
  if (fuel > 0) {
    temperature = 50;
    rpm = 800;
    document.getElementById("temperature-indicator").innerHTML = temperature;
    document.getElementById("rpm-value").innerHTML = rpm;
    document.getElementById("fuel-indicator").innerHTML = fuel;
    document.getElementById("rpm-needle").style.rotate = "20deg";

    const fuelDebit = 0.1;
    const fuelInterval = 1000;

    const fuelConsom = setInterval(function () {
      fuel -= fuelDebit;
      if (fuel <= 0) {
        clearInterval(fuelConsom);
      }
    }, fuelInterval);
  }
}

function stopEngine() {
  document.getElementById("start-button").style.display = "block";
  document.getElementById("stop-button").style.display = "none";
  document.getElementById("refuel").disabled = false;
  rpmValue = 0;
  speedValue = 0;
  temperatureValue = "--";
  updateValues();
  clearInterval(timer);
}

function refuel() {
  kmValue = 0;
  document.getElementById("km-indicator").innerHTML = kmValue;
  fuelValue = 60;
  document.getElementById("fuel-indicator").innerHTML = fuelValue;
}
