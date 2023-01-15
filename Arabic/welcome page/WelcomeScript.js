let header = document.getElementById('pocket-heading');
let image = document.querySelector('.image');
let mainLink = document.getElementById('main-link');

let welcome = document.querySelector('.Welcome');
image.addEventListener('mouseover', () => {
  header.style.transform = 'translateY(-20px)';
  header.style.visibility = 'visible';

  welcome.style.transform = 'translateY(-10px)';
  welcome.style.opacity = '1';
});
image.addEventListener('mouseout', () => {
  header.style.transform = 'translateY(20px)';
  header.style.visibility = 'hidden';

  welcome.style.transform = 'translateY(-20px)';
  welcome.style.opacity = '0';
});
document.addEventListener('DOMContentLoaded', () => {
  header.style.visibility = 'hidden';
  welcome.style.fontSize = '3rem';
  welcome.style.transform = 'translateY(-20px)';
});
