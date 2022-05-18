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



