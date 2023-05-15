document.addEventListener('DOMContentLoaded', function(){
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  const swiper = new Swiper('.promo__swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 2000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay:{
      delay: 7000,
      disableOnInteraction: false
    },
    on:{
      autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
        }
    },
    breakpoints:{
      768:{
        allowTouchMove: false,
      },
      200:{
        allowTouchMove: true,
        speed: 1000,
        autoplay: {
          delay: 6000,
        },
      }
    },
  });
  const swiperPartners = new Swiper('.partners__content', {
    direction: 'horizontal',
    spaceBetween: 30,
    enabled: false,
    slidesPerView: 6,
    IOSEdgeSwipeDetection: true,
    onTouchStart: function()
    {
        return false;
    },
    scrollbar: {
        container: '.swiper-scrollbar',
        hide: false,
        draggable: true,
        snapOnRelease: true
    },
    breakpoints: {
      993:{
        enabled: true,
        slidesPerView: 6,
      },
      768:{
        enabled: true,
        slidesPerView: 3.1,
      },
      476:{
        enabled: true,
        slidesPerView: 2.1
      },
      200:{
        enabled: true,
        slidesPerView: 1.1
      }
    }
  });

  

  const swiperPromotions = new Swiper('#swiper1', {
    direction: 'horizontal',
    spaceBetween: 30,
    slidesPerView: 2.1,
    observer: true,
observeParents: true,
    breakpoints: {
      768:{
        slidesPerView: 2.1,
      }, 
      200:{
        slidesPerView: 1.1,
      }
    }
  })
  const swiperPromotions2 = new Swiper('#swiper2', {
    direction: 'horizontal',
    spaceBetween: 30,
    slidesPerView: 2.1,
    observer: true,
observeParents: true,
    breakpoints: {
      768:{
        slidesPerView: 2.1,
      }, 
      200:{
        slidesPerView: 1.1,
      }
    }
  })
  const swiperPromotions3 = new Swiper('#swiper3', {
    direction: 'horizontal',
    spaceBetween: 30,
    slidesPerView: 2.1,
    observer: true,
observeParents: true,
    breakpoints: {
      768:{
        slidesPerView: 2.1,
      }, 
      200:{
        slidesPerView: 1.1,
      }
    }
  })

  const swiperVisited = new Swiper('.visited__swiper', {
    direction: 'horizontal',
    spaceBetween: 30,
    slidesPerView: 4,
    breakpoints: {
      992:{
        slidesPerView: 4,
      }, 
      769:{
        slidesPerView: 3,
      },
      500:{
        slidesPerView: 2.1,
      },
      200:{
        slidesPerView: 1.1,
      }
    }
  })

  if (window.innerWidth < 992){
    const swiperDetails = new Swiper('.recommendations__swiper', {
      direction: 'horizontal',
      enabled: false,
      spaceBetween: 30,
      breakpoints: {
        769:{
          slidesPerView: 3,
        }, 
        500:{
          enabled: true,
          slidesPerView: 2.1,
        },
        200:{
          enabled: true,
          slidesPerView: 1.1,
        }

      }
    })
  }

  $('#tel').mask('+9(999)999-99-99')


   

  

  const menuBtn = document.getElementById('menu-btn'),
  menuOverlay = document.getElementById('menu-overlay'),
  menu = document.getElementById('menu'),
  closeBtn = document.getElementById('close-btn')
  
  menuBtn.addEventListener('click', function(){
    menuOverlay.classList.add('menu__overlay--active')
    menu.classList.add('menu--active')
  })

  closeBtn.addEventListener('click', function(){
    menuOverlay.classList.remove('menu__overlay--active')
    menu.classList.remove('menu--active')
  })
  menuOverlay.addEventListener('click', function(){
    menuOverlay.classList.remove('menu__overlay--active')
    menu.classList.remove('menu--active')
  })

  let accordion = document.querySelectorAll('.filter__item-top')
  for (let elem of accordion){
    $(elem).next().slideUp()
    elem.addEventListener('click', function(){
      $(elem).toggleClass('filter__item-top--active').next().slideToggle()
    })
  }

  let filter = document.querySelectorAll('.assortment__box-item')
  for (let elem of filter){
    elem.addEventListener('click', function(){
    $(elem).children('.assortment__box-icon').toggleClass('assortment__box-icon--rotate');
    })
  }

  if(document.querySelector('.detail__tabsContent')){
    var targetMaps = document.querySelectorAll('[data-target]'),
    maps = document.querySelectorAll('.detail__tabsContent')
    console.log(targetMaps);
    targetMaps?.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      console.log(maps);
      e.preventDefault()
      var target = this.getAttribute('data-target')
      maps.forEach((elem) => {
        elem.classList.remove('detail__tabsContent--opacity', 'detail__tabsContent--active')
      })
      targetMaps.forEach((elem) => {
        elem.classList.remove('detail__tabs-item--active')
      })
      this.classList.add('detail__tabs-item--active')
      var cat = document.querySelector('[data-info="' + target + '"]')
      cat.classList.add('detail__tabsContent--active')
      setTimeout(() => {
        cat.classList.add('detail__tabsContent--opacity')
      }, 400)
      })
    })
  }

    if(document.querySelector('.assortment__box')){
      var targetMap = document.querySelectorAll('[data-target]'),
    map = document.querySelectorAll('.assortment__box')

    targetMap?.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()
      var target = this.getAttribute('data-target')
      map.forEach((elem) => {
        elem.classList.remove('assortment__box--opacity', 'assortment__box--active')
      })
      targetMap.forEach((elem) => {
        elem.classList.remove('accordion__tabs-item--active')
      })
      this.classList.add('accordion__tabs-item--active')
      var cat = document.querySelector('[data-info="' + target + '"]')
      cat.classList.add('assortment__box--active')
      setTimeout(() => {
        cat.classList.add('assortment__box--opacity')
      }, 400)
      })
    })
    }

    if(document.querySelector('.detail__box')){
      var targetMap = document.querySelectorAll('[data-targets]'),
    map = document.querySelectorAll('.detail__box')

    targetMap?.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()
      var target = this.getAttribute('data-targets')
      map.forEach((elem) => {
        elem.classList.remove('detail__box--opacity', 'detail__box--active')
      })
      targetMap.forEach((elem) => {
        elem.classList.remove('accordion__tabs-item--active')
      })
      this.classList.add('accordion__tabs-item--active')
      var cat = document.querySelector('[data-info="' + target + '"]')
      console.log(cat);
      cat.classList.add('detail__box--active')
      cat.querySelector('.detail__tabs-item').click()
      setTimeout(() => {
        cat.classList.add('detail__box--opacity')
      }, 400)
      })
    })
    }
    if(document.querySelector('.conditions__box')){
      var targetMap = document.querySelectorAll('[data-target]'),
    map = document.querySelectorAll('.conditions__box')

    targetMap?.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()
      var target = this.getAttribute('data-target')
      map.forEach((elem) => {
        elem.classList.remove('conditions__box--opacity', 'conditions__box--active')
      })
      targetMap.forEach((elem) => {
        elem.classList.remove('accordion__tabs-item--active')
      })
      this.classList.add('accordion__tabs-item--active')
      var cat = document.querySelector('[data-info="' + target + '"]')
      cat.classList.add('conditions__box--active')
      setTimeout(() => {
        cat.classList.add('conditions__box--opacity')
      }, 400)
      })
    })
    }

  if (window.innerWidth <= 992){
    $('.accordion--assortment').slideUp()
  }
  $('.assortment__accordion').on('click', function(){
    $('.assortment__accordion').toggleClass('assortment__accordion--active')
    $('.accordion').slideToggle()
  })
  
  $('.faq__content').slideUp()
  $('.faq__accordeon-item').on('click', function(){
    $(this).find('.faq__content').slideToggle()
    $(this).find('.faq__accordeon-icon').toggleClass('faq__accordeon-icon--open')
  })

  if (window.innerWidth <= 992){
    $('#accordeon1, #accordeon2').slideUp()
    $('.footer__left-link').on('click', ()=>{
      $('.footer__left-link').toggleClass('footer__left-link--active')
      $('#accordeon1, #accordeon2').slideToggle()
    })
  }

  if(document.querySelector(".box__blockLeft")){
    var container = document.querySelector(".content__container");
        var domRect
        var result
        if (container){
            domRect = container.getBoundingClientRect(); 
            result = domRect.left + 15;
        }
        var blockLeft = document.querySelector(".box__blockLeft");
        var blockRight = document.querySelector(".box__blockRight");
        if(blockLeft){
            blockLeft.style.paddingLeft = ''+ result +'px';
        }
        if(blockRight){
            blockRight.style.paddingRight = ''+ result +'px';  
        }
        if (window.innerWidth <= 768) {
            if(blockRight){
                blockRight.style.paddingLeft = ''+ result +'px';  
            }
        }
        if (window.innerWidth <= 768) {
            if(blockLeft){
                blockLeft.style.paddingRight = ''+ result +'px';
            }
        }
        var content = document.querySelectorAll(".offer");
        var contentReverse = document.querySelectorAll(".offer--reverseHome");
        content.forEach(function(el){
            var blocksLeft = el.querySelectorAll(".offer__blockLeft");
            blocksLeft.forEach(function(el){
                el.style.paddingLeft = ''+ result +'px';
            });
            if (window.innerWidth <= 992) {
                blocksLeft.forEach(function(el){
                    el.style.paddingRight = ''+ result +'px';
                });
            }
        })
        window.addEventListener('resize', function() {
            var container = document.querySelector(".content__container");
            var domRect = container.getBoundingClientRect(); 
            var result = domRect.left + 15;
            if(blockLeft){
                blockLeft.style.paddingLeft = ''+ result +'px';
            }
            if(blockRight){
                blockRight.style.paddingRight = ''+ result +'px';  
            }
            if (window.innerWidth <= 768) {
                if(blockRight){
                    blockRight.style.paddingLeft = ''+ result +'px';  
                }
            }
            if (window.innerWidth <= 768) {
                if(blockLeft){
                    blockLeft.style.paddingRight = ''+ result +'px';
                }
            }
            content.forEach(function(el){
                var blocksLeft = el.querySelectorAll(".offer__blockLeft");
                var blocksRight = el.querySelectorAll(".offer__blockRight");
                blocksLeft.forEach(function(el){
                    el.style.paddingLeft = ''+ result +'px';
                });
                blocksRight.forEach(function(el){
                    el.style.paddingRight = ''+ result +'px';
                });
                if (window.innerWidth <= 992) {
                    blocksLeft.forEach(function(el){
                        el.style.paddingRight = ''+ result +'px';
                    });
                    blocksRight.forEach(function(el){
                        el.style.paddingLeft = ''+ result +'px';
                    });
                }
            })
        });
  }
})