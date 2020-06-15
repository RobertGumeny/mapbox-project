const MODE_BUTTON = document.getElementById("dark-mode")


const MAPBOX_STYLE_LIGHT = 'mapbox://styles/rgumeny/ckbgphp5d46y71iqrbjbn2gtc';
const MAPBOX_STYLE_DARK = 'mapbox://styles/rgumeny/ckbgu000k0hys1ila3gnvd4lg';
let mapboxStyle = MAPBOX_STYLE_LIGHT;
let darkmode = false;

let long = -122.335167;
let lat = 47.608013;


const ACCESS_TOKEN = 'pk.eyJ1Ijoicmd1bWVueSIsImEiOiJja2JncGJ4cHcxN2ptMzVvNDVzYzFnYWYwIn0.eMqsrp118bSjPauhgyxmtA';

if (!darkmode) {
  mapboxStyle = MAPBOX_STYLE_LIGHT;
} else {
  mapboxStyle = MAPBOX_STYLE_DARK;
}


mapboxgl.accessToken = ACCESS_TOKEN;
var map = new mapboxgl.Map({
  container: 'map',
  style: mapboxStyle,
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