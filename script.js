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

/*
// 토글 체크
var checkbox = document.querySelector('.check__container input[name=mode]');
checkbox.addEventListener('change', function() {
    if(checkbox==null){
        return;
    }else{
        if(this.checked) {
            $('.check__txt_1').removeAttr('data-filter')
            $('.check__txt_2').attr('data-filter', 'ON SALE')
        } else {
            $('.check__txt_1').attr('data-filter', 'ON STOCK')
            $('.check__txt_2').removeAttr('data-filter')
        }
    }
})*/


// 보유중, 판매중 필터링 (미완성)
/*
const stockContainer = document.querySelector('.check__txt_1');
const cartWrapContainer = document.querySelector('.cartWrap');
const items = document.querySelectorAll('.items');

toggleContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    } else {
        // 선택된 버튼만 활성화
        const active = document.querySelector('.category__btn.selected');
        active.classList.remove('selected');
        const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
        target.classList.add('selected');

        projectContainer.classList.add('ani-out');
        setTimeout(() => {
            projects.forEach((project) => {
                if (filter === '*' || filter === project.dataset.type) {
                    project.classList.remove('invisible');
                } else {
                    project.classList.add('invisible');
                }
            });
            projectContainer.classList.remove('ani-out');
        }, 300);
    }
    
});
*/

// 모달창 (미완성)
/*
$( document ).ready(function() {
    $('.trigger').on('click', function() {
        const val = document.querySelector('.trigger').innerText;
        $('.modal-wrapper').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        console.log(val);
        return false;
    });
});*/

/* 관리자 - 회원테이블 */
$(window).on("load resize ", function() {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();

/* 드롭다운 메뉴 */
var dropdown = document.querySelectorAll('.filter__dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach((document) => {
        var button = document.querySelector('a[data-toggle="dropdown"]');
        var menu = document.querySelector('.dropdown-menu');
        var arrow = button.querySelector('i.icon-arrow');
        if(button==null){
            return;
        }else{
            button.onclick = function (event) {
                if (!menu.hasClass('show')) {
                    menu.classList.add('show');
                    menu.classList.remove('hide');
                    arrow.classList.add('open');
                    arrow.classList.remove('close');
                    event.preventDefault();
                }
                else {
                    menu.classList.remove('show');
                    menu.classList.add('hide');
                    arrow.classList.remove('open');
                    arrow.classList.add('close');
                    event.preventDefault();
                }
            };
        }
    })
Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};
