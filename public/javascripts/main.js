var btnanadir = $('#anadir');


btnanadir.click(function() {
  $.post( "/registro", function( data ) {
    console.log(data)
    var nombre = $('#nombre').val();
      alert(nombre);
      console.log(data);
  });
});
