document.getElementById("PD-image-upload").addEventListener("change", function(event) {
  var selectedFilesContainer = document.querySelector(".PD-selected-files");
  selectedFilesContainer.innerHTML = "";

  for (var i = 0; i < event.target.files.length; i++) {
    var file = event.target.files[i];
    var reader = new FileReader();

    reader.onload = function(event) {
      var image = document.createElement("img");
      image.src = event.target.result;

      var imageContainer = document.createElement("div");
      imageContainer.appendChild(image);

      var removeImage = document.createElement("span");
      removeImage.classList.add("remove-image");
      removeImage.innerHTML = "Remove";
      removeImage.addEventListener("click", function() {
        imageContainer.parentNode.removeChild(imageContainer);
      });

      imageContainer.appendChild(removeImage);
      selectedFilesContainer.appendChild(imageContainer);
    }

    reader.readAsDataURL(file);
  }
});

document.getElementById("plant-detection-form").addEventListener("submit", async function(event) {
  event.preventDefault();
  showLoadingAnimation();
  
  const files = [...document.querySelector('#PD-image-upload').files];
  
  const promises = files.map((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const res = event.target.result;
        // console.log(res);
        resolve(res);
      };
      reader.readAsDataURL(file);
    });
  });

  const base64files = await Promise.all(promises);
  // console.log(base64files);

  const data = {
    // presenting our credentials
    api_key: "", // ATTAIN A KEY AT: https://web.plant.id/plant-identification-api/

    // providing data to analyze
    images: base64files,

    // additional parameters
    modifiers: ["crops_fast", "similar_images"],
    plant_language: "en",
    plant_details: [
      "common_names",
      "url",
      "name_authority",
      "wiki_description",
      "taxonomy",
      "synonyms"
    ],
  };

  try {
    const response = await fetch('https://api.plant.id/v2/identify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    // console.log('Success:', responseData);
    const plantIDResults = document.querySelector('#plant-id-results');

    if (!responseData.is_plant) {
      const result = document.createElement('div');
      const plantStatus = document.createElement('h3');
      const plantDescription = document.createElement('p');
      plantStatus.innerText = "Not A Plant!";
      plantDescription.innerText = `Probability of being a plant: ${responseData.is_plant_probability}`;
      result.classList.add('not-a-plant');
      result.appendChild(plantStatus);
      result.appendChild(plantDescription);
      plantIDResults.appendChild(result);
      hideLoadingAnimation();
      return;
    }
    
    responseData.suggestions.forEach((currItem) => {
      // console.log(Object.keys(currItem))
      // console.log(Object.keys(currItem.plant_details))
      const result = document.createElement('div');
      const structuredName = document.createElement('h3');
      const plantDescription = document.createElement('p');
      const plantDetails = currItem.plant_details;

      const nameContainer = document.createElement('div');
      const scientificNameLabel = document.createElement('h3');
      const scientificName = document.createElement('p');
      scientificNameLabel.innerText = "Scientific Name";
      scientificName.innerText = plantDetails.scientific_name;
      scientificName.classList.add('plant-data');
      nameContainer.appendChild(scientificNameLabel);
      nameContainer.appendChild(scientificName);
      result.appendChild(nameContainer);

      if ('common_names' in plantDetails){
        const container = document.createElement('div');
        const label = document.createElement('h3');
        const commonName = document.createElement('p');
        label.innerText = "Common Names";
        container.appendChild(label);
        plantDetails.common_names.forEach((name) => {
          commonName.innerText += name === null ? 'none' : `${name}, `;
          commonName.classList.add('plant-data');
          container.appendChild(commonName);
          result.appendChild(container);
        });
      }

      if ('similar_images' in currItem){
        // console.log(`IMAGE: ${currItem.similar_images}`)
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        currItem.similar_images.forEach((img) => {
          const image = document.createElement('img');
          image.src = img.url;
          // console.log(`HI IN IMAGE ARRAY: ${img.url}`)
          image.classList.add('preview-image');
          imageContainer.appendChild(image);
          result.appendChild(imageContainer);
        });
      }
      
      const wikiContainer = document.createElement('div');
      const label = document.createElement('h3');
      label.innerText = "Wiki Description";
      plantDescription.innerText = plantDetails.wiki_description.value;
      plantDescription.classList.add('plant-data');
      wikiContainer.appendChild(label);
      wikiContainer.appendChild(plantDescription);
      result.appendChild(wikiContainer);
      
      result.classList.add('result');
      plantIDResults.appendChild(result);
      hideLoadingAnimation();
    });
  } catch (error) {
    console.error('Error:', error);
    hideLoadingAnimation();
  }
  
  document.querySelector(".PD-selected-files").innerHTML = "";
});






















// Function to show the loading animation
function showLoadingAnimation() {
  const spinner = document.querySelector('.loading-screen');
  spinner.classList.remove('loading-hidden');
  spinner.classList.add('loading-visible');
}

// Function to hide the loading animation
function hideLoadingAnimation() {
  const spinner = document.querySelector('.loading-screen');
  spinner.classList.remove('loading-visible');
  spinner.classList.add('loading-hidden');
}

// JavaScript to handle the toggle functionality
const exampleTab = document.getElementById("example-tab");
const assignmentTab = document.getElementById("assignment-tab");
const exampleContent = document.getElementById("example-content");
const assignmentContent = document.getElementById("assignment-content");

exampleTab.addEventListener("click", function() {
  exampleTab.classList.add("active");
  assignmentTab.classList.remove("active");
  exampleContent.classList.add("active");
  assignmentContent.classList.remove("active");
});

assignmentTab.addEventListener("click", function() {
  assignmentTab.classList.add("active");
  exampleTab.classList.remove("active");
  assignmentContent.classList.add("active");
  exampleContent.classList.remove("active");
});