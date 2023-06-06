
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
      //============================//
      const bazaSlowKluczy = ["mojito", "bloody mary", "lime", "pegu", "pisco sour", "jack rose","french connection","gimlet","suffering bastard"];
      let submittedText = drinkValue;
      var foundKey = null;
      var position = -1;
      bazaSlowKluczy.every(klucz => {

        position = submittedText.toLowerCase().search(klucz);
        if (position > -1) {
          foundKey = klucz;
          return false;
        }
        return true;
      });

      if (foundKey != null) {

        //============================//

        url += 'name=';
        url += foundKey.replaceAll(" ", "+");
        fetch(url, {
          headers: { 'X-Api-Key': 'dylqlrAmExXhS4jTQtsN2Q==COHD5G63uo1sEWcW' }
        })
          .then(response => response.json())
          .then(response => {
            console.log(response)
            if (response.length === 0) {
              botMess.textContent = `Sorry! I don't know how to make ${foundKey}. :(`;
              botMessContainer.appendChild(botMess);
              chatbotMessages.appendChild(botMessContainer);
            }
            else {
              botMess.textContent = `Ingredients for ${foundKey} are as follows: \r\n`;
              const recipeIngredients = response[0]['ingredients'];
              const ingredientList = document.createElement('ul');
              recipeIngredients.forEach(el => {
                botMess.textContent += `${el} \r\n`;
              })
              const recipeInstructions = response[0]['instructions'];
              botMess.textContent += "\r\n";
              botMess.textContent += `Recipe for ${foundKey} is as follows: ${recipeInstructions}`
              botMessContainer.appendChild(botMess);
              chatbotMessages.appendChild(botMessContainer);
            }
          })
      }
      else {
        botMess.textContent = `Sorry! I don't understand the request. :(`;
        botMessContainer.appendChild(botMess);
        chatbotMessages.appendChild(botMessContainer);
      }
    }


    if (event.submitter.id == 'ingredientsend') {
      //=============//
      const bazaSlowKluczy = ["lime", "mint", "sugar"];
      let submittedText = drinkValue;
      var foundKey = null;
      var position = -1;
      bazaSlowKluczy.every(klucz => {

        position = submittedText.toLowerCase().search(klucz);
        if (position > -1) {
          foundKey = klucz;
          return false;
        }
        return true;
      });

      if (foundKey != null) {

        //================//
        url += 'ingredients=';
        url += foundKey.replaceAll(" ", "+");
        console.log(url);
        fetch(url, {
          headers: { 'X-Api-Key': 'dylqlrAmExXhS4jTQtsN2Q==COHD5G63uo1sEWcW' }
        })
          .then(response => response.json())
          .then(response => {
            console.log(response)
            if (response.length === 0) {
              botMess.textContent = `Sorry! I didn't find any drink with ${foundKey}. :(`;
              botMessContainer.appendChild(botMess);
              chatbotMessages.appendChild(botMessContainer);
            }
            else {
              botMess.textContent = `Drinks with ${foundKey} are as follows: \r\n`;
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

      else {
        botMess.textContent = `Sorry! I don't understand the request. :(`;
        botMessContainer.appendChild(botMess);
        chatbotMessages.appendChild(botMessContainer);
      }
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


