'use strict';
// -------------===========scrolling variables=========---------------
const prgoressBars = document.querySelectorAll('.progress-bar');
const mainContent = document.querySelector('.progress-contain');
const progSection = document.getElementById('info-prog');
const precentages = document.querySelectorAll('.precentage');


//-=-----------------------========== second section variables ===-------
const secondBodyContainer = document.querySelector('#description');
const editBtn = document.querySelectorAll('.edit-btn');
const infoHeadLn = document.querySelectorAll('.info-headline');
const infoArticle = document.querySelectorAll('.info-article')
const removeBtn = document.querySelectorAll('.remove');


//-----------============= first section variables ===========---------
const changeBtn = document.querySelectorAll('.change-btn');
const personalData = document.querySelectorAll('.personal-data');
const infoContainer = document.querySelector('.info-container');
const infoBody = document.querySelector('.info-body');
const bodyContainer = document.querySelector('.body-container');
const addMore = document.querySelector('.Add-more');




//------------============ achievments variables=========-------------
const logoBtn = document.querySelectorAll('.logo-btn');
const goalsContainer = document.getElementById('achievements-container');
const achievmentsClass = document.querySelectorAll('.achievements')
const goalsList = document.querySelectorAll('.list-of-goals');
const names = document.querySelectorAll('.name')
const goBackBtn = document.querySelectorAll('.Go-back');


//--------------============= IMAGE FILE READER VARIABLES=========--------------
const imageInput = document.getElementById('Img-input');
const profileImg = document.querySelector('.profile-image');

//----------=============== VIDEO FILE READER VARIABLES ==========--------------
const videoInput = document.querySelectorAll('.video-input');
let uploadedImage = '';
let uploadedVideo = '';

let addVideoLabel = document.querySelectorAll('.add-vid');
let submitBtn = document.querySelectorAll('.submit-btn');

const weightliftingContainer = document.getElementById('weightlifting');


//-------------================ goals footer ============------------
let listedGoals = document.querySelectorAll('.goals-footer');
let openPanelBtn = document.querySelectorAll('.panel-open');
let insideListed = document.querySelectorAll('.inside-list');

let liftNmbrInput = document.querySelectorAll('.lift-number');
let prBrokeInput = document.querySelectorAll('.pr-broke');
let onDateInput = document.querySelectorAll('.on-date');
let goalsBody = document.querySelectorAll('.goals-body-inside');

let errorMsg = document.createElement('span');


submitBtn.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        let liftDetailsDiv = document.createElement('div');
        let liftNmbrDetail = document.createElement('span');
        let liftPrBrokedetail = document.createElement('span');
        let liftOnDateDetail = document.createElement('span');

        liftDetailsDiv.classList.add('lift-details');

        liftNmbrDetail.textContent = liftNmbrInput[idx].value;
        liftPrBrokedetail.textContent = prBrokeInput[idx].value;
        liftOnDateDetail.textContent = onDateInput[idx].value;

        liftDetailsDiv.append(liftNmbrDetail, liftPrBrokedetail, liftOnDateDetail)
        if (liftNmbrInput[idx].value && prBrokeInput[idx].value && onDateInput[idx].value) {

            openPanelBtn[idx].style.display = 'inline';
        }
        else {
            errorMsg.textContent = 'The above is mandatory';
            goalsBody[idx].append(errorMsg);
        }



        insideListed[idx].append(liftDetailsDiv);







    })

})




addVideoLabel.forEach((btn, idx) => {
    btn.addEventListener('click', () => {


        videoInput.forEach((video) => {

            video.addEventListener('change', () => {

                const videoIndex = video.files[0];

                const reader = new FileReader();
                let videoSrc = document.createElement('video')
                let insideSrc = document.createElement('source');

                reader.addEventListener('load', () => {
                    uploadedVideo = reader.result;
                    insideSrc.setAttribute('src', uploadedVideo);

                })



                reader.readAsDataURL(videoIndex);
                videoSrc.setAttribute('width', '300');
                videoSrc.setAttribute('controls', '');
                videoSrc.setAttribute('autoplay', '');
                videoSrc.setAttribute('type', 'video/mp4')
                // videoSrc.setAttribute('autoplay', '');
                videoSrc.append(insideSrc);

                insideListed[idx].append(videoSrc);








            }

            )
        })



    })

})







openPanelBtn.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        openPanelBtn[idx].innerText = 'Close panel';
        listedGoals[idx].classList.toggle('active-panel');
        goBackBtn[idx].disabled = true;
        openPanelBtn[idx].onclick = () => {
            if (openPanelBtn[idx].textContent == 'Close panel') {
                openPanelBtn[idx].textContent = 'Open panel';
                goBackBtn[idx].disabled = false;
            }
        }
    })

})






// ----------------========== global variables ===========-------------
var message = document.createElement('p');



// ----------========== GO BACK FUNCTIONALITY ==========----------------

goBackBtn.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        goalsContainer.style.display = 'flex';
        goalsList[idx].classList.remove('active');
    })

})



//---------------------=============== achievements functionality==============----------------


logoBtn.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        goalsContainer.style.display = 'none';
        goalsList[idx].classList.add('active');
    })
})






removeBtn.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        removeBtn[idx].parentElement.remove();
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
    var newHeadLn = document.createElement('h3');
    newHeadLn.classList.add('info-headline');
    var newArticle = document.createElement('p');
    newArticle.classList.add('infoArticle')
    let newEditBtn = document.createElement('button');
    newEditBtn.classList.add('edit-btn');
    newEditBtn.textContent = 'Edit';
    bodyContainerNewDiv.append(newHeadLn);
    bodyContainerNewDiv.append(newArticle);
    bodyContainerNewDiv.append(newEditBtn);
    let remove = document.createElement('button');
    remove.innerHTML = '&#215'
    remove.classList.add('remove');
    remove.classList.add('remove-btn-cl');
    bodyContainerNewDiv.append(remove);
    document.getElementById('select-two').classList.add('over-lay');
    thirdNewDiv.style.zIndex = '100';

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


        newEditBtn.onclick = () => {
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
                    newHeadLn.textContent = newInputEl.value
                    newArticle.textContent = textAreaEl.value
                    submitBtn.parentElement.remove();
                    document.querySelector('#select-two').classList.remove('over-lay');
                    document.querySelector('.body-container').style.filter = 'blur(0px)';

                }
                else {

                    message.textContent = 'please enter your new details';

                    secondNewDiv.append(message)

                }



            })

        }
        remove.onclick = () => {
            remove.parentElement.remove();
        }
    })









})


// -----------------========== scroll-functionality========---------


// let newObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting <) {
//             entry.target.style.width = entry.dataset.width;
//         }
//     })
// })


// prgoressBars.forEach(prog => {
//     newObserver.observe(prog);
// })


// window.onscroll = () => {
//     if (documn) {
//         console.log('scrolled');
//         prgoressBars.forEach((prog) => {

//             prog.style.width = prog.dataset.width;
//         })

//         precentages.forEach((prec) => {
//             prec.textContent = prec.dataset.precentage;
//         })

//     };



// }



// --------------------============= image FILE READER FUNCTIONALITY ==============----------

imageInput.addEventListener('change', () => {
    const imageIndex = imageInput.files[0];
    const reader = new FileReader();
    profileImg.removeAttribute('src');
    reader.addEventListener('load', () => {
        uploadedImage = reader.result;
        profileImg.setAttribute('src', uploadedImage);

    });

    reader.readAsDataURL(imageIndex);
});



// ------------------============= VIDEO FILE READER ================---------------


