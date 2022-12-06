'use strict';
// -------------------================= HEADER VARIABLES ==================------------------
let header = document.querySelector('.header');
let logo = document.querySelector('.logo');
let navbar = document.querySelector('.navbar');
let logoImg = document.querySelector('.muscle-img');
let guideBtns = document.querySelectorAll('.guide-btn');
let sections = document.querySelectorAll('.section');
//--------========== collapse container variables======-----------
let moreInfo = document.querySelectorAll('.more-info');
let collapseMenu = document.querySelectorAll('.collapse-container');
let insideCollapse = document.querySelectorAll('.inside-collapse');
let closeArrow = document.querySelectorAll('.close-btn');
let lrnMore = document.querySelectorAll('.learn-more');
let closeLrnMore = document.querySelectorAll('.close-categorie');
let collapseCategorie = document.querySelectorAll('.categorie-collapse');
let collapseInsideCat = document.querySelectorAll('.categorie-inside');
// --------------------===================== EXERCISES PANEL VARIABLES ================--------------------
let moreExercsiesBtn = document.querySelectorAll('.more-exercises');
let closePanel = document.querySelectorAll('.turn-off');
let musclesPanel = document.querySelectorAll('.muscles');
let musclesContainer = document.querySelectorAll('.muscles-containing');
let mustDoExercises = document.querySelectorAll('.must-do');
let images = document.querySelectorAll('.image-select');
// ---------------======================= ADD TO TABLE VARIABLES ==========------------
let addWrkoutScheduleBtn = document.querySelectorAll('.add-schedule');
let addMainLftBtn = document.querySelectorAll('.add-schedule-main');
let chosenExerciseTitle = document.querySelectorAll('.chosen-exercise');
let chosenMainLftTitle = document.querySelectorAll('.chosen-main-exercise');
// -----------------============= WORKOUT TABLE VARIABLES
let tableContainer = document.querySelectorAll('.table-container');
let chooseScheduleBtn = document.querySelectorAll('.choose-schedule-btn');
let workoutSchedule = document.querySelector('.workout-schedule');
let organizeWeekBtn = document.querySelector('.organize-week-btn');
let scheduleChoice = document.querySelector('.schedule-choice');
let welcomeContainer = document.querySelector('.welcome-container');
let chooseAgainBtn = document.querySelector('.choose-again');
let notChosenTable = document.querySelectorAll('.not-chosen');
let chosenTable = document.querySelector('.chosen');
let tbodyEl = document.querySelectorAll('tbody');
const currentLocation = Array.location;

// -----------========= FUNCTIONS & EVENT LISTENERS =======--------

guideBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    let activeSection = document.querySelector('.active');
    activeSection.classList.remove('active');
    sections[idx].classList.add('active');

    let activeBtn = document.querySelector('.clicked');
    activeBtn.classList.remove('clicked');
    guideBtns[idx].classList.add('clicked');
  });
});
// ----------------============= WORKOUTS FUNCTIONALITY ================-------------------

//--------------=========== WORKOUT PAGE FUNCTIONALITY ====----------------

//-------------------========== SCROLLING FUNCTIONALITY ===========-----------

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
};
