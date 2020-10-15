const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// create map
const map = L.map('mapid', options).setView([-8.0543953, -34.898379], 15);

// create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
  iconUrl: './public/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create and add marker
L.marker([-8.0543953, -34.898379], { icon }).addTo(map);

//image gallery

function selectImage(event) {
  const button = event.currentTarget;

  //remove todas as classes active
  const buttons = document.querySelectorAll('.images button');

  buttons.forEach((button) => {
    button.classList.remove('active');
  });

  //seleciona imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector('.orphanage-details > img');

  //atualiza container de imagem
  imageContainer.src = image.src;

  //readiciona classe active no botão ativo
  button.classList.add('active');
}
