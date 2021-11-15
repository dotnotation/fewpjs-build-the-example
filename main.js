// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const heartButton = document.querySelectorAll(".like-glyph");
const errorMessage = document.getElementById("modal");

// Your JavaScript code goes here!
for (const heart of heartButton) {
  heart.addEventListener("click", fillHeart);
}

function fillHeart(e){
  e.preventDefault();
  const hearts = e.target;
  console.log(e.target);

  mimicServerCall("url")
    .then((response) => {
      errorMessage.innerText = response;
      errorMessage.classList.remove("hidden");
      setTimeout(() => {errorMessage.classList.add("hidden")}, 3000);
      if (e.target.innerText == EMPTY_HEART) {
        e.target.innerText = FULL_HEART;
        e.target.classList.add("activated-heart");
      } else {
        e.target.innerText == EMPTY_HEART;
        e.target.classList.remove("activated-heart");
      }
    })
    .catch((error) => {
      errorMessage.innerText = error;
      errorMessage.classList.remove("hidden");
      setTimeout(() => {errorMessage.classList.add("hidden")}, 3000);
    })
}
 


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
// returns either a success of fail response at random
// mocks a backend server