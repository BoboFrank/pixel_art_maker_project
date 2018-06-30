// Declaration of global variables

var rows;
var columns;
var color = "#000000";

// function to be run when submit button is clicked on. This function makes the grid

function makeGrid() {
  
  //assignment of a variable to the element with id pixel_canvas. This is so that the browser knos where to make the grid

  var grid = document.getElementById("pixel_canvas");
  grid.innerHTML = "";
  
  //a whileLoop to initialize the grid

  while(grid.rows.length > 0)
    grid.deleteRow(0);

  /* assignment of variables declared globally to elements
  the rows variable is assigned to the height of the grid to be drawn
  the columns variable is assiged to the width of the grid to be drawn
  */

  rows = document.getElementById("input_height").value;
  columns = document.getElementById("input_width").value;

  //a forLoop to creat the grid

  for (var i = 0; i < rows; i++) {
    var row_elem = grid.insertRow(i);
    row_elem.setAttribute("class", "row");
    for (var j = 0; j < columns; j++) {
      var cell= row_elem.insertCell(j);

      /*
      an event listener to listen to when a color is selected and also when a box in the grid is selected
      it then applies the selected color to the selected grid
      */

      cell.addEventListener('click', function(colorSelector) {
        colorSelector.target.style.backgroundColor = document.getElementById("colorPicker").value;
        this.style.borderColor="#9ecaed";
        this.style.boxShadow="0 0 10px #9ecaed";
      });
    }
  }
  return false;
}

//an event listener to listen for when the submit button is clicked so it can begin to run the commands within the makeGrid function.

document.getElementById("size_picker").addEventListener("submit", function(colorSelector) {
  colorSelector.preventDefault();
  makeGrid();
});
