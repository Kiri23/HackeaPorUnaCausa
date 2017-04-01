var btnanadir = $('#anadir');

btnanadir.click(function() {
  $.post( "/registro", function( data ) {
      console.log(data);
  });
});
