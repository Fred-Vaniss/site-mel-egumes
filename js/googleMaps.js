// Initialize and add the map
function initMap() {
  // The location of Uluru
  var melegumes = {lat: 50.470542, lng: 3.956602};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: melegumes});
  // The marker, positioned at Uluru

  var image = '../img/marker.png'
  var marker = new google.maps.Marker({position: melegumes, map: map, icon: image});
}