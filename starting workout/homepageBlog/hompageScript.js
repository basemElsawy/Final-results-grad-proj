'use strict';
// header variables
let header = document.querySelector('.header');
let logo = document.querySelector('.logo');
let navbar = document.querySelector('.navbar');
let logoImg = document.querySelector('.muscle-img');
let guideBtns = document.querySelectorAll('.guide-btn');
let sections = document.querySelectorAll('.section');
// main variables
let friendsOpenBtn = document.querySelector('.friends-open');
let subsectionOne = document.querySelector('.subsection-one');
let plusSign = document.querySelector('.plus');
let firstSection = document.querySelector('.first-section');
let footerSection = document.querySelector('.footer-section');
let secondSection = document.querySelector('.second-section');
// posting variables
let fileUploading = document.getElementById('uploading');
let textInputArea = document.getElementById('main-text');
let postBtn = document.querySelector('.posting-btn');
let errMsg = document.createElement('span');
let secondSect = document.querySelector('.second-section');



errMsg.classList.add('errMsg');




// postBtn.addEventListener('click', () => {
//     if (textInputArea.value || fileUploading.files[0] == true) {


//         errMsg.remove();
//     }
//     else {
//         errMsg.textContent = 'write something to post';
//         secondSect.append(errMsg);
//     }
// })








window.addEventListener('scroll', () => {
    firstSection.style.backgroundSize = 160 - + window.pageYOffset / 20 + '%';
    firstSection.style.opacity = 1 - + window.pageYOffset / 700 + '';
    footerSection.style.backgroundSize = 50 + + window.pageYOffset / 20 + '%'
    footerSection.style.opacity = 0 + + window.pageYOffset / 1300 + '';

})


friendsOpenBtn.addEventListener('click', () => {



    if (friendsOpenBtn.classList.contains('open-btn-animate') && subsectionOne.classList.contains('sub-sect-animate')) {
        friendsOpenBtn.classList.remove('open-btn-animate');
        subsectionOne.classList.remove('sub-sect-animate');
        plusSign.classList.remove('rotate');
    } else {
        friendsOpenBtn.classList.add('open-btn-animate');
        subsectionOne.classList.add('sub-sect-animate');
        plusSign.classList.add('rotate');
    }


})







//-----------------============ headerScrollBehavior ===============------------------
document.addEventListener('DOMContentLoaded', function (event) {
    window.onscroll = function () {
        scrollFunction();
    };
});

let scrollFunction = () => {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 175) {
        document.querySelector('.muscle-img').style.opacity = '1';
        header.style.backgroundColor = '#223341'
        header.style.boxShadow = '0px 2px 40px 2px black';
        // document.querySelector('.friends-open').style.display = 'flex';

    }
    else {
        document.querySelector('.muscle-img').style.opacity = '0';
        header.style.backgroundColor = 'transparent'
        header.style.boxShadow = 'none';
        // document.querySelector('.friends-open').style.display = 'none';

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