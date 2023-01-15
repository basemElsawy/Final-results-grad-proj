'use strict';

let firstName = document.getElementById('Firstname');
let lastName = document.getElementById('Lastname');
let age = document.getElementById('Age');
let height = document.getElementById('Height');
let weight = document.getElementById('Weight');
let submitBtn = document.querySelector('.submit');
let resultsDiv = document.getElementById('results');
let gender = document.getElementById('Gender');
let resultsContainer = document.querySelector('.results-container');
let refreshBtn = document.querySelector('.refresh');
let header = document.querySelector('.header');
let logo = document.querySelector('.logo');
let navbar = document.querySelector('.navbar');
let logoImg = document.querySelector('.muscle-img');

//----------=========== new elements =======----------

// -------------======== Variables =======---------------

height.value = Number(height.value);

weight.value = Number(weight.value);

age.value = Number(age.value);

// -------------================= Event LISTENERS ===========--------------
submitBtn.addEventListener('click', function () {
  let bmi;
  let bmr;
  let results = ``;
  if (gender.value === 'male') {
    bmi = weight.value / height.value ** 2;

    bmi = parseFloat(Number(bmi)).toFixed(1);
    let weightCalc = weight.value * 10;
    let heightCalc = height.value * 6.25;
    heightCalc = heightCalc * 100;
    let ageCalc = age.value * 5;

    bmr = Number(weightCalc) + Number(heightCalc) - Number(ageCalc) + 5;
    bmr = parseFloat(Number(bmr)).toFixed(1);
    console.log(bmr);
    if (bmi <= 18.5) {
      results = `Hello ${firstName.value} ${lastName.value} Your body mass index is ${bmi} and you're slightly underweight also your basal metabolic rate is ${bmr} keep that in mind cause it'll help alot with the diet plan soon on our website.`;
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
      results = `Hello ${firstName.value} ${lastName.value} Your body mass index is ${bmi} and your weight is normal also your basal metabolic rate is ${bmr} keep that in mind cause it'll help alot with the diet plan soon on our website.`;
    }
    if (bmi >= 25 && bmi <= 29.9) {
      results = `Hello ${firstName.value} ${lastName.value}  Your body mass index is ${bmi} and you're slightly overweight also your basal metabolic rate is ${bmr} keep that in mind cause it'll help alot with the diet plan soon on our website.`;
    }
    if (bmi >= 30) {
      results = `Hello ${firstName.value} ${lastName.value}  Your body mass index is ${bmi} and you're suffering obesity also your basal metabolic rate is ${bmr} keep that in mind cause it'll help alot with the diet plan soon on our website.`;
    }

    document.getElementById('results').append(results);
    document.getElementById('results-container').classList.remove('hidden');
    document.querySelector('.Next-page').classList.remove('hidden');
    document.querySelector('.submit').classList.add('hidden');
    refreshBtn.classList.remove('hidden');
  } else if (gender.value === 'female') {
    bmi = weight.value / height.value ** 2;
    bmi = parseFloat(Number(bmi)).toFixed(1);
    let weightCalc = weight.value * 10;
    let heightCalc = height.value * 6.25;
    heightCalc = heightCalc * 100;
    let ageCalc = age.value * 5;

    bmr = Number(weightCalc) + Number(heightCalc) - Number(ageCalc) - 161;
    bmr = parseFloat(Number(bmr)).toFixed(1);
    if (bmi <= 18.5) {
      results = `Hello ${firstName.value} ${lastName.value} Your body mass index is ${bmi} and you're slightly underweight also your basal metabolic rate is ${bmr} keep that in mind cause it'll help alot with the diet plan soon on our website.`;
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
      results = `Hello ${firstName.value} ${lastName.value} Your body mass index is ${bmi} and your weight is normal also your basal metabolic rate is ${bmr} keep that in mind cause it'll help alot with the diet plan soon on our website.`;
    }
    if (bmi >= 25 && bmi <= 29.9) {
      results = `Hello ${firstName.value} ${lastName.value}  Your body mass index is ${bmi} and you're slightly overweight also your basal metabolic rate is ${bmr} keep that in mind cause it'll help alot with the diet plan soon on our website.`;
    }
    if (bmi >= 30) {
      results = `Hello ${firstName.value} ${lastName.value}  Your body mass index is ${bmi} and you're suffering obesity also your basal metabolic rate is ${bmr} keep that in mind cause it'll help alot with the diet plan soon on our website.`;
    }
    document.getElementById('results').append(results);
    document.getElementById('results-container').classList.remove('hidden');
    document.querySelector('.Next-page').classList.remove('hidden');
    document.querySelector('.submit').classList.add('hidden');
    refreshBtn.classList.remove('hidden');
  }
});

refreshBtn.addEventListener('click', () => {
  location.reload();
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
