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
  let plantWaterRequirements = getRandomFloat(0.1, 0.15);
  let systemCapacity = 10;
  let evaporationRate = 0.5;
  let ecLevel = getRandomFloat(2, 3.5);
  let phLevel = getRandomFloat(5.8, 6.3);

  /***********   ASSIGNMENT   ***********/ 
  // Create arrays for EC and pH values
  // CODE HERE FOR ASSIGNMENT
  // CODE HERE FOR ASSIGNMENT
  // CODE HERE FOR ASSIGNMENT
  // CODE HERE FOR ASSIGNMENT
  // CODE HERE FOR ASSIGNMENT
  // CODE HERE FOR ASSIGNMENT
  // CODE HERE FOR ASSIGNMENT
  // CODE HERE FOR ASSIGNMENT

  // Update the system information fields
  setSystemInfo("plantWaterReq", `Plant Water Requirements: ${roundDecimal(plantWaterRequirements * systemCapacity, 3)} gallons`);
  setSystemInfo("systemCapacity", `System Capacity: ${systemCapacity} gallons`);
  setSystemInfo("evaporationRate", `Evaporation Rate: ${roundDecimal(evaporationRate, 3)} gallons`);
  setSystemInfo("ecLevel", `EC Level: ${roundDecimal(ecLevel, 3)}`);
  setSystemInfo("phLevel", `pH Level: ${roundDecimal(phLevel, 3)}`);

  // Simulate 24 hours with a delay of 1 second between each hour
  let hour = 0;
  const simulationInterval = setInterval(function() {
    hour++;
    setStatus(`Simulating 24 hours... Hour: ${hour}`);

    // Update EC and pH levels
    ecLevel += getRandomFloat(-0.2, 0.2);
    phLevel += getRandomFloat(-0.1, 0.1);

    /*
      ASSIGNMENT
      Regulate EC and pH levels (HINT: SEE FUNCTION BELOW)
      Acceptable Ranges:
        EC: 2, 3.5
        pH: 5.8, 6.3
    */
    // CODE HERE FOR ASSIGNMENT
    // CODE HERE FOR ASSIGNMENT
    // CODE HERE FOR ASSIGNMENT
    // CODE HERE FOR ASSIGNMENT
    // CODE HERE FOR ASSIGNMENT
    // CODE HERE FOR ASSIGNMENT
    // CODE HERE FOR ASSIGNMENT

    
    /***********   ASSIGNMENT   ***********/ 
    // Add EC and pH values to the arrays their individual arrays
    // CODE HERE FOR ASSIGNMENT
    // CODE HERE FOR ASSIGNMENT
    // CODE HERE FOR ASSIGNMENT
    // CODE HERE FOR ASSIGNMENT
    // CODE HERE FOR ASSIGNMENT
    // CODE HERE FOR ASSIGNMENT
    // CODE HERE FOR ASSIGNMENT

    // Check for dangerous levels
    const ecLevelElement = document.getElementById("ecLevel");
    const phLevelElement = document.getElementById("phLevel");
    checkDangerousLevel(ecLevel, 2, 3.5, ecLevelElement);
    checkDangerousLevel(phLevel, 5.8, 6.3, phLevelElement);

    // Update the system information fields with rounded values
    setSystemInfo("evaporationRate", `Evaporation Rate: ${roundDecimal(evaporationRate, 3)} gallons`);
    setSystemInfo("ecLevel", `EC Level: ${roundDecimal(ecLevel, 3)}`);
    setSystemInfo("phLevel", `pH Level: ${roundDecimal(phLevel, 3)}`);

    // Check if 24 hours have passed
    if (hour >= 24) {
      clearInterval(simulationInterval);
      // Enable the button after the simulation is complete
      simulateBtn.disabled = false;
      setStatus("24 hours simulation complete");

      /***********   ASSIGNMENT   ***********/ 
      // Print the arrays to the CONSOLE
      // CODE HERE FOR ASSIGNMENT
      // CODE HERE FOR ASSIGNMENT
      // CODE HERE FOR ASSIGNMENT
      // CODE HERE FOR ASSIGNMENT
      // CODE HERE FOR ASSIGNMENT
      // CODE HERE FOR ASSIGNMENT
      // CODE HERE FOR ASSIGNMENT
      // CODE HERE FOR ASSIGNMENT
    }
  }, 1000);
}

/******************     ASSIGNMENT     ******************/ 
function regulateLevel(level, lowerLimit, upperLimit) {
  /* CODE HERE FOR ASSIGNMENT */ 
  /* CODE HERE FOR ASSIGNMENT */ 
  /* CODE HERE FOR ASSIGNMENT */ 
}

/**************************************************************************/
/****************************** DO NOT TOUCH ******************************/
/***************************** THE CODE BELOW *****************************/
/******************************* THIS POINT *******************************/
/**************************************************************************/

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

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
