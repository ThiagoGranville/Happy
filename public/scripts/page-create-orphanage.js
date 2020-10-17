// criar mapa
const map = L.map('mapid').setView([-8.0543953, -34.898379], 15);

// criar e adicionar tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// criar icone
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// criar e adicionar marcador
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  // remmove o icon
  marker && map.removeLayer(marker);

  // adicionada a layer do icon
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add campo de foto
function addPhotoField() {
  // seleciona o container images
  const container = document.querySelector('#images');

  // seleciona todos os containers de upload
  const fieldsContainer = document.querySelectorAll('.new-upload');

  // clona o ultimo upload container
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // verifica se o campo está vazio
  const input = newFieldContainer.children[0];

  if (input.value == '') {
    return;
  }

  // limpa o campo
  newFieldContainer.children[0].value = '';

  // adiciona um novo campo
  container.appendChild(newFieldContainer);
}

// remover um campo de foto
function deleteField(event) {
  // guarda o current
  const span = event.currentTarget;

  // seleciona todos os campos de upload e verifica a quantidade
  const fieldsContainer = document.querySelectorAll('.new-upload');

  if (fieldsContainer.length < 2) {
    // clean upload field value
    span.parentNode.children[0].value = '';
    return;
  }

  // deleta o campo
  span.parentNode.remove();
}

//selecionar sim ou não
function toggleSelect(event) {
  //remove .active de buttons
  document
    .querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'));

  //adiciona o .active para este botão
  const button = event.currentTarget;
  button.classList.add('active');

  //atualiza o valor do hidden input
  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;
}

//validar se lat e lng estão preenchidos
function validate(event){
  
  const lat = document.querySelector('[name=lat]').value;
  const lng = document.querySelector('[name=lng]').value;

 if (lat == '' && lng == '') {
   event.preventDefault();
   alert('Selecione um ponto no mapa');
 }
}