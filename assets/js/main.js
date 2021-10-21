// SLIDER SECTION TIME

let timeSlider = new Swiper(".time-slider", {
    slidesPerView: 'auto',
});

// SLIDER VIEWS

let reviewsSlider = new Swiper(".reviews__slider", {
    
    spaceBetween: 30,
    slidesPerView: "auto",
    navigation: {
        prevEl: ".reviews-button-prev",
        nextEl: ".swiper-button-next",
      },
    breakpoints: {
        575: {
            slidesPerGroup: 2,
            slidesPerView: 2,
        }
    }
   
});

