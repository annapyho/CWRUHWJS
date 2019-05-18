// from data.js
var tableData = data;

//home page table with all data
var tbody = d3.select("tbody");
tableData.forEach(function(ufoSighting) {
  // console.log(ufoSighting);
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(function([key, value]) {
    // console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});
//function to clear all content before displaying filtered data
function clear () {
  var tableBodyElements = document.getElementsByTagName("tbody");
  var firstTableBody = tableBodyElements[0];
  firstTableBody.innerHTML = "";
};

//function to filter and display filtered data in the same table format
function populate() {
  event.preventDefault();
  clear();
  var dateEnter = d3.select("#datetime");
  var inputValue = dateEnter.property("value");
  var filteredDate = tableData.filter(tableData => tableData.datetime === inputValue);
  console.log(filteredDate);
  
  var tbody = d3.select("tbody");
  filteredDate.forEach(function(ufoSighting) {
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(function([key, value]) {
  var cell = row.append("td");
  cell.text(value);})
  });
    };

//use d3 to select button id and assign function "populate" to event
var submit = d3.select("#filter-btn")
submit.on("click", populate);

// same using Event Listener instead of d3
// document.getElementById("filter-btn").addEventListener('click', populate);
