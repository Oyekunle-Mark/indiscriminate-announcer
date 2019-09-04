function initMap() {
  const input = document.getElementById('mapSuggestions');
  const autoComplete = new google.maps.places.Autocomplete(input);

  // autoComplete.addEventListener('place_changed', () => {
  //   var place = autocomplete.getPlace();
  //   document.getElementById('location-snap').innerHTML =
  //     place.formatted_address;
  //   document.getElementById(
  //     'lat-span',
  //   ).innerHTML = place.geometry.location.lat();
  //   document.getElementById(
  //     'lon-span',
  //   ).innerHTML = place.geometry.location.lng();
  // });
}
