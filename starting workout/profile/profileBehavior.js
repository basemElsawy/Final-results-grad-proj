'use strict';
// -------------===========scrolling variables=========---------------
const spans = document.querySelectorAll('.progress-bar');
const mainContent = document.querySelector('.main-content');
const progSection = document.getElementById('info-prog');
const precentages = document.querySelectorAll('.precentage');


//-=-----------------------========== second section variables ===-------
const secondBodyContainer = document.querySelector('#description');
const editBtn = document.querySelectorAll('.edit-btn');
const infoHeadLn = document.querySelectorAll('.info-headline');
const infoArticle = document.querySelectorAll('.info-article')


//-----------============= first section variables ===========---------
const changeBtn = document.querySelectorAll('.change-btn');
const personalData = document.querySelectorAll('.personal-data');
const infoContainer = document.querySelector('.info-container');
const infoBody = document.querySelector('.info-body');
const bodyContainer = document.querySelector('.body-container');
const addMore = document.querySelector('.Add-more');




//------------============ achievments variables=========-------------
const logoBtn = document.querySelectorAll('.logo-btn');
const goalsContainer = document.getElementById('.achievements-container');
const achievmentsClass = document.querySelectorAll('.achievements')
const goalsList = document.querySelectorAll('.list-of-goals');
const names = document.querySelectorAll('.name')

// ----------------========== global variables ===========-------------
var message = document.createElement('p');



//-----------------------------=============ADD MORE FUNMCTIONALITY ===========---------

addMore.addEventListener('click', () => {
    let bodyContainerNewDiv = document.createElement('div');
    bodyContainerNewDiv.classList.add('info');
    bodyContainer.append(bodyContainerNewDiv);
    let insideLabel = document.createElement('label');
    let secondLabel = document.createElement('label');
    let newInputEl = document.createElement('input');
    insideLabel.setAttribute('for', 'newInputEl')
    newInputEl.setAttribute('id', 'newInputEl');
    secondLabel.setAttribute('for', 'text-area');
    secondLabel.textContent = 'whats on your mind';
    let textAreaEl = document.createElement('textarea');
    textAreaEl.setAttribute('id', 'text-area');
    textAreaEl.style.width = '200px'
    textAreaEl.style.height = '100px'
    document.querySelector('.body-container').style.filter = 'blur(10px)';
    insideLabel.textContent = 'Description header'
    insideLabel.style.fontWeight = 'bold';

    let thirdNewDiv = document.createElement('div');
    thirdNewDiv.classList.add('second-container-newDiv');
    secondBodyContainer.append(thirdNewDiv);
    thirdNewDiv.append(insideLabel);
    thirdNewDiv.append(newInputEl);
    thirdNewDiv.append(secondLabel);
    thirdNewDiv.append(textAreaEl);

    let submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-text');
    submitBtn.textContent = 'Submit';

    thirdNewDiv.append(submitBtn);
    document.querySelector('.body-container').style.filter = 'blur(10px)';
    let newHeadLn = document.createElement('h3');
    newHeadLn.classList.add('info-headline');
    let newArticle = document.createElement('p');
    newArticle.classList.add('infoArticle')
    let newEditBtn = document.createElement('button');
    newEditBtn.classList.add('edit-btn');
    newEditBtn.textContent = 'Edit';
    bodyContainerNewDiv.append(newHeadLn);
    bodyContainerNewDiv.append(newArticle);
    bodyContainerNewDiv.append(newEditBtn);
    editBtn.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            let secondNewDiv = document.createElement('div');
            secondNewDiv.classList.add('second-container-newDiv');
            document.getElementById('select-two').classList.add('over-lay')
            let insideLabel = document.createElement('label');
            let secondLabel = document.createElement('label');
            insideLabel.textContent = 'Description header'
            insideLabel.style.fontWeight = 'bold';

            let newInputEl = document.createElement('input');
            insideLabel.setAttribute('for', 'newInputEl')
            newInputEl.setAttribute('id', 'newInputEl');
            secondLabel.setAttribute('for', 'text-area');
            secondLabel.textContent = 'whats on your mind';
            let textAreaEl = document.createElement('textarea');
            textAreaEl.setAttribute('id', 'text-area');
            textAreaEl.style.width = '200px'
            textAreaEl.style.height = '100px'

            let submitBtn = document.createElement('button');
            submitBtn.classList.add('submit-text');
            submitBtn.textContent = 'Submit';

            document.querySelector('.body-container').style.filter = 'blur(10px)';
            secondNewDiv.style.zIndex = '100';
            secondBodyContainer.append(secondNewDiv);
            secondNewDiv.append(insideLabel);
            secondNewDiv.append(newInputEl);
            secondNewDiv.append(secondLabel);
            secondNewDiv.append(textAreaEl);
            secondNewDiv.append(submitBtn);
            submitBtn.addEventListener('click', () => {
                if (newInputEl.value && textAreaEl.value) {
                    infoHeadLn[idx].textContent = newInputEl.value
                    infoArticle[idx].textContent = textAreaEl.value
                    submitBtn.parentElement.remove();
                    document.querySelector('#select-two').classList.remove('over-lay');
                    document.querySelector('.body-container').style.filter = 'blur(0px)';

                }
                else {

                    message.textContent = 'please enter your new details';

                    secondNewDiv.append(message)

                }
            })

        })
    })
    submitBtn.addEventListener('click', () => {

        if (newInputEl.value && textAreaEl.value) {
            newHeadLn.textContent = newInputEl.value
            newArticle.textContent = textAreaEl.value
            submitBtn.parentElement.remove();
            document.querySelector('#select-two').classList.remove('over-lay');
            document.querySelector('.body-container').style.filter = 'blur(0px)';

        }
        else {

            message.textContent = 'please enter your new details';

            thirdNewDiv.append(message)

        }
    })



})


