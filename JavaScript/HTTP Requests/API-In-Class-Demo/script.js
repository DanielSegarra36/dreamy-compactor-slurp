// https://meowfacts.herokuapp.com/
// Tell function to run asynchronously 
async function getCatFact() {
  // have base url as const so we don't accidentally change it
  const catFactsAPI = "https://meowfacts.herokuapp.com/";
  // Tell function to wait for data to come back
  let response = await fetch(catFactsAPI);
  // tell function to wait for this expression to have a value
  let data = await response.json()
  // printing to console just to see what we got
  console.log(data);
  return data.data[0];
}


async function getCatPic(text) {
  const catPicsAPI = "https://cataas.com";
  let catPicResponse = await fetch(`${catPicsAPI}/c/s/${text}`);
  let catPicData = await catPicResponse.blob();
  let catImageURL = await URL.createObjectURL(catPicData);
  console.log(catImageURL);
  return catImageURL;
}

async function displayCatFacts() {
  let catFact = await getCatFact()
  let catIMG = await getCatPic(catFact);

  let catFactSection = document.querySelector(".catFacts");

  let catFactElement = document.createElement("p");
  catFactElement.classList.add("catFact");
  catFactElement.innerText = catFact;

  let catPic = document.createElement("img");
  catPic.setAttribute("src", catIMG);


  catFactSection.appendChild(catPic);
  catFactSection.appendChild(catFactElement);
}

displayCatFacts();

