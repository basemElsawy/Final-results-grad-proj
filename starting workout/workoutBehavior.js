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
let collapseContainer = document.querySelectorAll('.collapse-container');
let closeBtn = document.querySelectorAll('.close-btn');
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
const addToFavs = document.querySelectorAll('.add-schedule');
const exerciseContainer = document.querySelectorAll('.exercise-details');
const exerciseInformation = document.querySelectorAll('.exercise-inform');
const accessorieLifts = document.getElementById('accessorie-lifts');
const mainLifts = document.getElementById('main-lifts');
const mainLftContainer = document.querySelectorAll('.main-lift-container');
const addMainToFavs = document.querySelectorAll('.add-schedule-main');


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
let tableContainerAll = document.querySelector('.table-container-all');
// ---------------------------================= local variables ===============-----------------

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

// ------------------================= TABLE FUNCTUONALITY ====================---------------

// ----------------================== MUSCLE PANEL FUNCTIONALITY ================--------------------------
moreExercsiesBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    mustDoExercises[idx].classList.remove('not-selected');
    mustDoExercises[idx].classList.add('selected');
    mustDoExercises[idx].style.gridColumn = '1/10';
    mustDoExercises[idx].style.width = '100%';
    musclesContainer[idx].style.width = '100%'
    musclesContainer[idx].style.gridColumn = '1/10'
    // musclesContainer[idx].style.marginBottom = '1200px';
    musclesPanel[idx].style.height = 'auto';
    musclesPanel[idx].style.visibitliy = 'visible';
    musclesPanel[idx].style.transform = 'translateY(0px)';
    musclesPanel[idx].style.margin = 'auto';
    musclesContainer[idx].style.height = 'auto';


    setTimeout(() => {

      musclesContainer[idx].style.display = 'block';

      musclesPanel[idx].style.display = 'block';
    }, 200);

    let notSelected = document.querySelectorAll('.not-selected');

    for (let i in notSelected) {
      notSelected[i].style.display = 'none';
    }
  });
});

closePanel.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    musclesPanel[idx].style.height = '0px';
    musclesContainer[idx].style.height = '0px';
    musclesContainer[idx].style.transform = 'translateY(-50px)';
    musclesPanel[idx].style.visibitly = 'hidden';


    mustDoExercises[idx].style.gridColumn = 'auto';
    mustDoExercises[idx].style.width = '100%';

    musclesPanel[idx].style.display = 'none';
    musclesContainer[idx].style.display = 'none';
    setTimeout(() => {
    }, 1000);


    document.querySelector('.selected').classList.add('not-selected');
    document.querySelector('.selected').classList.remove('selected');

    let notSelected = document.querySelectorAll('.not-selected');

    for (let i in notSelected) {
      notSelected[i].style.display = 'inline';
    }
  });
});

// --------------==================== COLLAPSE MENU FOR EACH MOVEMENT ============----------------

lrnMore.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    collapseCategorie[idx].style.transform = 'translateY(0px)';
    collapseInsideCat[idx].style.display = 'block';
  });
});
closeLrnMore.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    collapseCategorie[idx].style.transform = 'translateY(-100px)';
    collapseInsideCat[idx].style.display = 'none';
  });
});



//--------------=========== WORKOUT PAGE FUNCTIONALITY ====----------------

//-------------------========== SCROLLING FUNCTIONALITY ===========-----------

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


// -----------===================commented block of code =================------------
// function storingTable(idx) {
//   if (tableContainer[idx].classList.contains('chosen') === true) {
//     document.querySelector('.chosen');
//     localStorage.setItem(
//       'chosenTable',
//       JSON.stringify(document.querySelector('.chosen').innerHTML)
//     );
//   }
// }
// let table = JSON.parse(localStorage.getItem('chosenTable'));

// tableContainerAll.insertAdjacentHTML('afterbegin', table);

addToFavs.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    let containerClone = exerciseContainer[idx].cloneNode(true);
    accessorieLifts.append(containerClone);
    let cloneAddToFav = containerClone.querySelector('.add-schedule');
    cloneAddToFav.style.display = 'none';
    containerClone.style.transform = 'scale(0.9)';
    containerClone.style.width = '600px';
    containerClone.style.height = 'auto';
    containerClone.style.justifyContent = 'space-between';
    let removeFavBtn = document.createElement('button');
    removeFavBtn.innerText = 'Remove Exercise';

    removeFavBtn.classList.add('Remove-Exercise');
    removeFavBtn.addEventListener('click', () => {
      removeFavBtn.parentElement.remove();
    });
    removeFavBtn.style.position = 'absolute';

    removeFavBtn.style.bottom = '-15px';
    removeFavBtn.style.left = '10%';
    containerClone.append(removeFavBtn);
  });
});

addMainToFavs.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    let containerClone = mainLftContainer[idx].cloneNode(true);
    mainLifts.append(containerClone);
    let cloneAddToFav = containerClone.querySelector('.add-schedule-main');
    cloneAddToFav.style.display = 'none';
    containerClone.style.transform = 'scale(0.8)';
    containerClone.style.display = 'flex';
    containerClone.style.flexDirection = 'column';
    containerClone.style.gap = '10px';
    let removeFavBtn = document.createElement('button');
    removeFavBtn.innerText = 'Remove Exercise';

    removeFavBtn.classList.add('Remove-Exercise');
    removeFavBtn.addEventListener('click', () => {
      removeFavBtn.parentElement.remove();
    });
    containerClone.style.width = '600px';
    containerClone.style.height = 'auto';
    containerClone.style.justifyContent = 'space-between';
    removeFavBtn.style.position = 'absolute';

    removeFavBtn.style.bottom = '-40px';
    removeFavBtn.style.left = '10%';
    containerClone.append(removeFavBtn);
  });
});

// tableContainerAll.insertAdjacentHTML('afterbegin', table);

moreInfo.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    collapseContainer[idx].style.display = 'flex';
    setTimeout(() => {
      collapseContainer[idx].style.transform = 'translateY(0px)';
      setTimeout(() => {
        collapseContainer[idx].style.height = '800px';
        collapseContainer[idx].style.opacity = '1';
      }, 200)
    }, 300)
  })

})

closeBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    collapseContainer[idx].style.opacity = '0';
    setTimeout(() => {
      collapseContainer[idx].style.height = '0px';
      collapseContainer[idx].style.transform = 'translateY(-100px)'
      setTimeout(() => {
        collapseContainer[idx].style.display = 'none';
      }, 500)
    }, 200)
  })
})