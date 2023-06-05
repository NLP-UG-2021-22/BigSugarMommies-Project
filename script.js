const urlBase = 'https://api.api-ninjas.com/v1/cocktail?'

const drinkform = document.getElementById('drinkform')

drinkform.onsubmit = function (event) {
  event.preventDefault();
  console.log(event);
  const drinkValue = drinkinput.value;
  if (drinkValue != null && drinkValue.replace(/\s/g, '').length) {



    let message = document.createElement('div');
    message.classList.add('messageContainer');
    message.classList.add('userMessage');

    let userMess = document.createElement('div');
    userMess.classList.add('userMessChat');
    userMess.innerText = drinkinput.value;
    message.appendChild(userMess);

    chatbotMessages.appendChild(message);

    let botMessContainer = document.createElement('div');
    botMessContainer.classList.add('messageContainer');
    botMessContainer.classList.add('botMessage');

    let botMess = document.createElement('div');
    botMess.classList.add('botMessChat');

    document.getElementById("drinkinput").value = "";
    let url = urlBase;

    if (event.submitter.id == 'drinksend') {
      url += 'name=';
      url += drinkValue.replaceAll(" ", "+");
      fetch(url, {
        headers: { 'X-Api-Key': 'dylqlrAmExXhS4jTQtsN2Q==COHD5G63uo1sEWcW' }
      })
        .then(response => response.json())
        .then(response => {
          console.log(response)
          if (response.length === 0) {
            botMess.textContent = `Sorry! I don't know how to make ${drinkValue}. :(`;
            botMessContainer.appendChild(botMess);
            chatbotMessages.appendChild(botMessContainer);
          }
          else {
            botMess.textContent = `Ingredients for ${drinkValue} are as follows: \r\n`;
            const recipeIngredients = response[0]['ingredients'];
            const ingredientList = document.createElement('ul');
            recipeIngredients.forEach(el => {
              botMess.textContent += `${el} \r\n`;
            })
            const recipeInstructions = response[0]['instructions'];
            botMess.textContent += "\r\n";
            botMess.textContent += `Recipe for ${drinkValue} is as follows: ${recipeInstructions}`
            botMessContainer.appendChild(botMess);
            chatbotMessages.appendChild(botMessContainer);
          }
        })
    }

    if (event.submitter.id == 'ingredientsend') {
      url += 'ingredients=';
      url += drinkValue.replaceAll(" ", "+");
      console.log(url);
      fetch(url, {
        headers: { 'X-Api-Key': 'dylqlrAmExXhS4jTQtsN2Q==COHD5G63uo1sEWcW' }
      })
        .then(response => response.json())
        .then(response => {
          console.log(response)
          if (response.length === 0) {
            botMess.textContent = `Sorry! I didn't find any drink with ${drinkValue}. :(`;
            botMessContainer.appendChild(botMess);
            chatbotMessages.appendChild(botMessContainer);
          }
          else {
            botMess.textContent = `Drinks with ${drinkValue} are as follows: \r\n`;
            let drinkNames = [];
            response.forEach(function (element, index, array) {
              if (index == array.length - 1) {
                botMess.textContent += `${element['name']}. `;
              }
              else {
                botMess.textContent += `${element['name']}, `;
              }
            })
            botMessContainer.appendChild(botMess);
            chatbotMessages.appendChild(botMessContainer);

          }
        })
    }
  }
}






let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

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