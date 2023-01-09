'use strict';
// ----------===========DOM VARIABLES=========-----------
const toggleButton = document.getElementById('toggle-button');

let header = document.querySelector('.header');
let logo = document.querySelector('.logo');
let navbar = document.querySelector('.navbar');
let logoImg = document.querySelector('.muscle-img');
let hiddenTxtElements = document.querySelectorAll('.hide');

let hiddenCards = document.querySelectorAll('.hidden');

let topSlide = document.querySelectorAll('.no-top-slide');
let linearBackground = document.querySelector('.linear-gradient');
let imageContainer = document.querySelectorAll('.scroll-appear');
let noOpacityText = document.querySelectorAll('.no-opacity');
// --------------============= VARIABLES ================------------
let counter = 1;
// -----------========= FUNCTIONS & EVENT LISTENERS =======--------

let bodyBuildingimg = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('img-con-onslide');
    }
  });
});
imageContainer.forEach((el) => {
  bodyBuildingimg.observe(el);
});

const bodyBuildingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear-onslide');
    }
  });
});

noOpacityText.forEach((el) => {
  bodyBuildingObserver.observe(el);
});

const scrollingInTop = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('top-slide');
    }
  });
});
topSlide.forEach((el) => {
  scrollingInTop.observe(el);
});





const observing = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('shown');
    }
  });
});

hiddenCards.forEach((el) => {
  observing.observe(el);
});


document.addEventListener('DOMContentLoaded', function (event) {
  window.onscroll = function () {
    scrollFunction();
  };
});

let scrollFunction = () => {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 100) {
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

    logo.style.transform = 'scale(1)';
    navbar.style.transform = 'scale(1)';
  } else {
    navbar.style.transform = 'scale(1.2)';
    logo.style.transform = 'scale(1.2)';

  }
  // if (
  //   document.body.scrollTop > 750 ||
  //   document.documentElement.scrollTop > 750
  // ) {
  //   header.style.borderRadius = '0px 0px 10px 10px';
  //   header.style.marginRight = '10px';
  //   header.style.marginLeft = '10px';
  // } else {
  //   header.style.borderRadius = '0px 0px 0px 0px';
  //   header.style.marginRight = '0px';
  //   header.style.marginLeft = '0px';
  // }
  if (document.documentElement.scrollTop > 4900) {
    header.style.marginRight = '0px';
    header.style.marginLeft = '0px';
    header.style.borderRadius = '0px 0px 0px 0px';
  }
  if (
    document.body.scrollTop > 500 ||
    (document.documentElement.scrollTop > 400 &&
      document.documentElement.scrollTop < 1500)
  ) {
    linearBackground.classList.add('background-animation');
  } else {
    linearBackground.classList.remove('background-animation');
  }
};

setInterval(() => {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});