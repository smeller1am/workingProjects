var points = [
    ['', "51.531922", "46.030989"],
    ['', "51.525318", "46.022573"],
    ['', "51.532964", "46.016175"],
];

var myMap;
var oldCenter;
var myCollection;
var arrayBalloons = [];
ymaps.ready(function () {
    // Коллекция гео-точек, добавленных на карту
    myCollection = new ymaps.GeoObjectCollection();
    if(document.getElementById("mapYandex")){
    // Помещаем карту в элемент DIV с id, равным «map»
    myMap = new ymaps.Map("mapYandex", {
        center: [51.529745, 46.032175], // Начальные значения центра карты
        zoom: 14,         // Начальное значение зума карты
        controls: ['zoomControl'],
    });
    if($(window).width() < 1024) {
        myMap.behaviors.disable('scrollZoom');
        // myMap.behaviors.disable('drag');
    }
    // Перебираем в цикле точки, которые надо добавить на карту
    for (i = 0; i < points.length; i++) {
        var myPlacemark = new ymaps.Placemark([
          points[i][1], points[i][2]
        ], {
            hintContent: points[i][0],
            balloonContent: points[i][0]
        },
         {
        	// Необходимо указать данный тип макета.
        	iconLayout: 'default#image',
        	// Своё изображение иконки метки.
        	iconImageHref: '../img/Map (1).svg',
            hideIconOnBalloonOpen:false,
        	iconImageSize: [40, 40],

        	// iconImageOffset: [-120, -140],

        });
        myMap.behaviors.disable('scrollZoom'); 

        myCollection.add(myPlacemark);
        myMap.geoObjects.add(myPlacemark);

    }
    // Добавляем точки на карту
    myMap.geoObjects.add( myCollection ); 

    }
    
});



function setCenter(x, y) {
    ymaps.ready(function () {
        myMap.setCenter([x, y], 10, {
            checkZoomRange: false
        });
    });
};

function setCenterPos(x, y, i) {
    ymaps.ready(function () {
        myMap.setCenter([x, y], 10, {
            checkZoomRange: false
        });
        oldCenter = myMap.getCenter();
    });
    $("body, html").animate(function () {
        scrollTo: $(".map-footer").offset().top
    });
    // arrayBalloons[i].balloon.open();
    return false;
};

function overCenter(x, y) {
    ymaps.ready(function () {
        oldCenter = myMap.getCenter();
        setCenter(x, y);
    });
};
function oldPos() {
    ymaps.ready(function () {
        myMap.setCenter(oldCenter);
    });
};