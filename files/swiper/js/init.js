const firstScreenSlider = document.querySelector('.first-screen__slider')
if (firstScreenSlider) {
   new Swiper(firstScreenSlider, {
      pagination: {
         el: '#first-screen-slider',
         clickable: true,
      },
      slidesPerView: 1,
      watchOverflow: true,
      spaceBetween: 50,
      loop: true,
      speed: 800,
      effect: 'fade',
      autoplay: {
         deley: 60000,
         stopOnLastSlide: false,
         disableOnInteraction: false,
      },
      preloadImages: false,
      lazy: {
         loadOnTransitionStart: false,
         loadPrewNext: false,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
   });
}

const numbersSlider = document.querySelector('.numbers__slider')
if (numbersSlider) {
   new Swiper(numbersSlider, {
      navigation: {
         prevEl: '#numbers-slider-swiper-button-prev',
         nextEl: '#numbers-slider-swiper-button-next',
      },
      //slidesPerView: 1.76,
      watchOverflow: true,
      spaceBetween: 20,
      //centeredSlides: true,
      loop: true,
      speed: 800,
      effect: 'slide',
      preloadImages: false, // Отключить предзагрузка картинок
      lazy: { // Lazy Loading (подгрузка картинок)
         loadOnTransitionStart: false, // Подгружать на старте переключения слайда
         loadPrewNext: false, // Подгрузить предыдущую и следующую картинку
      },
      watchSlidesProgress: true, // Слежка за видимыми слайдами
      watchSlidesVisibility: true, // Добавление класса видимым слайдам
      breakpoints: {
         0: {
            slidesPerView: 2.0,
            spaceBetween: 10,
         },
         480: {
            slidesPerView: 2.285,
            spaceBetween: 15,
         },
         721: {
            slidesPerView: 2.285,
            spaceBetween: 15,
         },
         1025: {
            slidesPerView: 2.285,
            spaceBetween: 20,
         },
         1100: {
            slidesPerView: 2.285,
         }
      }
   });
}

const instagramSlider = document.querySelector('.instagram__slider')
if (instagramSlider) {
   new Swiper(instagramSlider, {
      navigation: {
         prevEl: '#instagram-slider-swiper-button-prev',
         nextEl: '#instagram-slider-swiper-button-next',
      },
      slidesPerView: 4.76,
      watchOverflow: true,
      spaceBetween: 23,
      centeredSlides: true,
      loop: true,
      speed: 800,
      effect: 'slide',
      preloadImages: false, // Отключить предзагрузка картинок
      lazy: { // Lazy Loading (подгрузка картинок)
         loadOnTransitionStart: false, // Подгружать на старте переключения слайда
         loadPrewNext: false, // Подгрузить предыдущую и следующую картинку
      },
      watchSlidesProgress: true, // Слежка за видимыми слайдами
      watchSlidesVisibility: true, // Добавление класса видимым слайдам
      breakpoints: {
         0: {
            slidesPerView: 1.115,
            spaceBetween: 10,
         },
         480: {
            slidesPerView: 3.29,
            spaceBetween: 15,
         },
         721: {
            slidesPerView: 3.29,
            spaceBetween: 15,
         },
         1025: {
            slidesPerView: 3.29,
            spaceBetween: 22,
         },
         1100: {
            slidesPerView: 4.76,
         }
      }
   });
}