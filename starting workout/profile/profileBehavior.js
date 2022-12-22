'use strict';
// -------------===========scrolling variables=========---------------
const spans = document.querySelectorAll('.progress-bar');
const mainContent = document.querySelector('.main-content');
const progSection = document.getElementById('info-prog');
const precentages = document.querySelectorAll('.precentage');


//-=-----------------------========== 



//-----------============= first section variables ===========---------
const changeBtn = document.querySelectorAll('.change-btn');
const personalData = document.querySelectorAll('.personal-data');
const infoContainer = document.querySelector('.info-container');
const infoBody = document.querySelector('.info-body');





//------------============ achievments variables=========-------------
const logoBtn = document.querySelectorAll('.logo-btn');
const goalsContainer = document.getElementById('.achievements-container');
const achievmentsClass = document.querySelectorAll('.achievements')
const goalsList = document.querySelectorAll('.list-of-goals');
const names = document.querySelectorAll('.name')

// ----------------========== global variables ===========-------------
var message = document.createElement('p');

//----------------============change-details-btn=========---------

changeBtn.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('new-div');
        infoContainer.append(newDiv);

        let newInput = document.createElement('input');
        newInput.setAttribute('id', 'new-input');
        let labelInput = document.createElement('label');
        labelInput.textContent = 'New Data';
        labelInput.setAttribute('for', 'new-input');
        let submitBtn = document.createElement('button');
        submitBtn.classList.add('submit-text');
        submitBtn.textContent = 'Submit';
        newDiv.append(labelInput);
        newDiv.append(newInput);
        newDiv.append(submitBtn);
        infoBody.style.filter = 'blur(10px)';
        newDiv.style.borderRadius = '5px'


        if (personalData[idx].classList.contains('Age-data') === true) {
            newInput.setAttribute('type', 'number');
            newInput.setAttribute('min', '1');
            newInput.setAttribute('max', '100');

        }
        submitBtn.addEventListener('click', () => {

            if (newInput.value
            ) {


                submitBtn.disabled = false;
                personalData[idx].textContent = newInput.value
                names[idx].textContent = newInput.value
                submitBtn.parentElement.remove();
                infoBody.style.filter = 'blur(0px)';
            }

            else {



                message.textContent = 'please enter your new details';
                console.log('working')
                newDiv.append(message)



            }
        })

    })
})



// -----------------========== scroll-functionality========---------





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





