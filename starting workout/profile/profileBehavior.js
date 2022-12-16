const spans = document.querySelectorAll('.progress-bar');
const mainContent = document.querySelector('.main-content');
const progSection = document.getElementById('info-prog');
const precentages = document.querySelectorAll('.precentage');

let dataOne = document.querySelectorAll('.precentage')[0].dataset.precentage;
let dataTwo = document.querySelectorAll('.precentage')[1].dataset.precentage;
let dataThree = document.querySelectorAll('.precentage')[2].dataset.precentage;


console.log(dataOne, dataTwo, dataThree);

mainContent.onscroll = () => {
    if (mainContent.scrollTop >= progSection.offsetTop - 400) {

        spans.forEach((span) => {

            span.style.width = span.dataset.width;
        })

        precentages.forEach((prec) => {
            prec.textContent = prec.dataset.precentage;
        })

    };



}





