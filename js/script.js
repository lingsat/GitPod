'use strict';

let header = document.querySelector('.header');
let main = document.querySelector('.main');
let burgerBtn = document.querySelector('.menu__btn');
let burgerNav = document.querySelector('.header__nav');

// Fixing the header on scrolling the page
window.addEventListener('scroll', function () {
    let headerHeight = header.getBoundingClientRect().height;
    if (window.scrollY >= headerHeight) {
        header.classList.add('sticky');
        main.style.marginTop = `${headerHeight}px`;
    } else {
        header.classList.remove('sticky');
        main.style.marginTop = '0';
    }
});

// Showing navigation menu on burger button click
burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.toggle('active');
    burgerNav.classList.toggle('burger__show');
});

// Slick slider for feedback block
$(document).ready(function(){
    $('.feedback__slider--block').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,        
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });
});