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
// posts variables
let secondSect = document.querySelector('.second-section');
let likeBtns = document.querySelectorAll('.like-btns');
let commentBtns = document.querySelectorAll('.comment-btns');
let likesNumbers = document.querySelectorAll('.likes-number');
let commentsNumbers = document.querySelectorAll('.comments-number');
let commentsPanel = document.querySelectorAll('.comments-panel');
let posts = document.querySelectorAll('.post')


//posting variables
let userName = document.querySelector('.user-name');
let fileUploading = document.getElementById('uploading');

let errMsg = document.createElement('span');
let textInputArea = document.getElementById('main-text');
let postBtn = document.querySelector('.posting-btn');
let userImage = document.querySelector('.user-image');
let firstName = document.querySelector('.first-name');
likesNumbers.textContent = Number(likesNumbers.textContent);
commentsNumbers.textContent = Number(commentsNumbers.textContent);
let postContainer = document.querySelector('.post-container');


errMsg.classList.add('errMsg');

let counter;


//posting behavior 
postBtn.addEventListener('click', () => {

    if (textInputArea.value || fileUploading.files[0] == true) {

        let post = document.createElement('div');
        post.classList.add('post');
        post.classList.add('new-post');
        //self post heading
        let postHeading = document.createElement('div');
        postHeading.classList.add('post-heading');
        let clonedName = firstName.cloneNode(true);
        let clonedImage = userImage.cloneNode(true);
        clonedImage.style.width = '50px';
        clonedImage.style.height = '50px';
        let newpostHeading = document.createElement('p');
        newpostHeading.innerHTML = `<p>${clonedName.innerText} <Strong class="Orange-txt">posted</Strong> </p>`
        postHeading.append(clonedImage, newpostHeading);
        //self post body
        let postBody = document.createElement('div');
        let newPara = document.createElement('p');
        newPara.textContent = textInputArea.value;
        postBody.classList.add('post-body');
        postBody.append(newPara);

        //self post footer
        let postFooter = document.createElement('div');
        postFooter.classList.add('post-footer');
        let likesButton = document.createElement('button');
        likesButton.textContent = 'Like';
        likesButton.classList.add('new-like-btn');
        likesButton.classList.add('like-btns');
        likesButton.classList.add('post-btns');
        let commentsButton = document.createElement('button');
        commentsButton.textContent = 'Comment';

        commentsButton.classList.add('comment-btns');
        commentsButton.classList.add('post-btns');
        postFooter.append(likesButton, commentsButton);

        //self post likes and comments
        let likesNdComments = document.createElement('div');
        likesNdComments.classList.add('likes-comments');
        let spanLikes = document.createElement('span');
        spanLikes.innerHTML = '<span>Likes <span class="likes-number new-like-numb numbers">0</span></span>'
        spanLikes.style.textAlign = 'left';
        let spanComments = document.createElement('span');
        spanComments.innerHTML = '<span>comments <span class="comments-number new-comm-numb numbers">0</span></span>'
        spanComments.style.textAlign = 'left';


        likesNdComments.append(spanLikes, spanComments);
        // self post comments panel
        let comments_panel = document.createElement('div');
        comments_panel.classList.add('comments-panel');
        let panelHeader = document.createElement('h5');
        panelHeader.textContent = 'comments';
        panelHeader.classList.add('comments');
        comments_panel.classList.add('new-comment');
        comments_panel.append(panelHeader);
        post.append(postHeading, postBody, likesNdComments, postFooter, comments_panel)
        postContainer.append(post);
        commentsButton.onclick = () => {
            let commentsContainer = document.createElement('div');

            commentsContainer.classList.add('absolute');
            let closeBtn = document.createElement('button');

            closeBtn.classList.add('small-close');

            document.querySelector('.new-post').append(commentsContainer);
            let commentsAdd = document.createElement('button');
            let comments = document.createElement('input');
            commentsAdd.textContent = 'Add';
            comments.setAttribute('placeholder', 'Add your comment');




            commentsAdd.classList.add('add-comments');
            commentsAdd.addEventListener('click', () => {
                document.querySelector('.new-comm-numb').textContent++;
                if (comments.value) {
                    let cloneImage = userImage.cloneNode(true);
                    let cloneName = firstName.cloneNode(true);
                    let newHeading = document.createElement('span');
                    newHeading.textContent = `Commenting as ${cloneName.textContent}`;
                    newHeading.style.fontSize = '0.8rem';
                    cloneImage.classList.add('clonedImg');
                    let removeComment = document.createElement('button');
                    removeComment.classList.add('small-close');

                    let commentsInside = document.createElement('div');
                    let commentsValue = document.createElement('span');
                    commentsValue.innerText = comments.value;
                    let nameImgContainer = document.createElement('div');
                    nameImgContainer.classList.add('nameImgContainer');
                    nameImgContainer.append(cloneImage, newHeading);
                    let commentContentContainer = document.createElement('div');
                    commentContentContainer.append(nameImgContainer, commentsValue);
                    commentContentContainer.classList.add('display-flex-container');
                    commentsInside.style.position = 'relative';
                    commentsInside.append(commentContentContainer, removeComment);
                    document.querySelector('.new-comment').append(commentsInside);
                    commentsAdd.parentElement.remove();
                    removeComment.addEventListener('click', () => {
                        removeComment.parentElement.remove();
                        document.querySelector('.new-comm-numb').textContent--;
                    })



                } else {

                    commentsContainer.append(error)
                }

            })


            commentsContainer.append(comments, commentsAdd, closeBtn);
            closeBtn.addEventListener('click', () => {
                closeBtn.parentElement.remove();
            })

        }
        document.querySelector('.new-like-btn').onclick = () => {
            if (document.querySelector('.new-like-btn').textContent == 'Like') {
                document.querySelector('.new-like-numb').textContent++;
                document.querySelector('.new-like-btn').textContent = 'Unlike';

            } else {
                if (document.querySelector('.new-like-btn').textContent == 'Unlike') {
                    document.querySelector('.new-like-numb').textContent--;
                    document.querySelector('.new-like-btn').textContent = 'Like';
                }
            }


        }



    } else {
        errMsg.textContent = 'write something to post';
        secondSect.append(errMsg);
    }



})




