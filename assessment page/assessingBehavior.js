'use strict';


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
let passwordInput = document.getElementById('Password');
let passwordConfirmInput = document.getElementById('Password-confirm');


//----------=========== new elements =======----------
const sections = document.querySelectorAll('.sect-behavior');
const sectionsContainer = document.querySelector('.sections-container');
const footerSection = document.querySelector('.footer-section');
const startBtn = document.querySelector('.start');
const frstFormSect = document.querySelector('.third-section');
const secondSection = document.getElementById('second-section');
const navigationBar = document.querySelector('.side-bar');
let skipBtn = document.querySelectorAll('.small-btn');
const goBackBtn = document.querySelectorAll('.goback-btn');
const navBarBtns = document.querySelectorAll('.page-links');
const nextBtn = document.querySelectorAll('.next-btn');
const fourthSect = document.querySelector('.fourth-sect');
const sectContainers = document.querySelectorAll('.first-container');
let firstName = document.getElementById('First-name');
let lastName = document.getElementById('Last-name');
let middleName = document.getElementById('Middle-name');
let emailInput = document.getElementById('Email');
let imgInput = document.getElementById('img-input');
let imageInside = document.getElementById('imageInside');

let newBtn = document.createElement('a');

newBtn.classList.add('start');
newBtn.classList.add('btn-style');
newBtn.textContent = 'Submit';
newBtn.style.fontSize = '1rem';
fourthSect.append(newBtn);

let errorText = document.createElement('span');
errorText.textContent = 'This field is mandatory';
errorText.style.fontFamily = 'Poppins,sans serif'
errorText.style.fontWeight = 'bolder'



// -------------======== Variables =======---------------

// -----------============== Forms initiation ========-------------

imgInput.addEventListener('change', (e) => {
  let uploadedImage = '';
  const imageIndex = imgInput.files[0];
  const reader = new FileReader();
  imageInside.removeAttribute('src');
  reader.addEventListener('load', () => {
    uploadedImage = reader.result;
    imageInside.setAttribute('src', uploadedImage);
  });

  reader.readAsDataURL(imageIndex);
});








newBtn.addEventListener('click', () => {
  if (passwordConfirmInput.value && passwordInput.value) {
    newBtn.setAttribute('href', '/starting workout/WorkoutPage.html');
  }
  else {

    fourthSect.append(errorText);
  }
})


goBackBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    sections[idx].style.transform = 'translateX(-500px)';
    sections[idx].style.opacity = '0';
    let activeBtn = document.querySelector('.clicked');

    activeBtn.classList.remove('clicked');
    navBarBtns[idx].previousElementSibling.classList.add('clicked');
    setTimeout(() => {
      sections[idx].classList.remove('active');
      sections[idx].previousElementSibling.classList.add('active');
      sections[idx].previousElementSibling.style.transform = 'translateX(0px)';
      sections[idx].previousElementSibling.style.opacity = '1';


    }
      , 200)
  })
})




nextBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    if (firstName.value && lastName.value && middleName.value && emailInput.value) {
      sections[idx].style.transform = 'translateX(-500px)';
      sections[idx].style.opacity = '0';
      let activeBtn = document.querySelector('.clicked');

      activeBtn.classList.remove('clicked');
      navBarBtns[idx + 1].classList.add('clicked');


      setTimeout(() => {
        sections[idx].classList.remove('active');
        sections[idx].nextElementSibling.classList.add('active');
        sections[idx].nextElementSibling.style.transform = 'translateX(0px)';
        sections[idx].nextElementSibling.style.opacity = '1';

        for (let i in nextBtn) {
          if (nextBtn[i].parentElement.classList.contains('fourth')) {

            nextBtn[i].style.display = 'none';
          }
        }
      }, 200)
    } else {
      sectContainers[idx].append(errorText)

    }

  }
  )

})



for (let i = 0; i < skipBtn.length; i++) {
  if (skipBtn[i].parentElement.classList.contains('first')) {
    skipBtn[i].style.display = 'none';
    goBackBtn[i].style.display = 'none';


  }
  if (skipBtn[i].parentElement.classList.contains('fourth')) {
    skipBtn[i].style.display = 'none';
  }


}
// navBarBtns.forEach((btn, idx) => {
//   btn.addEventListener('click', () => {
//     if (firstName.value && lastName.value && middleName.value && emailInput.value) {

//       let activeBtn = document.querySelector('.clicked');
//       activeBtn.classList.remove('clicked');
//       navBarBtns[idx].classList.add('clicked');
//       // sections[idx].classList.add('active');
//       if (sections[idx].classList.contains('section-four')) {
//         nextBtn[idx].style.display = 'none';
//       }

//       document.querySelector('.active').style.transform = 'translateX(-500px)';
//       document.querySelector('.active').style.opacity = '0'
//       setTimeout(() => {
//         document.querySelector('.active').classList.remove('active');
//         sections[idx].classList.add('active');
//         setTimeout(() => {
//           sections[idx].style.opacity = '1';
//           sections[idx].style.transform = 'translateX(0px)'

//         }, 100)

//       }, 500)
//     } else {


//     }


//   })
// })





startBtn.addEventListener('click', () => {
  frstFormSect.classList.add('active');
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
