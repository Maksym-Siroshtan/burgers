export function map() {
  function init() {
    let map = new ymaps.Map("map", {
      center: [59.93700627957135, 30.312150230717233],
      zoom: 12,
    });

    let placemark_1 = new ymaps.Placemark(
      [59.94355223518339, 30.366738548588327],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../dist/img/icons/icons.svg#map-marker",
        iconImageSize: [80, 80],
        iconImageOffset: [0, 0],
      }
    );

    let placemark_2 = new ymaps.Placemark(
      [59.965936490325326, 30.31180690796334],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../dist/img/icons/icons.svg#map-marker",
        iconImageSize: [80, 80],
        iconImageOffset: [0, 0],
      }
    );

    let placemark_3 = new ymaps.Placemark(
      [59.90149773727356, 30.273698082279743],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../dist/img/icons/icons.svg#map-marker",
        iconImageSize: [80, 80],
        iconImageOffset: [0, 0],
      }
    );

    let placemark_4 = new ymaps.Placemark(
      [59.91915899453647, 30.467643485351555],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../dist/img/icons/icons.svg#map-marker",
        iconImageSize: [80, 80],
        iconImageOffset: [0, 0],
      }
    );

    map.controls.remove("geolocationControl"); // удаляем геолокацию
    map.controls.remove("searchControl"); // удаляем поиск
    map.controls.remove("trafficControl"); // удаляем контроль трафика
    map.controls.remove("typeSelector"); // удаляем тип
    //map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    //map.controls.remove("zoomControl"); // удаляем контрол зуммирования
    map.controls.remove("rulerControl"); // удаляем контрол правил
    map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark_1);
    map.geoObjects.add(placemark_2);
    map.geoObjects.add(placemark_3);
    map.geoObjects.add(placemark_4);
  }

  ymaps.ready(init);
}
