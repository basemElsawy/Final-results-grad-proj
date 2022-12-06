'use strict';

let header = document.querySelector('.header');
let logo = document.querySelector('.logo');
let navbar = document.querySelector('.navbar');
let logoImg = document.querySelector('.muscle-img');
let nextPg = document.querySelector('.Next-page');
let progress = document.getElementById('progress');
let circles = document.querySelectorAll('.circle');
let formSection = document.querySelectorAll('.form-section');

let startWrk = document.querySelector('.Start-work');
let boxHdr = document.querySelector('.box-header');
let currentActives = 1;
//----------=========== new elements =======---------
let idx = 0;
console.log(formSection);
// -------------======== Variables =======---------------
// -------------================= Event LISTENERS ===========--------------

nextPg.addEventListener('click', () => {
  currentActives++;
  idx++;
  if (currentActives > circles.length) {
    currentActives = circles.length;
  }
  if (currentActives == 4) {
    nextPg.style.display = 'none';
    startWrk.style.display = 'inline';
  }
  document.querySelector('.selected').classList.remove('selected');

  formSection[idx].classList.add('selected');
  if (idx == 2) {
    boxHdr.innerHTML = 'Final <span class="Orange-txt"> steps </span> ';
  }

  update();
});
//---------------============== update numbers function ===========-------------

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActives) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
  const actives = document.querySelectorAll('.active');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
}

// ------------============= SCROLLING FUNCTIONALITY==========-----------
document.addEventListener('DOMContentLoaded', () => {
  window.onscroll = function () {
    scrollFunction();
  };
});

let scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.boxShadow = '0px 2px 40px 2px black';
    logo.style.transform = 'scale(1)';
    navbar.style.transform = 'scale(1)';
  } else {
    navbar.style.transform = 'scale(1.2)';
    logo.style.transform = 'scale(1.2)';
    header.style.boxShadow = 'none';
  }
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    header.style.borderRadius = '0px 0px 10px 10px';
    header.style.marginRight = '10px';
    header.style.marginLeft = '10px';
  } else {
    header.style.borderRadius = '0px 0px 0px 0px';
    header.style.marginRight = '0px';
    header.style.marginLeft = '0px';
  }
};
