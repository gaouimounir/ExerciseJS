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
