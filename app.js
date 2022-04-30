const errorMsg = document.querySelector('#error-msg');
const submitBtn = document.querySelector('#submitBtn');
const errorPic = document.querySelector('#error-picture');
const formInput = document.querySelector('#email-enter');
const centerPic = document.querySelector('#center-image');

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  let isValid = formInput.checkValidity() & formInput.value !== ""
  errorMsg.textContent = (isValid) ? "" : "Please provide a valid email";
  errorPic.style.visibility = (isValid) ? 'hidden' : 'visible';
  formInput.style.borderColor = (isValid) ? 'rgba(206, 151, 151, 0.6)' : 'hsl(0, 93%, 68%)';
  formInput.value = "";
})

document.addEventListener('invalid', (function() {
  return function(e) {
    e.preventDefault();
  };
})(), true);

function changePic(screenWidth) {
  if (screenWidth.matches) { // If media query matches
    centerPic.src = 'images/hero-desktop.jpg';
    document.body.style.background = 'url(./images/bg-pattern-desktop.svg)';
  } else {
    centerPic.src = 'images/hero-mobile.jpg';
    document.body.style.background = "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%)) no-repeat";
  }
}

const screenWidth = window.matchMedia("(min-width: 1000px)");
changePic(screenWidth);
screenWidth.addListener(changePic) // Attach listener function on state changes
