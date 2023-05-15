$(document).ready(function () {

  if (document.querySelector("#phone")) {
    $('#phone').mask('+7 (000) 000-00-00');
  }

  if (document.querySelector(".shuffle-me")) {
    if (innerWidth > 992) {
      $(".shuffle-me").shuffleImages({
        trigger: "imageHover",
        hoverTrigger: 500,
      });
    }
  }

  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".menu");
  const menuitem = document.querySelectorAll(".menu__item");
  const modalBasket = document.querySelector('.modalBasket');
  const basket = document.querySelector('.header__basket');
  const mask = document.querySelector('.mask');
  const closeBasket = document.querySelector('.modalBasket__title-icon');
  const body = document.querySelector('body');
  const cardFilter = document.querySelector('.card__filter');
  const cardAccordeon = document.querySelector('.card__accordeon');
  const modalBtn = document.querySelector('.modal__btn');

  if (modalBtn) {
    modalBtn.addEventListener("click", function () {
      $.fancybox.close();
    })
  }

  if (cardFilter) {
    cardFilter.addEventListener("click", function () {
      cardAccordeon.classList.toggle("show")
    })
  }

  $('.modalBtn').fancybox({
    touch: false
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest(".active").length) {
      $('.menu').removeClass('active');
      burger.classList.remove("active");
      body.classList.remove("no-scroll")
    }
    e.stopPropagation();
  });

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("no-scroll")
    if (cardAccordeon) {
      cardAccordeon.classList.remove("show")
    }
  });

  menuitem.forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.remove("active");
      body.classList.remove("no-scroll")
    });
  });

  const modalCounter = document.querySelectorAll('.modalBasket__item-box')

  modalCounter.forEach(element => {
    element.addEventListener('click', function (event) {
      const e = event.target
      const num = element.querySelector('.count__num')
      let sum = +num.innerHTML

      if (e.classList.contains('count__plus')) {
        ++sum
        num.innerHTML = sum
      }
      if (e.classList.contains('count__minus')) {
        if (sum > 1) {
          --sum
          num.innerHTML = sum
        }
      }
    })
  });

  const sliderCounter = document.querySelectorAll('.slider__item-boxBtn')

  sliderCounter.forEach(element => {
    element.addEventListener('click', function (event) {
      const e = event.target
      const num = element.querySelector('.count__num')
      let sum = +num.innerHTML

      if (e.classList.contains('count__plus')) {
        ++sum
        num.innerHTML = sum
      }
      if (e.classList.contains('count__minus')) {
        if (sum > 1) {
          --sum
          num.innerHTML = sum
        }
      }
    })
  });

  const openBasket = document.querySelector(".openBasket");

  openBasket.addEventListener("click", () => {
    mask.classList.add("active");
    modalBasket.classList.add("active");
  })

  basket.addEventListener("click", () => {
    mask.classList.add("active");
    modalBasket.classList.add("active");
  })

  mask.addEventListener("click", () => {
    mask.classList.remove("active");
    closeBasket.classList.remove("active");
    modalBasket.classList.remove("active");
  })

  closeBasket.addEventListener("click", () => {
    mask.classList.remove("active");
    modalBasket.classList.remove("active");
  })


  $('.card__accordeon-title').click(function () {
    $(this).toggleClass('active').next().slideToggle();
    $('.card__accordeon-title').not(this).removeClass('active').next().slideUp();
  });


  $('.slider__accordeon-title').click(function () {
    $(this).toggleClass('show').next().slideToggle();
    $('.slider__accordeon-title').not(this).removeClass('show').next().slideUp();
  });


  var targetMap = document.querySelectorAll('[data-target]'),
    map = document.querySelectorAll('.variety__image');

  targetMap.forEach(elem => {
    elem.addEventListener('mouseover', function (e) {
      if (elem.classList.contains("variety__item--active")) {} else {
        e.preventDefault();
        var target = this.getAttribute('data-target');
        map.forEach(elem => {
          elem.classList.remove('variety__image--opacity', 'variety__image--active');
        });
        targetMap.forEach(elem => {
          elem.classList.remove('variety__item--active');
        });
        this.classList.add('variety__item--active');
        var cat = document.querySelector('[data-info="' + target + '"]');
        cat.classList.add('variety__image--active');
        setTimeout(() => {
          cat.classList.add('variety__image--opacity');
        }, 400);
      }
    });
  });


  const ratings = document.querySelectorAll(".rating");

  if (ratings.length > 0) {
    initRatings();
  };

  function initRatings() {
    let ratingActive, ratingValue;

    for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index];
      initRating(rating);
    };

    function initRating(rating) {
      initRatingVars(rating);
      setRatingActiveWidth(index = ratingValue.value);

      if (rating.id === 'reviewRating') {
        setRating(rating)
      }
    };

    function initRatingVars(rating) {
      ratingActive = rating.querySelector(".rating__active");
      ratingValue = rating.querySelector(".rating__value");
    }

    function setRatingActiveWidth(index = ratingValue.value) {
      const ratingActiveWidth = index / 0.05;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function setRating(rating) {
      const ratingItems = rating.querySelectorAll(".rating__item");

      for (let index = 0; index < ratingItems.length; index++) {
        const ratingItem = ratingItems[index];

        ratingItem.addEventListener("mouseenter", function (e) {
          initRatingVars(rating);
          setRatingActiveWidth(ratingItem.value);
        });

        ratingItem.addEventListener("mouseleave", function (e) {
          setRatingActiveWidth();
        });

        ratingItem.addEventListener("click", function (e) {
          initRatingVars(rating);

          if (rating.dataset.ajax) {
            setRatingValue(ratingItem.value.rating);
          } else {
            ratingValue.setAttribute('value', index + 1);
            setRatingActiveWidth();
          };
        });
      };
    };
  };


  var swiper = new Swiper(".swiperMini", {
    loop: true,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    direction: "vertical",
  });

  var swiper2 = new Swiper(".swiperBig", {
    effect: "fade",
    loop: true,
    thumbs: {
      swiper: swiper,
    },
  });

  var swiperBg = new Swiper(".sliderBg__swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
      autoplay: {
        delay: 5000,
      },
    },
  });

  var swiperHith = new Swiper(".hits__swiper", {
    spaceBetween: 30,
    slidesPerView: 4,

    navigation: {
      nextEl: '.hits__swiper-next',
      prevEl: '.hits__swiper-prev',
    },

    breakpoints: {

      1367: {
        slidesPerView: 4,
      },
      993: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      577: {
        slidesPerView: 2.1,
      },
      480: {
        slidesPerView: 1.4,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 16,
      },
    }
  });

  var swiperNew = new Swiper(".new__swiper", {
    spaceBetween: 30,
    slidesPerView: 4,

    navigation: {
      nextEl: '.new__swiper-next',
      prevEl: '.new__swiper-prev',
    },

    breakpoints: {

      1367: {
        slidesPerView: 4,
      },
      993: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      577: {
        slidesPerView: 2.1,
      },
      480: {
        slidesPerView: 1.4,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
    }
  });

  var swiperAdditional = new Swiper(".addition__swiper", {
    spaceBetween: 30,
    slidesPerView: 3,
    navigation: {
      nextEl: '.addition__swiper-next',
      prevEl: '.addition__swiper-prev',
    },

    breakpoints: {

      1367: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      993: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      577: {
        slidesPerView: 2.1,
      },
      480: {
        slidesPerView: 1.4,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
    }
  });

  var swiperRecomend = new Swiper(".recomend__swiper", {
    spaceBetween: 30,
    slidesPerView: 3,
    navigation: {
      nextEl: '.recomend__swiper-next',
      prevEl: '.recomend__swiper-prev',
    },

    breakpoints: {

      1367: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      993: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      577: {
        slidesPerView: 2.1,
      },
      480: {
        slidesPerView: 1.4,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
    }
  });


  var swiperReview = new Swiper(".reviewProduct__swiper", {
    spaceBetween: 30,

    navigation: {
      nextEl: '.reviewProduct__swiper-next',
      prevEl: '.reviewProduct__swiper-prev',
    },

    breakpoints: {
      992: {
        spaceBetween: 15,
        slidesPerView: 3,
      },
      786: {
        slidesPerView: 2.1,
      },
      480: {
        slidesPerView: 1.4,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
    }
  });


  const geolocations = [{
      latitude: 51.530548,
      longitude: 46.031032,
      address: 'Проспект Столыпина, 13',
      phone: '+7 (8452) 75-85-83',
      district: 'Центр'
    },
    {
      latitude: 51.529097,
      longitude: 46.018617,
      address: 'Чапаева, 45',
      phone: '+7 (8452) 75-85-83',
      district: 'Центр'
    },
    {
      latitude: 51.536963,
      longitude: 46.011296,
      address: 'Большая Казачья, 103',
      phone: '+7 (8452) 75-85-83',
      district: 'Центр'
    },
    {
      latitude: 51.531041,
      longitude: 45.981741,
      address: '2-я Садовая, 99',
      phone: '+7 (8452) 75-85-83',
      district: 'октябрьский'
    },
    {
      latitude: 51.489443,
      longitude: 45.923908,
      address: 'Крымская, 9',
      phone: '+7 (8452) 75-85-83',
      district: 'заводской'
    },
    {
      latitude: 51.477367,
      longitude: 45.893347,
      address: 'Тульская, 49Д',
      phone: '+7 (8452) 75-85-83',
      district: 'заводской'
    },
    {
      latitude: 51.477367,
      longitude: 45.893347,
      address: 'Тульская, 49Д',
      phone: '+7 (8452) 75-85-83',
      district: 'заводской'
    },
    {
      latitude: 51.477367,
      longitude: 45.893347,
      address: 'Тульская, 49Д',
      phone: '+7 (8452) 75-85-83',
      district: 'заводской'
    },
  ]




  if (document.getElementById('ymapsID')) {

    const addressesButtons = document.querySelector('#addressesButtons');
    geolocations.forEach(elem => {
      const mapButton = document.createElement('div');
      mapButton.setAttribute('data-latitude', elem.latitude);
      mapButton.setAttribute('data-longitude', elem.longitude);
      mapButton.setAttribute('data-phone', elem.phone);
      mapButton.setAttribute('data-address', elem.address);
      mapButton.className = 'contacts__item-box contacts__mapButton';
      mapButton.innerHTML = `<p class="contacts__item-subtitle">${elem.district}</p>
                            <p class="contacts__item-text">
                              Адрес: ${elem.address}
                            </p>`

      addressesButtons.append(mapButton);
    })

    ymaps.ready(init);

    function init() {
      var center;
      var location = ymaps.geolocation.get();

      location.then(
        function (result) {
          center = result.geoObjects.position

          var myMap = new ymaps.Map('ymapsID', {
            center: center,
            zoom: 13,
            controls: ['zoomControl'],
          });


          const mapButtons = document.querySelectorAll('.contacts__mapButton');
          mapButtons.forEach(elem => {

            MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
              '<div class="contacts__balloon top">' +
              '<div class="contacts__balloon-arrow"></div>' +
              '<div class="contacts__balloon-inner">' +
              '$[[options.contentLayout observeSize maxWidth=235 maxHeight=350]]' +
              '</div>' +
              '</div>', {
                build: function () {
                  this.constructor.superclass.build.call(this);

                  this._$element = $('.contacts__balloon', this.getParentElement());

                  this._$element
                    .on('click', $.proxy(this.onCloseClick, this));
                },

                clear: function () {
                  this._$element
                    .off('click');

                  this.constructor.superclass.clear.call(this);
                },

                _isElement: function (element) {
                  return element && element[0] && element.find('.contacts__balloon-arrow')[0];
                }
              })

            MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
              `<div class="contacts__balloon-content">
                <a href="tel:${getPhone(elem.dataset.phone)}">${elem.dataset.phone}</a>
                <div>${elem.dataset.address}</div>
              </div>`
            )

            var placemark = new ymaps.Placemark([elem.dataset.latitude, elem.dataset.longitude], {}, {
              iconLayout: 'default#image',
              iconImageHref: './images/icons/map-pin.svg',
              iconImageSize: [40, 40],
              iconImageOffset: [-20, -40],
              balloonLayout: MyBalloonLayout,
              balloonContentLayout: MyBalloonContentLayout,
              hideIconOnBalloonOpen: false,
              autoPan: true,
              balloonPanelMaxMapArea: 0,
              balloonShadow: true,

            });

            myMap.geoObjects.add(placemark);

            elem.addEventListener('click', () => {
              setCenterPos(elem.dataset.latitude, elem.dataset.longitude);
              placemark.balloon.open()
            })
          })

          myMap.behaviors.disable(['scrollZoom'])

          function setCenter(x, y) {
            ymaps.ready(function () {
              myMap.setCenter([x, y], 13, {
                checkZoomRange: false
              });
            });
          };

          function setCenterPos(x, y, i) {
            ymaps.ready(function () {
              myMap.setCenter([x, y], 13, {
                checkZoomRange: false
              });
              oldCenter = myMap.getCenter();
            });
            $("body, html").animate(function () {
              scrollTo: $(".map-footer").offset().top
            });
            return false;
          };
        },
        function (err) {
          console.log('Ошибка: ' + err)
        }
      );
    }
  }
});

function getPhone(phone) {
  let newPhone = [];
  let phoneArr = phone.split('');
  phoneArr.forEach(e => {
    if (!isNaN(e) && e !== ' ' || e === '+') {
      newPhone.push(e)
    }
  })
  return newPhone.join('')
}