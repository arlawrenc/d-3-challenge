
var margin = { top: 10, right: 30, bottom: 30, left: 60 },
  width = 1000 - margin.left - margin.right,
  height = 720 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3
  .select("#my_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//C:\Users\timli\OneDrive\appjedi\Students\AudreyL\Instructions1\Instructions\StarterCode\assets\data\data.csv
//Read the data
var i = 0;
var states = "";
d3.csv("data.csv", function (data) {
  //console.log(data[0].state);
  // Add X axis
  var i3 = 0;
  //for (var i2 in data) ++i3;
  //alert(i3);
  var x = d3.scaleLinear().domain([24, 50]).range([0, width]);
  var test = "";

  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis

  var y = d3.scaleLinear().domain([4, 30]).range([height, 0]);
  svg.append("g").call(d3.axisLeft(y));

  var elem = svg.selectAll("g").data(data).enter();
  var elemEnter = elem;

  for (var idx in data) {
    if (data[idx].abbr == undefined) continue;

    var age = data[idx].age;

    var x = (age - 24) * 35;

    var smoke = data[idx].smokes;
    var y = 680 - (smoke - 4) * 26;

    var color = "red";
    if (smoke < 15) color = "green";
    else if (smoke < 20) color = "yellow";

    elem
      .append("circle")
      .attr("cx", x + 7)
      .attr("cy", y)
      .attr("r", 15)
      .style("fill", color);
    elem
      .append("text")
      .attr("dx", x)
      .attr("dy", y)
      .attr("font-size", "10px")
      .text(data[idx].abbr);
  }
});
