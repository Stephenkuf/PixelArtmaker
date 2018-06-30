// Select color input
// Select size input
//picking sizes
$('#size-Picker').submit(function (event) {
    event.preventDefault();
    var height, width;
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);
    putColor()
});

// Your code goes here!
function makeGrid(row, col) {
    $('tr').remove();
    for (var i = 1; i <= row; i++) {
       // $('table').append('<tr></tr>');
        $('#pixel-Canvas').append('<tr></tr>');
        for (var j = 1; j <=col; j++) {
            //$('tr').append('<td></td>');
           $('tr').filter(':last').append('<td></td>');
        }
    }
}

// adding  colors to the cells
function putColor() {
    var col = $('td');
    col.click(function () {
    var color = $('#colorPicker').val();
    if ($(this).attr('style')) {
        $(this).removeAttr('style');
     } else {
        $(this).attr('style', 'background-color:' + color);
     }
   });
}