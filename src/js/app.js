import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp();


import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation])

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    freeMode: true,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,

        },
        // when window width is >= 480px
        576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 0,

        },
        992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,

        },


    }
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav__mobile');


burger.addEventListener("click", ()=> {
    burger.classList.toggle('active');
    menu.classList.toggle('active')
})


