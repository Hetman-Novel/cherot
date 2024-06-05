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

const eventsSlider = document.querySelector('.events__slider')
if (eventsSlider) {
   new Swiper(eventsSlider, {
      navigation: {
         prevEl: '#events-slider-swiper-button-prev',
         nextEl: '#events-slider-swiper-button-next',
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
            slidesPerView: 2.335,
            spaceBetween: 20,
         },
         721: {
            slidesPerView: 2.335,
            spaceBetween: 20,
         },
         1025: {
            slidesPerView: 2.335,
            spaceBetween: 20,
         },
         1100: {
            slidesPerView: 2.335,
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

const restaurantSlider = document.querySelector('.page-restaurant__slider')
if (restaurantSlider) {
   new Swiper(restaurantSlider, {
      navigation: {
         prevEl: '#restaurant-slider-swiper-button-prev',
         nextEl: '#restaurant-slider-swiper-button-next',
      },
      slidesPerView: 1,
      watchOverflow: true,
      spaceBetween: 50,
      loop: true,
      speed: 800,
      effect: 'fade',
      preloadImages: false, // Отключить предзагрузка картинок
      lazy: { // Lazy Loading (подгрузка картинок)
         loadOnTransitionStart: false, // Подгружать на старте переключения слайда
         loadPrewNext: false, // Подгрузить предыдущую и следующую картинку
      },
      watchSlidesProgress: true, // Слежка за видимыми слайдами
      watchSlidesVisibility: true, // Добавление класса видимым слайдам
   });
}

const kitchenSlider = document.querySelector('.kitchen__slider')
if (kitchenSlider) {
   new Swiper(kitchenSlider, {
      navigation: {
         prevEl: '#kitchen-slider-swiper-button-prev',
         nextEl: '#kitchen-slider-swiper-button-next',
      },
      slidesPerView: 1,
      watchOverflow: true,
      spaceBetween: 50,
      loop: true,
      speed: 800,
      effect: 'fade',
      preloadImages: false, // Отключить предзагрузка картинок
      lazy: { // Lazy Loading (подгрузка картинок)
         loadOnTransitionStart: false, // Подгружать на старте переключения слайда
         loadPrewNext: false, // Подгрузить предыдущую и следующую картинку
      },
      watchSlidesProgress: true, // Слежка за видимыми слайдами
      watchSlidesVisibility: true, // Добавление класса видимым слайдам
   });
}

const thereIsSlider = document.querySelector('.there-is__slider')
if (thereIsSlider) {
   new Swiper(thereIsSlider, {
      navigation: {
         prevEl: '#there-is-slider-swiper-button-prev',
         nextEl: '#there-is-slider-swiper-button-next',
      },
      slidesPerView: 1,
      watchOverflow: true,
      spaceBetween: 50,
      loop: true,
      speed: 800,
      effect: 'fade',
      preloadImages: false, // Отключить предзагрузка картинок
      lazy: { // Lazy Loading (подгрузка картинок)
         loadOnTransitionStart: false, // Подгружать на старте переключения слайда
         loadPrewNext: false, // Подгрузить предыдущую и следующую картинку
      },
      watchSlidesProgress: true, // Слежка за видимыми слайдами
      watchSlidesVisibility: true, // Добавление класса видимым слайдам
   });
}