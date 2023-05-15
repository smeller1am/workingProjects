
$(window).on("load", function () {
  select =  $(".header__cities").selectize({
    highlight: false,
    selectSmartPositioning:false,
    selectVisibleOptions:5
    });
    select2 =  $(".content__cardProduct-cities").selectize({
      highlight: false,
      selectSmartPositioning:false,
      selectVisibleOptions:5
    });
    select.each(function() {
      var selectize = this.selectize;
      selectize.on('focus', function() {
      
          this.clear();
      });
      selectize.on('blur', function() {
          if (this.items.length === 0) {
              this.addItem(this.lastValidValue);
          }
      });
      selectize.on('item_add', function() {
          this.blur();
      });
    });
    select2.each(function() {
      var selectize = this.selectize;
      selectize.on('focus', function() {
      
          this.clear();
      });
      selectize.on('blur', function() {
          if (this.items.length === 0) {
              this.addItem(this.lastValidValue);
          }
      });
      selectize.on('item_add', function() {
          this.blur();
      });
    }); 
    var swiper = new Swiper('.content__slider', {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.content__slider-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
    var sliderStock = new Swiper('.content__stockSlider', {
      observer: true,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1.1,
          spaceBetween: 10
        },
        577:{
          slidesPerView: 2.2,
          spaceBetween: 10
        },
        635:{
          slidesPerView: 2,
          spaceBetween: 10
        },
        769:{
          slidesPerView: 3.2,
          spaceBetween: 20
        },
        800:{
          slidesPerView: 3,
          spaceBetween: 20
        },
        993: {
          slidesPerView: 5,
          spaceBetween: 20
        }
      }
    });
    var sliderCollection = new Swiper('.content__collectionSlider', {
      observer: true,
      breakpoints: {
        320: {
          slidesPerView: 1.1,
          spaceBetween: 10
        },
        577:{
          slidesPerView: 2.2,
          spaceBetween: 10
        },
        635:{
          slidesPerView: 2,
          spaceBetween: 10
        },
        769:{
          slidesPerView: 3.2,
          spaceBetween: 20,
        },
        800:{
          slidesPerView: 3.1,
          spaceBetween: 20,
        },
        993: {
          slidesPerView: 5,
          spaceBetween: 20
        }
      },
    });

    var buttonsLike = document.querySelectorAll(".content__stock .content__btnLike");
    buttonsLike.forEach(element => {
      element.addEventListener("click", function(){
        element.classList.toggle("content__btnLike--add");
      })
    });

    var textLike = document.querySelector(".content__cardProduct-favorites");
    if(textLike){
    textLike.addEventListener("click", function(){
      document.querySelector(".content__btnLike").classList.toggle("content__btnLike--add");
      if(document.querySelector('.content__btnLike--add')){
        document.querySelector('.content__cardProduct-textLike').textContent = 'В избранном'
      }
      else{
        document.querySelector('.content__cardProduct-textLike').textContent = 'В избранное'
      }
    })
    }

    
    var tabs = document.querySelectorAll('.tabs__item');
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function () {
        id = this.getAttribute("id");
        var tabsActive = document.querySelector('.tabs__item--active'),
        content = document.querySelector(
          '.content__stockSlider[id="' + id + '"]'
        ),
        contentActive = document.querySelector(
          '.content__stockSlider--active'
        );
        tabsActive.classList.remove("tabs__item--active");
        tab.classList.add("tabs__item--active");
        if(contentActive || content){
        contentActive.classList.remove("content__stockSlider--active");
        content.classList.add("content__stockSlider--active");
        };
      });
    });
    var sliderBrands = new Swiper('.content__sliderBrands', {
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1.5,
          spaceBetween: 10
        },
        577:{
          slidesPerView: 3.5,
          spaceBetween: 10
        },
        635:{
          slidesPerView: 3,
          spaceBetween: 10
        },
        769:{
          slidesPerView: 4.5,
          spaceBetween: 20
        },
        800:{
          slidesPerView: 4,
          spaceBetween: 20
        },
        993: {
          slidesPerView: 6,
          spaceBetween: 20
        }
      }
    });
    var sliderBlog = new Swiper('.content__sliderBlog', {
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1.1,
          spaceBetween: 10
        },
        577:{
          slidesPerView: 2.2,
          spaceBetween: 10
        },
        635:{
          slidesPerView: 2,
          spaceBetween: 20
        },
        769: {
          slidesPerView: 3.2,
          spaceBetween: 20
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        993: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
    });
    var sliderMin = new Swiper('.content__minSlider', {
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1.1,
          spaceBetween: 10
        },
        577:{
          slidesPerView: 2.2,
          spaceBetween: 10
        },
        635:{
          slidesPerView: 2,
          spaceBetween: 20
        },
        769: {
          slidesPerView: 3.2,
          spaceBetween: 20
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        993: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
    });
    if (window.innerWidth <= 992) {
      const burger = document.querySelector(".burger");
        navigation = document.querySelector(".nav");
      burger.addEventListener("click", function () {
        navigation.classList.toggle("nav--open");
        this.classList.toggle("burger--open");
      });
      $( "#accordion" ).accordion({
        active: false,
        collapsible: true,
      });
      $('.accordion__title').click(function (){
        $('.filter').stop().slideToggle(600);
        $(this).toggleClass("accordion__title--active");
      });

    }

    $('.filter__title[data-targetDropdown]').click(function (){
      var target = $(this).attr('data-targetDropdown');
      $('.filter__content[data-dropdown="'+target+'"]').stop().slideToggle(600);
      $(this).toggleClass("filter__title--active");
    });


    $('.content__cardProduct-description[data-targetDropdown]').click(function (){
      var target = $(this).attr('data-targetDropdown');
      $('.content__cardProduct-content[data-dropdown="'+target+'"]').stop().slideToggle(600);
      $(this).toggleClass("content__cardProduct-description--open");
    });

    $('.filter__icon[data-targetDropdown]').click(function (){
      var target = $(this).attr('data-targetDropdown');
      $('.filter__collection[data-dropdown="'+target+'"]').stop().slideToggle(600);
      $(this).toggleClass("filter__icon--active");
    });

    const ratings = document.querySelectorAll(".rating");

  if (ratings.length > 0) {
    initRatings();
  };

  var radio = document.querySelectorAll('.content__ordering-radioInput')
  if(radio.length > 1){
    radio[0].checked = true
    for (let i = 0; i < radio.length; i++){
      radio[i].addEventListener('change', function(e){
        for(x of radio){
          x.checked=false
          x.parentNode.classList.remove('content__ordering-radio--active');
        }
        e.currentTarget.checked = true
        e.currentTarget.parentNode.classList.add('content__ordering-radio--active')
      })
    }
  }

  function initRatings() {
    let ratingActive, ratingValue;

    for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index];
      initRating(rating);
    };

    function initRating(rating) {
      initRatingVars(rating);

      setRatingActiveWidth();

      if (rating.classList.contains("rating")) {
        setRating(rating);
      }
    };

    function initRatingVars(rating) {
      ratingActive = rating.querySelector(".rating__active");
      ratingValue = rating.querySelector(".rating__value");
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML) {
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
            ratingValue.innerHTML = index + 1;
            setRatingActiveWidth();
          };
        });
      };
    };
  };

    var sorting = document.querySelectorAll('.content__sorting-item');
    sorting.forEach(function(item) {
      item.addEventListener('click', function () {
        var sortingActive = document.querySelector('.content__sorting-item--active');
        sortingActive.classList.remove("content__sorting-item--active");
        item.classList.add("content__sorting-item--active"),
        id = this.getAttribute("data-tab");
        content = document.querySelector(
          '.content__collectionSlider[data-content="' + id + '"]'
        ),
        contentActive = document.querySelector(
          '.content__collectionSlider--active'
        );
        if(contentActive || content){
          contentActive.classList.remove("content__collectionSlider--active");
          content.classList.add("content__collectionSlider--active");
          };
      });
    });


    var swiperProductMin = new Swiper(".content__cardProduct-sliderMin", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        320:{
          slidesPerView: 2.9,
          spaceBetween: 5
        },
        577:{
          slidesPerView: 5,
          spaceBetween: 10
        },
        769: {
          slidesPerView: 5,
          spaceBetween: 10
        }
      }
    });
    var swiperProductBig = new Swiper(".content__cardProduct-sliderBig", {
      loop: true,
      spaceBetween: 10,
      thumbs: {
        swiper: swiperProductMin,
      },
    });

    var tabsInfoProduct = document.querySelectorAll('.content__tabsInfo-item');
    tabsInfoProduct.forEach(function(tab) {
      tab.addEventListener('click', function () {
        id = this.getAttribute("data-tab");
        var tabsActive = document.querySelector('.content__tabsInfo-item--active'),
        content = document.querySelector(
          '.content__blockInfoProduct[data-content="' + id + '"]'
        ),
        contentActive = document.querySelector(
          '.content__blockInfoProduct--active'
        )
        ;
        tabsActive.classList.remove("content__tabsInfo-item--active");
        tab.classList.add("content__tabsInfo-item--active");
        if(contentActive || content){
        contentActive.classList.remove("content__blockInfoProduct--active");
        content.classList.add("content__blockInfoProduct--active");
        };
      });
    });
    var sliderReviews = new Swiper('.content__blockInfoProduct-slider', {
      breakpoints: {
        320:{
          slidesPerView: 1.1,
          spaceBetween: 10,
          centeredSlides:true,
        },
        577: {
          centeredSlides:true,
          slidesPerView: 1.1,
          spaceBetween: 20
        },
        993: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    });

    var btnPlus = document.querySelectorAll(".content__quantity-plus");
    btnPlus.forEach(function(btn){
      btn.addEventListener("click", function () {
        var id = this.getAttribute("id"),
            val = document.querySelector('.content__quantity-value[data-id="' + id + '"]'),
            numberStr = val.getAttribute("value"),
            number = Number(numberStr);
            result = Number(val.value);
            result = result + number;
            result = result.toFixed(2);
            val.value = result;
      })
    })

    var cartBtnPlus = document.querySelectorAll(".content__cart-plus");
    cartBtnPlus.forEach(function(btn){
      btn.addEventListener("click", function () {
        let elem = this.parentNode.children[1].children[0];
        elem.value = Number(elem.value) + 1
        
      })
    })

    var cartBtnMinus = document.querySelectorAll(".content__cart-minus");
    cartBtnMinus.forEach(function(btn){
      btn.addEventListener("click", function () {
        let elem = this.parentNode.children[1].children[0];
        if(elem.value > 1) {
          elem.value = Number(elem.value) - 1
        }
        
      })
    })

    var btnMinus = document.querySelectorAll(".content__quantity-minus");
    btnMinus.forEach(function(btn){
      btn.addEventListener("click", function () {
        var id = this.getAttribute("id"),
            val = document.querySelector('.content__quantity-value[data-id="' + id + '"]'),
            numberStr = val.getAttribute("value"),
            number = Number(numberStr);
            result = Number(val.value);
            result = result - number;
            result = result.toFixed(2);
            if(result < number) {
              val.value = number
            }
            else{
              val.value = result;
            }
      })
    })

    var btnResetFilters = document.querySelector(".filter__btnDelet");
    if(btnResetFilters){
      btnResetFilters.addEventListener("click", function(){
        var checkbox = document.querySelectorAll(".filter__checkbox");
        checkbox.forEach(function(elem){
          if (elem.checked){
            elem.checked = false;
          }
        })
        var input = document.querySelectorAll(".filter__prices-input");
        input.forEach(function(elem){
          if(elem.value != ""){
            elem.value = "";
          }
        })
        var inputSearch = document.querySelectorAll(".filter__input");
        inputSearch.forEach(function(elem){
          if(elem.value != ""){
            elem.value = "";
          }
        })
      })
    }

    function initializeSwiper() {
      var swiperReview = new Swiper('.content__reviews-swiper', {
        slidesPerView: 1.1,
        direction: 'horizontal',
        spaceBetween: 20,
        loop: true
      })
    }
    function initializeBrendSwiper() {
      var swiperReview = new Swiper('.content__brands-swiper', {
        slidesPerView: 1.1,
        direction: 'horizontal',
        spaceBetween: 20,
        loop: true
    })
    }
    let hidden = document.querySelector('.content__brands-hidden')
    if(window.innerWidth <= 421 && hidden) {
      
      let main = document.querySelector('.content__brands-list')
      console.log(main);
      main.classList.add('content__brands-list--disabled')
      hidden.classList.remove('content__brands-hidden--disabled')
      initializeBrendSwiper()
    }
    let reviews = document.querySelector('.content__reviews')
    if(window.innerWidth <= 550 && reviews) {
      
      let swiperSm = document.querySelector('.content__reviews-swiper')
      reviews.classList.add('content__reviews--disable')
      swiperSm.classList.remove('content__reviews-swiper--disable')
      initializeSwiper()
    } 


    const map = document.getElementById('map')
    if(map){
      ymaps.ready(init);
    }
    function init(){

        var myMap = new ymaps.Map("map", {

            center: [60.002347, 30.264841],
            zoom: 15,
            controls: []
        });
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/picture/ping.png',
          iconImageSize: [26, 34],
      }),
      myMap.geoObjects.add(myPlacemark);
    }

})