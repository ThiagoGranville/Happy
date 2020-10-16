// create map
const map = L.map('mapid').setView([-8.0543953, -34.898379], 15);

// create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photo field
function addPhotoField() {
  // select images container
  const container = document.querySelector('#images');

  // select all upload fields
  const fieldsContainer = document.querySelectorAll('.new-upload');

  // clone last upload field
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // verify if the upload field is empty
  const input = newFieldContainer.children[0];

  if (input.value == '') {
    return;
  }

  // clean upload field value
  newFieldContainer.children[0].value = '';

  // add a new upload field
  container.appendChild(newFieldContainer);
}

// remove photo field
function deleteField(event) {
  // get the current target
  const span = event.currentTarget;

  // select all upload fields and verify if there is 1 or more
  const fieldsContainer = document.querySelectorAll('.new-upload');

  if (fieldsContainer.length < 2) {
    // clean upload field value
    span.parentNode.children[0].value = '';
    return;
  }

  // delete a field
  span.parentNode.remove();
}

//select yes or no
function toggleSelect(event) {
  //remove .active from buttons
  document
    .querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'));

  //add .active to this button
  const button = event.currentTarget;
  button.classList.add('active');

  //update the hidden input value
  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;
}