// ------------------========= second container functionality =========-=----------
editBtn.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        let secondNewDiv = document.createElement('div');
        secondNewDiv.classList.add('second-container-newDiv');
        document.getElementById('select-two').classList.add('over-lay')
        let insideLabel = document.createElement('label');
        let secondLabel = document.createElement('label');
        insideLabel.textContent = 'Description header'
        insideLabel.style.fontWeight = 'bold';

        let newInputEl = document.createElement('input');
        insideLabel.setAttribute('for', 'newInputEl')
        newInputEl.setAttribute('id', 'newInputEl');
        secondLabel.setAttribute('for', 'text-area');
        secondLabel.textContent = 'whats on your mind';
        let textAreaEl = document.createElement('textarea');
        textAreaEl.setAttribute('id', 'text-area');
        textAreaEl.style.width = '200px'
        textAreaEl.style.height = '100px'

        let submitBtn = document.createElement('button');
        submitBtn.classList.add('submit-text');
        submitBtn.textContent = 'Submit';

        document.querySelector('.body-container').style.filter = 'blur(10px)';
        secondNewDiv.style.zIndex = '100';
        secondBodyContainer.append(secondNewDiv);
        secondNewDiv.append(insideLabel);
        secondNewDiv.append(newInputEl);
        secondNewDiv.append(secondLabel);
        secondNewDiv.append(textAreaEl);
        secondNewDiv.append(submitBtn);
        submitBtn.addEventListener('click', () => {
            if (newInputEl.value && textAreaEl.value) {
                infoHeadLn[idx].textContent = newInputEl.value
                infoArticle[idx].textContent = textAreaEl.value
                submitBtn.parentElement.remove();
                document.querySelector('#select-two').classList.remove('over-lay');
                document.querySelector('.body-container').style.filter = 'blur(0px)';

            }
            else {

                message.textContent = 'please enter your new details';

                secondNewDiv.append(message)

            }
        })

    })
})





//----------------============change-details-btn=========---------

changeBtn.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('new-div');
        infoContainer.append(newDiv);

        let newInput = document.createElement('input');
        newInput.setAttribute('id', 'new-input');
        let labelInput = document.createElement('label');
        labelInput.textContent = 'New personal info';
        labelInput.setAttribute('for', 'new-input');
        let submitBtn = document.createElement('button');
        submitBtn.classList.add('submit-text');
        submitBtn.textContent = 'Submit';
        newDiv.append(labelInput);
        newDiv.append(newInput);
        newDiv.append(submitBtn);
        infoBody.style.filter = 'blur(10px)';
        newDiv.style.borderRadius = '5px'
        document.getElementById('select-one').classList.add('over-lay');
        // for (let i = 0; i < changeBtn.length; i++) {
        //     changeBtn[i].classList.add('hide');

        // }
        newDiv.style.zIndex = '100';


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
                // for (let i = 0; i < changeBtn.length; i++) {
                //     changeBtn[i].classList.remove('hide');

                // }
                document.getElementById('select-one').classList.remove('over-lay');

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





