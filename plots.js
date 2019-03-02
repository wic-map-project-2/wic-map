// Sort the data array
data.sort(function(a, b) {
  return parseFloat(b.WICStore) - parseFloat(a.WICStore);
});

// Slice the first 10 objects for plotting
data = data.slice(0, 10);

// Reverse the array due to Plotly's defaults
data = data.reverse();

// Trace
var trace1 = {
  x: data.map(row => row.WICStore),
  y: data.map(row => row.County),
  text: data.map(row => row.County+"-"+row.Population),
  name: "County",
  type: "bar",
  orientation: "h"
};

// data
var data = [trace1];

// Apply the group bar mode to the layout
var layout = {
  title: "Vendor in County",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);
