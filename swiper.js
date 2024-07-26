window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
      let swiper;
  
      breakpoint = window.matchMedia(breakpoint);
  
      const enableSwiper = function(className, settings) {
        swiper = new Swiper(className, settings);
      }
  
      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };
  
  
      breakpoint.addEventListener('change', checker);
      checker();
    }
  
    resizableSwiper(
      '(max-width: 760px)',
      '.swiper-container',
      {
      direction: 'horizontal',
      loop: true,
      loopedSlides: 11,
      slidesPerView: 'auto',
      spaceBetween: 16,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
      },
      }, 
    );
  });
  
  
  const showMore = document.querySelector('.show-more');
  showMore.addEventListener('click', function () { 
    let content = document.querySelector('.swiper-wrapper');
    if (content.classList.contains ('wrapper-show') )  {
        content.classList.remove('wrapper-show')
        showMore.textContent = 'Показать все';
    } else {
        content.classList.add('wrapper-show');
        showMore.textContent = 'Скрыть';  
    }
  });