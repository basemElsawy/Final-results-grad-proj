
// header variables
let header = document.querySelector('.header');
let logo = document.querySelector('.logo');
let navbar = document.querySelector('.navbar');
let logoImg = document.querySelector('.muscle-img');
let guideBtns = document.querySelectorAll('.guide-btn');
let sections = document.querySelectorAll('.section');
// main variables











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