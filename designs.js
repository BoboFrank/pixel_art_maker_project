// Declaration of global variables

var rows;
var columns;







// function to be run when submit button is clicked on. This function makes the grid

function makeGrid() {

    //assignment of a variable to the element with id pixel_canvas. This is so that the browser knos where to make the grid

    var grid = document.getElementById("pixel_canvas");


    /* assignment of variables declared globally to elements
   the rows variable is assigned to the height of the grid to be drawn
   the columns variable is assiged to the width of the grid to be drawn
    */


    rows = document.getElementById("input_height").value;
    columns = document.getElementById("input_width").value;

    //a forLoop to creat the grid

    for (var i = 0; i < rows; i++) {
        var createRow = grid.insertRow(i);


        for (var j = 0; j < columns; j++) {
            var createColumn = createRow.insertCell(j);


            /*
            an event listener to listen to when a color is selected and also when a box in the grid is selected
            it then applies the selected color to the selected grid
            */

            createColumn.addEventListener("click", function(colorSelector) {
                colorSelector.target.style.backgroundColor = document.getElementById("color_picker").value;
                this.style.borderColor = "#c45cae42";
                this.style.boxShadow = "0 0 15px #c45cae42";
            });



        }


    }


    return false;

}

//an event listener to listen for when the submit button is clicked so it can begin to run the commands within the makeGrid function.

document.getElementById("submit").addEventListener("click", function(defaultPrevention) {

    makeGrid();
    defaultPrevention.preventDefault();
});
