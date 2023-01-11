let frstBg = document.querySelector('.first-img');
let footerSection = document.querySelector('.footer-section');

window.addEventListener('scroll', () => {
    frstBg.style.backgroundSize = 150 - + window.pageYOffset / 30 + '%';
    // frstBg.style.opacity = 1 - + window.pageYOffset / 1400 + '';
    frstBg.style.height = 100 + +window.pageYOffset / 15 + 'vh';
    footerSection.style.height = 140 - +window.pageYOffset / 200 + 'vh';
    // footerSection.style.backgroundSize = 50 + + window.pageYOffset / 20 + '%'
    // footerSection.style.opacity = 0 + + window.pageYOffset / 1300 + '';
})