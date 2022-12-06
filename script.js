'use strict';
// ----------===========DOM VARIABLES=========-----------
const toggleButton = document.getElementById('toggle-button');

let header = document.querySelector('.header');
let logo = document.querySelector('.logo');
let navbar = document.querySelector('.navbar');
let logoImg = document.querySelector('.muscle-img');
let hiddenTxtElements = document.querySelectorAll('.hide');

let hiddenCards = document.querySelectorAll('.hidden');
let slide = document.querySelectorAll('.no-slide');
let topSlide = document.querySelectorAll('.no-top-slide');
let linearBackground = document.querySelector('.linear-gradient');
let imageContainer = document.querySelectorAll('.img-container');
let noOpacityText = document.querySelectorAll('.no-opacity');
// --------------============= VARIABLES ================------------
let counter = 1;
// -----------========= FUNCTIONS & EVENT LISTENERS =======--------

let bodyBuildingimg = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('img-con-onslide');
    } else {
      entry.target.classList.remove('img-con-onslide');
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
    } else {
      entry.target.classList.remove('appear-onslide');
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
    } else {
      entry.target.classList.remove('top-slide');
    }
  });
});
topSlide.forEach((el) => {
  scrollingInTop.observe(el);
});

const observes = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-down');
    } else {
      entry.target.classList.remove('slide-down');
    }
  });
});

slide.forEach((el) => {
  observes.observe(el);
});

const observing = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('shown');
    } else {
      entry.target.classList.remove('shown');
    }
  });
});

hiddenCards.forEach((el) => {
  observing.observe(el);
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

hiddenTxtElements.forEach((el) => {
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', function (event) {
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
    document.body.scrollTop > 750 ||
    document.documentElement.scrollTop > 750
  ) {
    header.style.borderRadius = '0px 0px 10px 10px';
    header.style.marginRight = '10px';
    header.style.marginLeft = '10px';
  } else {
    header.style.borderRadius = '0px 0px 0px 0px';
    header.style.marginRight = '0px';
    header.style.marginLeft = '0px';
  }
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
