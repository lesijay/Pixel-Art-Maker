// Select color input
// Select size input

var gridHeight, gridWidth, colorPick;

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(event) {
      event.preventDefault();
      makeGrid();
})

function makeGrid() {
    // Your code goes here!
    $('tr').remove();
    gridHeight = $("#inputHeight").val();
    gridWidth = $("#inputWidth").val();
    $("#pixel_canvas").empty();
    for (var x = 1; x <= gridHeight; x++) {
        $("#pixelCanvas").append('<tr id =table' + x + '></tr>');
        for (var y = 1; y <= gridWidth; y++) {
          $("#table" + x).append('<td></td>');
        }
    }
    $("td").click(function (){
      colorPick = $("#colorPicker").val();
      if ($(this).attr('style')){
          $(this).removeAtrr("style")
      } else {
          $(this).attr('style', 'background-color:' + colorPick);
        }
    })
}