//commenting behavior
let error = document.createElement('span');
error.textContent = 'The comment field is empty';
error.classList.add('errMsg');
commentBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        let commentsContainer = document.createElement('div');

        commentsContainer.classList.add('absolute');
        let closeBtn = document.createElement('button');
        closeBtn.classList.add('small-close');

        posts[idx].append(commentsContainer);
        let commentsAdd = document.createElement('button');
        let comments = document.createElement('input');
        commentsAdd.textContent = 'Add';
        comments.setAttribute('placeholder', 'Add your comment');




        commentsAdd.classList.add('add-comments');
        commentsAdd.addEventListener('click', () => {
            commentsNumbers[idx].textContent++;
            if (comments.value) {
                let cloneImage = userImage.cloneNode(true);
                let cloneName = firstName.cloneNode(true);
                let newHeading = document.createElement('span');
                newHeading.textContent = `Commenting as ${cloneName.textContent}`;
                newHeading.style.fontSize = '0.8rem';
                cloneImage.classList.add('clonedImg');
                let removeComment = document.createElement('button');
                removeComment.classList.add('small-close');

                let commentsInside = document.createElement('div');
                let commentsValue = document.createElement('span');
                commentsValue.innerText = comments.value;
                let nameImgContainer = document.createElement('div');
                nameImgContainer.classList.add('nameImgContainer');
                nameImgContainer.append(cloneImage, newHeading);
                let commentContentContainer = document.createElement('div');
                commentContentContainer.append(nameImgContainer, commentsValue);
                commentContentContainer.classList.add('display-flex-container');
                commentsInside.style.position = 'relative';
                commentsInside.append(commentContentContainer, removeComment);
                commentsPanel[idx].append(commentsInside);
                commentsAdd.parentElement.remove();
                removeComment.addEventListener('click', () => {
                    removeComment.parentElement.remove();
                    commentsNumbers[idx].textContent--;
                })



            } else {

                commentsContainer.append(error)
            }
        })




        commentsContainer.append(comments, commentsAdd, closeBtn);
        closeBtn.addEventListener('click', () => {
            closeBtn.parentElement.remove();
        })




    })
})


likeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {

        if (likeBtns[idx].textContent == 'Like') {
            likesNumbers[idx].textContent++;
            likeBtns[idx].textContent = 'Unlike';

        } else {
            if (likeBtns[idx].textContent == 'Unlike') {
                likesNumbers[idx].textContent--;
                likeBtns[idx].textContent = 'Like';
            }
        }




    })

})










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