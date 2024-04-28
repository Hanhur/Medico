const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        630: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        820: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        980: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});
