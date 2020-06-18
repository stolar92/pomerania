// Initialize and add the map
function initMap() {
    // The location of Uluru
    var jagielonska = {lat: 53.431340, lng: 14.542685};
    var piastow = {lat: 53.431719, lng: 14.539285};
    var centerPoint = {lat: 53.431679, lng: 14.541113}
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: centerPoint});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: jagielonska, map: map});
    var marker2 = new google.maps.Marker({position: piastow, map: map});
  }
