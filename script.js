'use strict';

// 스크롤 할 때 네비게이션 변화
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--trans');
    } else {
        navbar.classList.remove('navbar--trans');
    }
});

// 판매 모달창
$('.sell__btn').click(function(){
    var buttonId = $(this).attr('id');
    $('#modal-container').addClass(buttonId);
    $('body').addClass('modal-active');
})
  
$('#modal-container').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});

