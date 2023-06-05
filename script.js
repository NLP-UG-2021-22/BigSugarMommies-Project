const urlBase = 'https://api.api-ninjas.com/v1/cocktail?name='

const drinkform = document.getElementById('drinkform')

drinkform.onsubmit = function(event) {
  event.preventDefault();
  const drinkValue = drinkinput.value;
  let userMess = document.createElement('p');
  userMess.innerText = drinkinput.value;
  userMessage.appendChild(userMess);
  document.getElementById("drinkinput").value = "";
  let url = urlBase;
  url += drinkValue.replaceAll(" ", "+");
  fetch (url, {
    headers: {'X-Api-Key': 'dylqlrAmExXhS4jTQtsN2Q==COHD5G63uo1sEWcW'}})
  .then(response => response.json())
  .then(response => {
    console.log(response)
    if (response.length === 0) {
      const noDrink = document.createElement('p');
      noDrink.innerText = `Sorry! I don't know how to make ${drinkValue}. :(`;
      recipeMessage.appendChild(noDrink);
      }
  else {
    const newListHeader = document.createElement('p');
    newListHeader.innerText = `Ingredients for ${drinkValue} are as follows:`
    recipeMessage.appendChild(newListHeader);
    const recipeIngredients = response[0]['ingredients'];
    const ingredientList = document.createElement('ul');
    recipeIngredients.forEach(el=> {
      let newList = document.createElement('li');
      newList.innerText = el;
      ingredientList.appendChild(newList);
    })
    const recipePara = document.createElement('p');
    recipeMessage.appendChild(ingredientList)
    const recipeInstructions = response[0]['instructions'];
    // const recipePara = document.createElement('p');
    recipePara.innerText = `Recipe for ${drinkValue} is as follows: ${recipeInstructions}`
    recipeMessage.appendChild(recipePara);
  }})}


let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}