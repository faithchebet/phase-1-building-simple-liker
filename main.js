// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', function () {
  const likeButtons = document.querySelectorAll('.like');
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');

  likeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      mimicServerCall()
        .then(function () {
          
          button.classList.add('liked');
          button.querySelector('.like-glyph').innerHTML = '&#x2665;';
        })
        .catch(function (error) {
          
          modalMessage.textContent = 'Error: ' + error;
          modal.classList.remove('hidden');

        
          setTimeout(function () {
            modal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});










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
