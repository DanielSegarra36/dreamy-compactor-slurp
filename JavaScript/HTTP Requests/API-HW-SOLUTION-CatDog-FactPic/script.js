/*
  CAT FACTS API
  https://github.com/wh-iterabb-it/meowfacts

  BONUS: add the cat text to a new picture every time
  https://cataas.com/#/
  Check API Call: /cat/says/:text
*/

/*
  DOG FACTS API
  https://dogapi.dog/docs/api-v2

  https://dog.ceo/dog-api/
  BONUS: add a picture for every fact
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

// Create an asynchronous function
{
  // fetch the Fact URL
  // fetch the Image URL
  // https://www.w3schools.com/jsref/api_fetch.asp
  
  // Select the portion of HTML to change/add onto
  // https://www.w3schools.com/jsref/met_element_queryselector.asp
  
  // Create new elements for the Fact and Image
  // https://www.w3schools.com/jsref/met_document_createelement.asp
  // Group them under one element with the class <dog|cat>Fact
  
  // Add any attributes or content
  // https://www.w3schools.com/jsref/met_element_setattribute.asp
  // https://www.w3schools.com/jsref/prop_html_style.asp
  // Append the new element to the <dog|cat>Facts portion
  // https://www.w3schools.com/jsref/met_node_appendchild.asp
}

// Call that function

/**************        CAT FACT API          **************/
// https://github.com/wh-iterabb-it/meowfacts

/*
So for the cat pic API.
If you try to convert the response to json (i.e. response.json())
like in our in-class example you will get an error.
We did not notice ahead of time that the API was
responding with raw image data.

We have practiced recieving JSON data as that is that most common.
In fact, you would likely get:
  { 
    // other data...
    image_url: 'website.com/image.png'
  }
as your json response in most situations.

In the case of the cat image api, it is returning an image in a
raw format.
In fact we can see what that looks like with this code
// let catPicData = await catPicResponse.text();
// console.log("data", catPicData)
Notice we can't access the data through json() since there is none.
The image is in a raw format and so it is being stored as a string
Viewing the text() we can see that the raw data has some sort of header information.
The first piece of text says JFIF (JPEG File Interchange Format).
Welllllll what does that mean?
A quick search will show examples using the following code
https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
Basically this function can make a URL out the "blob()" portion of a response.
The blob often contains raw data that isn't JS friendly.
So using the blob() result we can make a URL for the image
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

/*
  https://cataas.com/#/
  BONUS: add the cat text to a new picture every time
  Check API Call: /cat/says/:text
*/
