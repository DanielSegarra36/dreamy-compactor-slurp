document.addEventListener("DOMContentLoaded", function() {
  // Get the button element and register a click event listener
  const simulateBtn = document.getElementById("simulateBtn");
  simulateBtn.addEventListener("click", simulate24Hours);
});

function simulate24Hours() {
  // Disable the button during the simulation
  simulateBtn.disabled = true;
  // Display simulation status
  setStatus("Simulating 24 hours...");

  // Define the system parameters as an object
  const systemParameters = {
    plantWaterRequirements: getRandomFloat(0.1, 0.15),
    systemCapacity: 10,
    evaporationRate: 0.5,
    ecLevel: getRandomFloat(2, 3.5),
    phLevel: getRandomFloat(5.8, 6.3)
  };

  // Create arrays for EC and pH values
  const ecValues = [];
  const phValues = [];

  // Update the system information fields
  setSystemInfo("plantWaterReq", `Plant Water Requirements: ${roundDecimal(systemParameters.plantWaterRequirements * systemParameters.systemCapacity, 3)} gallons`);
  setSystemInfo("systemCapacity", `System Capacity: ${systemParameters.systemCapacity} gallons`);
  setSystemInfo("evaporationRate", `Evaporation Rate: ${roundDecimal(systemParameters.evaporationRate, 3)} gallons`);
  setSystemInfo("ecLevel", `EC Level: ${roundDecimal(systemParameters.ecLevel, 3)}`);
  setSystemInfo("phLevel", `pH Level: ${roundDecimal(systemParameters.phLevel, 3)}`);

  // Simulate 24 hours with a delay of 1 second between each hour
  let hour = 0;
  const simulationInterval = setInterval(function() {
    hour++;
    setStatus(`Simulating 24 hours... Hour: ${hour}`);

    // Update EC and pH levels
    systemParameters.ecLevel += getRandomFloat(-0.2, 0.2);
    systemParameters.phLevel += getRandomFloat(-0.1, 0.1);

    // Regulate EC and pH levels
    systemParameters.ecLevel = regulateLevel(systemParameters.ecLevel, 2, 3.5);
    systemParameters.phLevel = regulateLevel(systemParameters.phLevel, 5.8, 6.3);

    
    // Add EC and pH values to the arrays
    ecValues.push(roundDecimal(systemParameters.ecLevel,3));
    phValues.push(roundDecimal(systemParameters.phLevel,3));

    // Check for dangerous levels
    const ecLevelElement = document.getElementById("ecLevel");
    const phLevelElement = document.getElementById("phLevel");
    checkDangerousLevel(systemParameters.ecLevel, 2, 3.5, ecLevelElement);
    checkDangerousLevel(systemParameters.phLevel, 5.8, 6.3, phLevelElement);

    // Update the system information fields with rounded values
    setSystemInfo("evaporationRate", `Evaporation Rate: ${roundDecimal(systemParameters.evaporationRate, 3)} gallons`);
    setSystemInfo("ecLevel", `EC Level: ${roundDecimal(systemParameters.ecLevel, 3)}`);
    setSystemInfo("phLevel", `pH Level: ${roundDecimal(systemParameters.phLevel, 3)}`);

    // Check if 24 hours have passed
    if (hour >= 24) {
      clearInterval(simulationInterval);
      // Enable the button after the simulation is complete
      simulateBtn.disabled = false;
      setStatus("24 hours simulation complete");

            // Print the arrays
      console.log("EC values:", ecValues);
      console.log("pH values:", phValues);
    }
  }, 1000);
}

function checkDangerousLevel(value, lowerLimit, upperLimit, element) {
  if (value < lowerLimit || value > upperLimit) {
    element.classList.add("danger");
  } else {
    element.classList.remove("danger");
  }
}

function setSystemInfo(elementId, value) {
  const element = document.getElementById(elementId);
  element.textContent = value;
}

function setStatus(message) {
  const statusElement = document.getElementById("status");
  statusElement.textContent = "Status: " + message;
}

function roundDecimal(number, decimalPlaces) {
  const factor = 10 ** decimalPlaces;
  return Math.round(number * factor) / factor;
}

function regulateLevel(level, lowerLimit, upperLimit) {
  if (level < lowerLimit) {
    return lowerLimit;
  } else if (level > upperLimit) {
    return upperLimit;
  } else {
    return level;
  }
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
