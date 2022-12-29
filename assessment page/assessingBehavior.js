'use strict';

let firstName = document.getElementById('Firstname');
let lastName = document.getElementById('Lastname');
let age = document.getElementById('Age');
let height = document.getElementById('Height');
let weight = document.getElementById('Weight');
let submitBtn = document.querySelector('.btn-submit');
let resultsDiv = document.getElementById('results');
let gender = document.getElementById('Gender');
let resultsContainer = document.querySelector('.results-container');
let refreshBtn = document.querySelector('.refresh');
let header = document.querySelector('.header');
let logo = document.querySelector('.logo');
let navbar = document.querySelector('.navbar');
let logoImg = document.querySelector('.muscle-img');

//----------=========== new elements =======----------
const sections = document.querySelectorAll('.sect-behavior');
const sectionsContainer = document.querySelector('.sections-container');
const footerSection = document.querySelector('.footer-section');
const startBtn = document.querySelector('.start');
const frstFormSect = document.querySelector('.third-section');
const secondSection = document.getElementById('second-section');
const navigationBar = document.querySelector('.side-bar');



// -------------======== Variables =======---------------

// -----------============== Forms initiation ========-------------


startBtn.addEventListener('click', () => {
  frstFormSect.style.display = 'block';
  footerSection.classList.remove('hidden');

  secondSection.style.opacity = '1';
  navigationBar.style.opacity = '1';
  startBtn.style.display = 'none';

  navigationBar.style.display = 'block';
  setTimeout(() => {
    frstFormSect.style.transform = 'translateY(0px)'
    frstFormSect.style.height = '100%';
    frstFormSect.style.opacity = '1';
    frstFormSect.style.zIndex = '1';
  }, 500)
})












// -------------================= Event LISTENERS ===========--------------


document.addEventListener('DOMContentLoaded', function (event) {
  window.onscroll = function () {
    scrollFunction();
  };
});

let scrollFunction = () => {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 350) {
    document.querySelector('.muscle-img').style.opacity = '1';
    header.style.backgroundColor = '#223341'
    header.style.boxShadow = '0px 2px 40px 2px black';

  }
  else {
    document.querySelector('.muscle-img').style.opacity = '0';
    header.style.backgroundColor = 'transparent'
    header.style.boxShadow = 'none';

  }
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // header.style.boxShadow = '0px 2px 40px 2px black';
    logo.style.transform = 'scale(1)';
    navbar.style.transform = 'scale(1)';
  } else {
    navbar.style.transform = 'scale(1.2)';
    logo.style.transform = 'scale(1.2)';
    // header.style.boxShadow = 'none';
  }
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    // header.style.borderRadius = '0px 0px 10px 10px';
    // header.style.marginRight = '10px';
    // header.style.marginLeft = '10px';
  } else {
    header.style.borderRadius = '0px 0px 0px 0px';
    header.style.marginRight = '0px';
    header.style.marginLeft = '0px';
  }
};
