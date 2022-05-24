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


// 토글에 따라 텍스트 색 변경
window.onload=function(){
    var checkbox = document.querySelector('.check__container input[name=mode]');
    checkbox.addEventListener('change', function() {
        if(this.checked) {
            $('.check__txt_1').removeAttr('data-filter')
            $('.check__txt_2').attr('data-filter', 'ON SALE')
        } else {
            $('.check__txt_1').attr('data-filter', 'ON STOCK')
            $('.check__txt_2').removeAttr('data-filter')
        }
    })
}

// 모달창
// 모달창 이미지 업로드
window.onload=function(){
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#imagePreview').css('background-image', 'url('+e.target.result +')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function() {
        readURL(this);
    });
}

//모달창 콜렉션 생성 - 속성 추가
const submitForm = document.querySelector(".add");
const addButton = document.querySelector(".add-todo");
const todoList = document.querySelector(".todos");
const list = document.querySelectorAll(".todos li");

let listLenght = list.lenght;

const generateTempalate = (todo) => {
const html = `<li>
                <label for="todo_${listLenght}">
                    <b>${todo}</b>
                </label>
                <i class="far fa-trash-alt delete"></i>
            </li>`;
todoList.innerHTML += html;
};

function addTodos(e) {
    e.preventDefault();
    const todo = submitForm.add.value.trim();
    if (todo.length) {
        listLenght = listLenght + 1;
        generateTempalate(todo);
        submitForm.reset();
    }
}
function deleteTodos(e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
}

window.onload = function(){
    submitForm.addEventListener("submit", addTodos);
    addButton.addEventListener("click", addTodos);
    todoList.addEventListener("click", deleteTodos);
}

/* 좋아요 버튼 누르면 누른 표시*/
window.onload=function(){
    document.addEventListener('DOMContentLoaded', function() {
        var likeButton = document.getElementById('like-button');
        likeButton.addEventListener('click', function() {
          window.lb = likeButton;
          likeButton.classList.toggle('selected');
        });
    }, false);
}


/* 관리자 - 회원테이블 */
$(window).on("load resize ", function() {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();

/* 드롭다운 메뉴 */
var dropdown = document.querySelectorAll('.filter__dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);

window.onload=function(){
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
}

