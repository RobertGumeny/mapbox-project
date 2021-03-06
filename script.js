const MODE_BUTTON = document.getElementById("dark-mode")
let body = document.getElementById("body")


const MAPBOX_STYLE_LIGHT = 'mapbox://styles/rgumeny/ckbgphp5d46y71iqrbjbn2gtc/draft';
const MAPBOX_STYLE_DARK = 'mapbox://styles/rgumeny/ckbgu000k0hys1ila3gnvd4lg/draft';
let darkmode = false;

let long = -122.335167;
let lat = 47.608013;


const ACCESS_TOKEN = 'pk.eyJ1Ijoicmd1bWVueSIsImEiOiJja2JncGJ4cHcxN2ptMzVvNDVzYzFnYWYwIn0.eMqsrp118bSjPauhgyxmtA';

function toggleDarkMode() {
  if (!darkmode) {
    darkmode = true;
    body.style.backgroundColor = '#444'
    body.style.color = '#f4f4f4'
    map.setStyle(MAPBOX_STYLE_DARK)
    MODE_BUTTON.innerText = "Light Mode";
  } else {
    body.style.backgroundColor = '#f5f5dc'
    body.style.color = '#1d1b1b'
    darkmode = false;
    map.setStyle(MAPBOX_STYLE_LIGHT)
    MODE_BUTTON.innerText = "Dark Mode"
  }

}


mapboxgl.accessToken = ACCESS_TOKEN;
var map = new mapboxgl.Map({
  container: 'map',
  style: MAPBOX_STYLE_LIGHT,
  center: [long, lat],
  zoom: 10
})
map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  })
);
map.addControl(new mapboxgl.NavigationControl());

MODE_BUTTON.addEventListener('click', toggleDarkMode)