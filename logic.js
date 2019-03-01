// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var myMap = L.map("map", {
  center: [37.758289, -121.704496],
  zoom: 5.6
});

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://https://www.openstreetmap.org/relation/165475#map=6/37.414/-119.301/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  // center: [-117.921600, 37.069814],
  // zoom: 5.6,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// var data = $.csv.toObjects("vendor.csv")
// console.log("data");
