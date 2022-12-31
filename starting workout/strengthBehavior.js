const addToFavs = document.querySelectorAll('.add-schedule');
const exerciseContainer = document.querySelectorAll('.exercise-details');
const exerciseInformation = document.querySelectorAll('.exercise-inform');
const accessorieLifts = document.getElementById('accessorie-lifts');
const mainLifts = document.getElementById('main-lifts');
const mainLftContainer = document.querySelectorAll('.main-lift-container');
const addMainToFavs = document.querySelectorAll('.add-schedule-main');

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
