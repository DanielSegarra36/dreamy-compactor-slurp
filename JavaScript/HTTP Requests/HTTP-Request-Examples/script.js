/**************        CAT FACT API          **************/
/*
  Cat Fact:
  https://github.com/wh-iterabb-it/meowfacts
  
  BONUS: add the cat text to a new PICTURE every time
  https://cataas.com/#/
  Check API Call: /cat/says/:text
*/

async function getCatPic(text) {
  const catPicsAPI = "https://cataas.com";
  let catPicResponse = await fetch(`${catPicsAPI}/c/s/${text}`);
  let catPicData = await catPicResponse.blob();
  let catImageURL = await URL.createObjectURL(catPicData);
  console.log(catImageURL);
  return catImageURL;
}

async function getCatFact() {
  const catFactsAPI = "https://meowfacts.herokuapp.com";
  let response = await fetch(catFactsAPI);
  let data = await response.json();
  console.log(data.data);
  return data.data;
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

/**************        DOG FACT API          **************/
/*
  Dog Fact:
  https://dogapi.dog/docs/api-v2
  
  BONUS: add a PICTURE for every fact
  https://dog.ceo/dog-api/
*/

async function getDogFacts(amount) {
  const dogFactsAPI = `https://dogapi.dog/api/v2/facts?limit=${amount}`;
  let response = await fetch(dogFactsAPI);
  let data = await response.json();
  console.log("getDogFacts: " + data.data);
  return data.data;
}

async function getDogPics(amount) {
  let pics = []
  const dogPicsAPI = "https://dog.ceo/api/breeds/image/random";

  for (let count = 0; count < amount; ++count){
    let dogPicsResponse = await fetch(dogPicsAPI);
    let dogPicsData = await dogPicsResponse.json();
    console.log("getDogPic: ", dogPicsData.message);
    pics.push(dogPicsData.message);
  }

  return pics;
}

async function displayDogFacts() {
  let dogFacts = await getDogFacts(3)
  let dogImages = await getDogPics(3);


  let dogFactsContainer = document.querySelector('.dogFacts');

  dogFacts.forEach(async (item, index) => {
    let dogCard = document.createElement('div');
    let dogPic = document.createElement('img');
    let dogFact = document.createElement('p');

    dogPic.setAttribute("src", dogImages[index])
    dogPic.classList.add('dogPic');
    
    dogFact.classList.add('dogFact');
    dogFact.innerText = item.attributes.body;

    dogCard.appendChild(dogPic)
    dogCard.appendChild(dogFact)

    
    dogFactsContainer.appendChild(dogCard);
  })

}

displayDogFacts();

/**************        GHIBLI API          **************/
// https://ghibliapi.vercel.app/
const ghibliAPILink = "https://ghibliapi.vercel.app/films";

async function ghibliAPI() {
  
  let response = await fetch(ghibliAPILink);
  let data = await response.json();

  data.forEach((currMovie) => {
    let ghibliMovieStats = document.createElement("div");
    ghibliMovieStats.classList.add("ghibliMovieStats");
    let ghibliMovieTitle = document.createElement("h2");
    let ghibliMovieImage = document.createElement("img");
    let ghibliAPISection = document.querySelector(".ghibliData");
    ghibliMovieTitle.innerText = currMovie.title;
    ghibliMovieImage.setAttribute("src", currMovie.image);
    ghibliMovieStats.appendChild(ghibliMovieTitle);
    ghibliMovieStats.appendChild(ghibliMovieImage);

    ghibliAPISection.appendChild(ghibliMovieStats);
  });
}

ghibliAPI();

/**************        DISNEY API          **************/

/**************        LOREM PICSUM API          **************/
// https://picsum.photos/
async function randomPic() {
  const url = `https://picsum.photos/v2/list?page=3&limit=3`;
  console.log("heyyyy", url);
  let response = await fetch(url);
  let data = await response.json();
  console.log("heyyyy", data);

  data.forEach((item) => {
    let lpGallery = document.querySelector(".lpData");
    let lpItem = document.createElement("div");
    lpItem.classList.add("lpItem");
    let lpImg = document.createElement("img");
    lpImg.setAttribute("src", item.download_url);
    lpItem.appendChild(lpImg);
    lpGallery.appendChild(lpItem);
  });
  return data;
}
randomPic();

/**************        WEATHER API          **************/
// async function getCoordinates() {
//   const url = "https://geocode.xyz/?locate=979+Metropolitan+Ave+Brooklyn&json=1"
//   let response = await fetch(url);
//   let data = await response.json();
//   console.log("heyyyy",data)
//   return data;
// }
// getCoordinates();

/******************************************************************/

/***********      Art Institute of Chicago API      **********/
// https://api.artic.edu/docs/
async function articAPISearchQuery() {
  const articAPI = "https://api.artic.edu/api/v1/";
  let loading = document.querySelector('.loading')
  loading.style.display = 'block'
  let keyword = document.querySelector("#keyword").value;
  let amount = document.querySelector("#amount").value;
  let response = await fetch(
    articAPI + `artworks/search?q=${keyword}&limit=${amount}`
  );
  let data = await response.json();

  let artworkLinks = data.data.map((artPiece) => {
    return artPiece.api_link;
  });

  let imageIDs = await Promise.all(
    artworkLinks.map(async (link) => {
      return artLookup(link);
    })
  );

  imageIDs.forEach((imageID, index) => {
    const imageURL = "https://www.artic.edu/iiif/2";
    let imageSection = document.querySelector(`.column${(index % 3) + 1}`);
    let item = document.createElement("div");
    item.classList.add("image-item");
    let image = document.createElement("img");
    image.setAttribute("src", `${imageURL}/${imageID}/full/843,/0/default.jpg`);
    item.appendChild(image);
    imageSection.appendChild(item);
  });
  loading.style.display = 'none'
}

async function artLookup(apiLink) {
  let response = await fetch(apiLink);
  let data = await response.json();
  return data.data.image_id;
}

// articAPISearchQuery("food", 9);
/******************************************************************/