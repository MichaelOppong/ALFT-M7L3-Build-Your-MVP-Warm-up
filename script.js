// CHALLENGE ONE
let nameButton = document.querySelector('.nameButton');
let nameInput = document.querySelector('.name');
let myNameElement = document.querySelector('.myName');

nameButton.addEventListener('click', function() {
  let name = nameInput.value;
  myNameElement.textContent = "name";
});

// CHALLENGE TWO

// CHALLENGE THREE
let colorButton = document.querySelector('.colorButton');
let colorInput = document.querySelector('.color');
let previewElement = document.querySelector('.preview');

colorButton.addEventListener('click', function() {
  let color = colorInput.value;
  previewElement.style.backgroundColor = "pink";
});

// CHALLENGE FOUR
let giraffeButton = document.querySelector('.giraffe');
let myAvatarElement = document.querySelector('.myAvatar');

giraffeButton.addEventListener('click', function() {
  myAvatarElement.src = 'https://megknoll.github.io/images/giraffe.png';
});