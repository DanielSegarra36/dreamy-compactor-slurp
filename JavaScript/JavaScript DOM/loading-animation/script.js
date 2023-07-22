// Function to show the loading animation
function showLoadingAnimation() {
  const spinner = document.getElementById('loading-spinner');
  spinner.classList.remove('loading-hidden');
  spinner.classList.add('loading-visible');
}

// Function to hide the loading animation
function hideLoadingAnimation() {
  const spinner = document.getElementById('loading-spinner');
  spinner.classList.remove('loading-visible');
  spinner.classList.add('loading-hidden');
}

// Example asynchronous API call
async function fetchData() {
  showLoadingAnimation();

  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();

    // Process the received data here

    hideLoadingAnimation();
  } catch (error) {
    console.error('Error:', error);
    hideLoadingAnimation();
  }
}

// Call the fetchData function to initiate the API call
// fetchData();

showLoadingAnimation()

function hello(){
  console.log("HEY")
}