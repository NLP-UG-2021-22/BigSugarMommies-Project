const drinkform = document.getElementById('drinkform')

drinkform.onsubmit = function(event) {
    event.preventDefault();
    let userMess = document.createElement('p');
    userMess.innerText = drinkinput.value;
    userMessage.appendChild(userMess);
    document.getElementById("drinkinput").value = "";
}


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