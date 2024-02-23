const swiperWrapper = document.querySelector(".swiper-wrapper");

swiperWrapper.innerHTML += Slides.Slides();



window.onload = function () {
    console.log('hello from main.js');
    new Swiper(".swiper", {
      // Optional parameters,
      loop: true,
  
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
  
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-my-button-next",
        prevEl: ".swiper-my-button-prev",
      },
  
      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  };